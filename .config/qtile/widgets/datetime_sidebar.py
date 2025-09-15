from libqtile.widget import Clock
from libqtile.log_utils import logger
from libqtile.command.base import expose_command
from qtile_extras.widget.mixins import ExtendedPopupMixin
import datetime
import calendar
import asyncio
from threading import Thread
import os
import re
import time
import subprocess
import queue

from dbus_fast import Message, Variant
from dbus_fast.aio import MessageBus
from dbus_fast.constants import MessageType
from libqtile.utils import _send_dbus_message, add_signal_receiver, create_task

from aesthetics import Colors


DEFAULT = os.path.expanduser("~/.config/qtile/utils/none.png")
BRIGHT = "/sys/class/backlight/intel_backlight"

MPRIS_PATH = "/org/mpris/MediaPlayer2"
MPRIS_OBJECT = "org.mpris.MediaPlayer2"
MPRIS_PLAYER = "org.mpris.MediaPlayer2.Player"
PROPERTIES_INTERFACE = "org.freedesktop.DBus.Properties"


def get_brightness():
    try:
        with open(f"{BRIGHT}/brightness", "r") as f:
            current = int(f.read().strip())
        with open(f"{BRIGHT}/max_brightness", "r") as f:
            max_bright = int(f.read().strip())
        return int((current / max_bright) * 100)
    except:
        pass
    return 100


def get_volume():
    try:
        result = subprocess.run(
            ["amixer", "get", "Master"],
            capture_output=True,
            text=True
        )
        volume_match = re.search(r"\[(\d+)%\]", result.stdout)
        volume = int(volume_match.group(1)) if volume_match else 0
        return volume
    except:
        return 50


def get_volume_icon(volume, mute=False):
    if mute:
        return "󰖁"
    elif volume == 0:
        return "󰕿"
    elif volume < 50:
        return "󰖀"
    else:
        return "󰕾"


