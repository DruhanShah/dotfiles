import os
import re
import subprocess
import asyncio
from libqtile import bar, layout, widget, hook, extension
from libqtile.utils import create_task
from libqtile.config import Drag, Group, Key, KeyChord, Match, Screen
from libqtile.config import ScratchPad, DropDown
from libqtile.lazy import lazy
import widgets as custom

TRANSPARENT = "#00000000"
ROSEWATER = "#f5e0dc"
FLAMINGO = "#f2cdcd"
PINK = "#f5c2e7"
MAUVE = "#cba6f7"
RED = "#F38ba8"
MAROON = "#eba0ac"
PEACH = "#fab387"
YELLOW = "#f9e2af"
GREEN = "#a6e3a1"
TEAL = "#94e2d5"
SKY = "#89dceb"
SAPPHIRE = "#74c7ec"
BLUE = "#89b4fa"
LAVENDER = "#b4befe"
TEXT = "#cdd6f4"
SUBTEXT1 = "#bac2de"
SUBTEXT0 = "#a6adc8"
OVERLAY2 = "#9399b2"
OVERLAY1 = "#7f849c"
OVERLAY0 = "#6c7086"
SURFACE2 = "#585b70"
SURFACE1 = "#45475a"
SURFACE0 = "#313244"
BASE = "#1e1e2e"
MANTLE = "#181825"
CRUST = "#11111b"

home = os.path.expanduser("~")

mod = "mod4"
ctrl = "control"
shift = "shift"
alt = "mod1"
vb_command = f"{home}/.config/qtile/scripts/dunst-vb.sh"
wallpaper = f"{home}/Wallpapers/pixel-plateau.png"
roficlip = "rofi -modi 'clipboard:greenclip print' -show clipboard"


@lazy.function
def toggle_trackpad(qtile):
    status = subprocess.check_output(["xinput", "list-props", "10"])
    status = status.decode("utf-8")
    status = re.search(r"Device Enabled.*(\d)", status)
    status = status.group(1)

    if status == "1":
        subprocess.run(["xinput", "disable", "10"])
    else:
        subprocess.run(["xinput", "enable", "10"])


@lazy.function
def rofi(qtile, command):

    async def run():
        proc = await asyncio.create_subprocess_shell(command)
        return await proc.wait()

    def callback(task):
        widget_list[1].hook_response(rofi=False)

    widget_list[1].hook_response(rofi=True)
    task = create_task(run())
    task.add_done_callback(callback)


powermenu = extension.CommandSet(
    commands={
        "quit qtile": "qtile cmd-obj -o cmd -f shutdown",
        "lock": "betterlockscreen -l",
        "suspend": "systemctl suspend",
        "reboot": "reboot",
        "shutdown": "shutdown now",
    },
    dmenu_command="rofi -dmenu"
)

keys = [
    Key([], "XF86MonBrightnessUp", lazy.spawn(f"{vb_command} bright_up")),
    Key([], "XF86MonBrightnessDown", lazy.spawn(f"{vb_command} bright_down")),
    Key([], "XF86AudioRaiseVolume", lazy.spawn(f"{vb_command} vol_up")),
    Key([], "XF86AudioLowerVolume", lazy.spawn(f"{vb_command} vol_down")),
    Key([], "XF86AudioMute", lazy.spawn(f"{vb_command} volume_mute")),
    Key([], "XF86AudioPlay", lazy.spawn(f"{vb_command} play_pause")),
    Key([], "print", lazy.spawn("flameshot gui")),

    Key([mod], "h", lazy.layout.left()),
    Key([mod], "l", lazy.layout.right()),
    Key([mod], "j", lazy.layout.down()),
    Key([mod], "k", lazy.layout.up()),
    Key([mod], "space", lazy.group.next_window()),
    Key([mod, shift], "h", lazy.layout.shuffle_left()),
    Key([mod, shift], "l", lazy.layout.shuffle_right()),
    Key([mod, shift], "j", lazy.layout.shuffle_down()),
    Key([mod, shift], "k", lazy.layout.shuffle_up()),
    Key([mod, ctrl], "h", lazy.layout.grow_left()),
    Key([mod, ctrl], "l", lazy.layout.grow_right()),
    Key([mod, ctrl], "j", lazy.layout.grow_down()),
    Key([mod, ctrl], "k", lazy.layout.grow_up()),

    Key([mod, shift], "space", lazy.window.toggle_floating()),
    Key([mod], "f", lazy.window.toggle_fullscreen()),

    Key([mod], "Return", lazy.spawn("kitty")),
    Key([mod], "b", lazy.spawn("qutebrowser")),

    Key([mod, ctrl], "space", lazy.spawn("dunstctl close-all")),

    Key([mod], "Semicolon", rofi("rofi -show run")),
    KeyChord([mod], "r", [
        Key([], "w", rofi("rifi")),
        Key([], "b", rofi("rofi-bluetooth")),
        Key([], "c", rofi(roficlip)),
        Key([], "q", rofi("rofi -show calc")),
        Key([], "n", rofi("rofi -modi nerdy -show nerdy")),
    ]),
    Key([mod], "q", lazy.run_extension(powermenu)),

    Key([mod], "F9", toggle_trackpad),
    Key([ctrl, shift], "w", lazy.window.kill()),
    Key([mod, shift], "r", lazy.reload_config()),
    Key([mod], "Escape", lazy.spawn("betterlockscreen -l")),
]

