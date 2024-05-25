import subprocess
import asyncio
import pulsectl_asyncio
from libqtile import widget
from libqtile.widget import base
from pulsectl import PulseError
from libqtile import qtile
from libqtile.log_utils import logger
from libqtile.utils import create_task

lock = asyncio.Lock()


class PulseConnection:

    def __init__(self):
        self._subscribed = False
        self._event_handler = None
        self.default_sink = None
        self.default_sink_name = None
        self.pulse = None
        self.configured = False
        self.callbacks = []
        self.qtile = qtile
        self.timer = None

    async def _configure(self):
        async with lock:
            if self.configured:
                return

            self.pulse = pulsectl_asyncio.PulseAsync("qtile-pulse")

            await self._check_pulse_connection()

            self.configured = True

    async def _check_pulse_connection(self):
        if not self.pulse.connected:
            if self._subscribed:
                if self._event_handler is not None:
                    self._event_handler.cancel()
                    self._event_handler = None
                self._subscribed = False
            try:
                await self.pulse.connect()
                logger.debug("Connection to pulseaudio ready")
            except PulseError:
                logger.warning(
                    "Failed to connect to pulseaudio, retrying in 10s")
            else:
                await self.get_server_info()

                self._event_handler = create_task(self._event_listener())
                self._subscribed = True

        self.timer = self.qtile.call_later(
            10, create_task, self._check_pulse_connection())

    async def _event_listener(self):
        async for event in self.pulse.subscribe_events("sink", "server"):
            if event.facility == "sink":
                await self.get_sink_info()
            elif event.facility == "server":
                await self.get_server_info()

    async def get_server_info(self):
        info = await self.pulse.server_info()
        self.default_sink_name = info.default_sink_name
        await self.get_sink_info()

    async def get_sink_info(self):
        sinks = [
            sink for sink in await self.pulse.sink_list() if sink.name == self.default_sink_name
        ]
        if not sinks:
            logger.warning("Could not get info for default sink")
            self.default_sink = None
            return

        self.default_sink = sinks[0]
        self.update_clients()

    def get_volume(self):
        if not self.pulse.connected:
            return None, None

        if self.default_sink:
            mute = self.default_sink.mute
            base = self.default_sink.base_volume
            if not base:
                return -1, mute
            current = self.default_sink.volume.value_flat
            return round(current * 100 / base), mute
        return -1, 0

    def update_clients(self):
        for callback in self.callbacks:
            callback(*self.get_volume())

    def subscribe(self, callback):
        need_configure = not bool(self.callbacks)
        self.callbacks.append(callback)

        if need_configure:
            create_task(self._configure())

    def unsubscribe(self, callback):
        try:
            self.callbacks.remove(callback)
        except ValueError:
            pass

        if not self.callbacks:
            self.pulse.close()

            if self.timer:
                self.timer.cancel()
                self.timer = None

            self.configured = False


pulse = PulseConnection()


class V_Audio(widget.PulseVolume):

    orientations = base.ORIENTATION_BOTH

    def __init__(self, **config):
        self.theme_path = None
        widget.PulseVolume.__init__(self, **config)

    def _configure(self, qtile, bar):
        widget.PulseVolume._configure(self, qtile, bar)
        pulse.subscribe(self.get_vals)

    def _update_drawer(self):
        if self.theme_path:
            self.drawer.clear(self.background or self.bar.background)
            if self.volume <= 0:
                img_name = "audio-volume-muted"
            elif self.volume <= 30:
                img_name = "audio-volume-low"
            elif self.volume < 80:
                img_name = "audio-volume-medium"
            else:  # self.volume >= 80:
                img_name = "audio-volume-high"

            self.drawer.ctx.set_source(self.surfaces[img_name])
            self.drawer.ctx.paint()
        elif self.emoji:
            if len(self.emoji_list) < 4:
                self.emoji_list = ["\U0001f507", "\U0001f508", "\U0001f509", "\U0001f50a"]
                logger.warning(
                    "Emoji list given has less than 4 items. Falling back to default emojis."
                )

            device_list = subprocess.check_output(
                ["bluetoothctl", "devices", "Connected"],
            )
            if device_list:
                if "boAt Rockerz 510" in device_list.decode("utf-8"):
                    self.text = self.emoji_list[4]
            elif self.volume <= 0:
                self.text = self.emoji_list[0]
            elif self.volume <= 30:
                self.text = self.emoji_list[1]
            elif self.volume < 80:
                self.text = self.emoji_list[2]
            elif self.volume >= 80:
                self.text = self.emoji_list[3]
        else:
            self.text = (
                    self.mute_format if self.mute or self.volume < 0 else self.unmute_format
                    ).format(volume=self.volume)

    def calculate_length(self):
        if self.text:
            return min(self.layout.height, self.bar.height) + self.actual_padding * 2
        else:
            return 0

    def draw(self):
        if not self.can_draw():
            return
        self.drawer.clear(self.background or self.bar.background)

        self.drawer.ctx.save()
        size = self.bar.width

        self.layout.draw(
            (size // 2) - (self.layout.width // 2) - 2,
            0,
        )
        self.drawer.ctx.restore()
        self.drawer.draw(
            offsetx=self.offsetx, offsety=self.offsety, width=self.width, height=self.height
        )