class CalMasterWidget(Clock, ExtendedPopupMixin):

    def __init__(self, **config):
        if "format" not in config:
            config["format"] = "%H\n%M\n%S"
        
        Clock.__init__(self, **config)
        ExtendedPopupMixin.__init__(self, **config)
        self.add_defaults(ExtendedPopupMixin.defaults)
        self.add_callbacks({"button1": self.show_popup})
        
        self._current_player = None
        self.player_names = {}
        self.bus = None
        self.metadata = {}
        self.playback_status = "Stopped"
        self.separator = ", "
        self._mpris_initialized = False
        
    def _setup(self, qtile, bar):
        Clock._setup(self, qtile, bar)
        ExtendedPopupMixin._setup(self, qtile, bar)
        
        if not self._mpris_initialized:
            try:
                create_task(self._config_async())
                self._mpris_initialized = True
            except Exception as e:
                logger.warning(f"Failed to initialize MPRIS2: {e}")

    async def _config_async(self):
        try:
            await add_signal_receiver(
                self._name_owner_changed,
                session_bus=True,
                signal_name="NameOwnerChanged",
                dbus_interface="org.freedesktop.DBus",
            )

            subscribe = await add_signal_receiver(
                self.message,
                session_bus=True,
                signal_name="PropertiesChanged",
                path="/org/mpris/MediaPlayer2",
                dbus_interface="org.freedesktop.DBus.Properties",
            )

            if not subscribe:
                logger.warning("Unable to add signal receiver for Mpris2 players")

        except Exception as e:
            logger.warning(f"Failed to set up MPRIS2 signal receivers: {e}")

    def _name_owner_changed(self, message):
        name, _, new_owner = message.body

        if new_owner == "" and name == self._current_player:
            self._current_player = None
            self.metadata = {}
            self.playback_status = "Stopped"

    def message(self, message):
        create_task(self.process_message(message))

    async def process_message(self, message):
        try:
            current_player = message.sender

            if current_player not in self.player_names:
                self.player_names[current_player] = await self.get_player_name(current_player)

            self._current_player = current_player
            self.parse_message(*message.body)
        except Exception as e:
            logger.warning(f"Error processing MPRIS2 message: {e}")

    async def _send_message(self, destination, interface, path, member, signature, body):
        try:
            bus, message = await _send_dbus_message(
                session_bus=True,
                message_type=MessageType.METHOD_CALL,
                destination=destination,
                interface=interface,
                path=path,
                member=member,
                signature=signature,
                body=body,
                bus=self.bus,
            )

            if self.bus is None:
                self.bus = bus

            return message
        except Exception as e:
            logger.warning(f"Error sending D-Bus message: {e}")
            return None

    async def get_player_name(self, player):
        try:
            message = await self._send_message(
                player,
                PROPERTIES_INTERFACE,
                MPRIS_PATH,
                "Get",
                "ss",
                [MPRIS_OBJECT, "Identity"],
            )

            if message is None or message.message_type != MessageType.METHOD_RETURN:
                logger.warning("Could not retrieve identity of player on %s.", player)
                return ""

            return message.body[0].value
        except Exception as e:
            logger.warning(f"Error getting player name: {e}")
            return ""

    def parse_message(
            self,
            _interface_name, changed_properties,
            _invalidated_properties
    ):
        if not self.configured:
            return

        if ("Metadata" not in changed_properties
            and "PlaybackStatus" not in changed_properties):
            return

        try:
            metadata = changed_properties.get("Metadata")
            if metadata and hasattr(metadata, 'value'):
                self.metadata = {}
                for key in metadata.value:
                    val = getattr(metadata.value.get(key), "value", None)
                    if isinstance(val, str):
                        self.metadata[key] = val
                    elif isinstance(val, list):
                        self.metadata[key] = self.separator.join(
                            y for y in val
                            if isinstance(y, str)
                        )

            playbackstatus = getattr(
                changed_properties.get("PlaybackStatus"),
                "value", None
            )
            if playbackstatus:
                self.playback_status = playbackstatus
                
        except Exception as e:
            logger.warning(f"Error parsing MPRIS2 message: {e}")

    def _player_cmd(self, cmd):
        if self._current_player is None:
            logger.debug("No current player available for command")
            return

        try:
            task = create_task(self._send_player_cmd(cmd))
            if task:
                task.add_done_callback(self._task_callback)
        except Exception as e:
            logger.warning(f"Error creating player command task: {e}")

    async def _send_player_cmd(self, cmd):
        try:
            message = await self._send_message(
                self._current_player,
                MPRIS_PLAYER,
                MPRIS_PATH,
                cmd,
                "",
                [],
            )
            return message
        except Exception as e:
            logger.warning(f"Error sending player command: {e}")
            return None

    def _task_callback(self, task):
        try:
            message = task.result()
            if message is None:
                return

            if message.message_type != MessageType.METHOD_RETURN:
                logger.warning("Unable to send command to player.")
        except Exception as e:
            logger.warning(f"Error in task callback: {e}")

    def update_datetime(self):
        now = datetime.datetime.now()
        
        return {
            "current_day": now.strftime("%A"),
            "current_date": now.strftime("%d %B"),
        }

    def update_calendar(self):
        now = datetime.datetime.now()
        cal = calendar.Calendar()
        weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

        cal_dict = {
            "current_month": now.strftime("%B %Y"),
            **{f"weekday_{i}": day for i, day in enumerate(weekdays)},
            **{f"day_{i}_{ii}": "" for i in range(6) for ii in range(7)}
        }

        monthcal = cal.monthdatescalendar(now.year, now.month)
        for i, week in enumerate(monthcal):
            for ii, day in enumerate(week):
                if day.month != now.month:
                    label = ""
                else:
                    label = str(day.day)

                if day.day == now.day:
                    label = f"<span foreground='{Colors.red}'>{label}</span>"

                cal_dict[f"day_{i}_{ii}"] = label

        return cal_dict

    def update_music(self):
        if not self._current_player or not self.metadata:
            return {
                "music_cover": DEFAULT,
                "music_title": "No music",
                "music_artist": "Not playing",
            }
        
        try:
            title = self.metadata.get('xesam:title', 'Unknown Title')
            artist = self.metadata.get('xesam:artist', 'Unknown Artist')
            
            artUrl = self.metadata.get('mpris:artUrl', DEFAULT)
            if artUrl and artUrl.startswith('file://'):
                artUrl = artUrl[7:]
            if (not artUrl
                or not (artUrl.startswith('http')
                        or os.path.exists(artUrl))):
                artUrl = DEFAULT
            
            return {
                "music_cover": artUrl,
                "music_title": title,
                "music_artist": artist,
            }
            
        except Exception as e:
            logger.warning(f"Error getting music info: {e}")
            return {
                "music_cover": DEFAULT,
                "music_title": "Error",
                "music_artist": "Failed to get info",
            }
    
    def update_vol_bright(self):
        brightness = get_brightness()
        volume = get_volume()
        volume_icon = get_volume_icon(volume)

        return {
            "brightness_value": brightness/100,
            "volume_value": volume/100,
            "brightness_icon": "󰃞",
            "volume_icon": volume_icon,
        }

    @expose_command
    def set_brightness_value(self, value):
        try:
            with open(f"{BRIGHT}/max_brightness", "r") as f:
                max_bright = int(f.read().strip())
            target = int((value / 100) * max_bright)
            with open(f"{BRIGHT}/brightness", "w") as f:
                f.write(str(target))
        except:
            pass

    @expose_command
    def set_volume_value(self, value):
        try:
            subprocess.run(['amixer', 'set', 'Master', f'{value}%'])
        except:
            pass

    @expose_command
    def music_play_pause(self):
        self._player_cmd("PlayPause")

    @expose_command
    def music_next(self):
        self._player_cmd("Next")

    @expose_command
    def music_previous(self):
        self._player_cmd("Previous")

    def update_popup(self):
        try:
            self.extended_popup.update_controls(
                **self.update_datetime(),
                **self.update_calendar(),
                **self.update_music(),
                **self.update_vol_bright(),
            )
        except Exception as e:
            logger.error(f"Error updating popup: {e}")