opts = {
    "x": 0.2, "width": 0.6,
    "y": 0.1, "height": 0.8,
    "opacity": 1,
}

groups = [Group(str(i)) for i in range(1, 11)]

scratch_names = ["Music", "Diagnostics"]
scratch_commands = [
    "spotify",
    "kitty -e zsh -ci 'btop'"
]
scratch_keys = ["m", "d"]

for group in groups:
    name = group.name
    key = name[-1]
    keys.append(Key([mod], key, lazy.group[name].toscreen(toggle=True)))
    keys.append(Key([mod, shift], key, lazy.window.togroup(name)))

groups.append(ScratchPad("scratch", [
    DropDown(name, command, **opts)
    for name, command in zip(scratch_names, scratch_commands)
]))

for name, key in zip(scratch_names, scratch_keys):
    keys.append(Key([mod], key, lazy.group["scratch"].dropdown_toggle(name)))

layouts = [
    layout.Columns(
        border_focus=SKY,
        border_focus_stack=SKY,
        border_normal=SKY,
        border_normal_stack=SKY,
        border_on_single=True,
        border_width=0,
        margin=8,
    ),
]


def trim(text):
    if text == "org.pwmt.zathura":
        return "zathura"
    if text == "Navigator":
        return "zotero"
    if text == "gl":
        return "mpv"
    return text


widget_defaults = dict(
    font="Operator Mono SSm",
    fontsize=14,
    padding=0,
    foreground=TEXT,
    background=CRUST,
)
extension_defaults = widget_defaults.copy()

widget_list = [
    widget.TextBox(
        background=BLUE,
        padding=-1,
    ),
    custom.Mode(
        doom=True,
        padding=3,
        tiling_mode=GREEN,
        floating_mode=RED,
        command_mode=PINK,
    ),
    widget.Memory(
        foreground=TEXT,
        background=CRUST,
        padding=4,
        format="{MemUsed: .1f}{mm}",
    ),
    widget.TextBox(
        fmt="   ",
        padding=0,
        foreground=BLUE,
    ),
    custom.Window(
        foreground=TEAL,
        fmt="<b>{}</b>",
        padding=6,
        parse_text=trim,
    ),
    custom.GroupScreen(
        foreground=TEXT,
    ),
    widget.Spacer(),
    custom.Spotify(
        format="{icon} {track} - {artist}",
        fmt="<b>{}</b>",
        padding=12,
        pause_icon="󰏤",
        play_icon="󰐊",
        foreground=GREEN,
    ),
    widget.Spacer(),
    widget.Battery(
        format="{char} {percent:2.0%}",
        charge_char="󰂋",
        discharge_char="󰁿",
        full_char="󱟢",
        unknown_char="󰂑",
        show_short_text=False,
        update_interval=20,
        foreground=GREEN,
        low_foreground=RED,
        low_percentage=0.2,
        padding=12,
    ),
    widget.TextBox(
        fmt=" ",
    ),
    widget.Clock(
        format="%H:%M:%S",
        mouse_callbacks={"Button1": lazy.spawn("galendae")},
        foreground=PINK,
        fmt="<b>{}</b>",
    ),
    widget.TextBox(
        fmt="  ",
    ),
    widget.TextBox(
        background=BLUE,
        padding=-1,
    ),
]

screens = [
    Screen(
        wallpaper_mode="fill",
        wallpaper=wallpaper,
        bottom=bar.Bar(
            widgets=widget_list,
            size=32,
            margin=[0, 0, 0, 0],
        ),
    ),
]

mouse = [
    Drag([mod], "Button1", lazy.window.set_position_floating(),
         start=lazy.window.get_position()),
    Drag([mod, shift], "Button1", lazy.window.set_size_floating(),
         start=lazy.window.get_size()),
]

dgroups_key_binder = None
dgroups_app_rules = []
follow_mouse_focus = False
bring_front_click = False
cursor_warp = False

floating_layout = layout.Floating(
    float_rules=[
        *layout.Floating.default_float_rules,
        Match(wm_class="confirmreset"),  # gitk
        Match(wm_class="makebranch"),  # gitk
        Match(wm_class="maketag"),  # gitk
        Match(wm_class="ssh-askpass"),  # ssh-askpass
        Match(title="branchdialog"),  # gitk
        Match(title="pinentry"),  # GPG key password entry
        Match(title="file-picker"),
        Match(wm_class="matplotlib"),
    ],
    border_focus=SKY,
    border_normal=SKY,
    border_width=0,
)
auto_fullscreen = True
focus_on_window_activation = "smart"
reconfigure_screens = True
auto_minimize = False
wmname = "QTile"


@hook.subscribe.startup_once
def autostart():
    subprocess.Popen(["greenclip", "daemon"])
    subprocess.Popen([f"{home}/.config/qtile/scripts/onedrive.sh"])
    subprocess.Popen(["picom", "&"], shell=True)


@hook.subscribe.client_new
def resize(window):
    if window.match(Match(wm_class="mpv")):
        window.cmd_set_size_floating(1600, 900)
    if window.match(Match(wm_class="file-picker")):
        window.cmd_set_size_floating(1280, 720)
