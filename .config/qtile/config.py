import os
import re
import subprocess
from libqtile import bar, layout, widget, hook, extension
from libqtile.config import Drag, Group, Key, KeyChord, Match, Screen
from libqtile.config import ScratchPad, DropDown
from libqtile.lazy import lazy
import widgets as custom
from catppuccin import PALETTE

home = os.path.expanduser("~")

mod = "mod4"
ctrl = "control"
shift = "shift"
alt = "mod1"
vb_command = f"{home}/.config/qtile/scripts/dunst-vb.sh"
wallpaper = f"{home}/Wallpapers/pixel-plateau.png"

colorscheme = {}
for color in PALETTE.mocha.colors:
    colorscheme[color.name.upper()] = color.hex


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

    Key([mod], "Semicolon", lazy.spawn("rofi -show run")),
    KeyChord([mod], "r", [
        Key([], "w", lazy.spawn("rifi")),
        Key([], "b", lazy.spawn("rofi-bluetooth")),
        Key([], "c", lazy.spawn("roficlip")),
        Key([], "q", lazy.spawn("rofi -show calc")),
        Key([], "n", lazy.spawn("rofi -modi nerdy -show nerdy")),
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

groups = [Group(str(i), label="") for i in range(1, 11)]

scratch_names = ["Music", "Diagnostics"]
scratch_commands = [
    "spotify",
    "kitty -e 'btop'"
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
        border_focus=colorscheme["SKY"],
        border_focus_stack=colorscheme["SKY"],
        border_normal=colorscheme["SKY"],
        border_normal_stack=colorscheme["SKY"],
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
    font="Operator Mono SSm Lig",
    fontsize=14,
    padding=2,
    foreground=colorscheme["TEXT"],
    background=colorscheme["BASE"],
)
extension_defaults = widget_defaults.copy()

widget_list = [
    widget.TextBox(),
    widget.GroupBox(
        highlight_method="text",
        active=colorscheme["SUBTEXT 0"],
        inactive=colorscheme["SURFACE 0"],
        urgent_text=colorscheme["RED"],
        this_current_screen_border=colorscheme["BLUE"],
        this_screen_border=colorscheme["BLUE"],
        other_current_screen_border=colorscheme["YELLOW"],
        other_screen_border=colorscheme["YELLOW"],
    ),
    widget.Spacer(),
    custom.Spotify(
        format="{icon} {track} - {artist}",
        pause_icon="󰏤",
        play_icon="󰐊",
        foreground=colorscheme["GREEN"],
    ),
    widget.Spacer(),
    widget.TextBox(
        fmt=" ",
        padding=3,
        fontsize=18,
        foreground=colorscheme["LAVENDER"],
    ),
    widget.Clock(
        format="%H %M %S",
        mouse_callbacks={"Button1": lazy.spawn("galendae")},
        foreground=colorscheme["LAVENDER"],
    ),
    widget.TextBox(
        padding=10,
    ),
    widget.Battery(
        format="{char}",
        charge_char="󰂋 ",
        discharge_char="󰁿 ",
        full_char="󱟢 ",
        unknown_char="󰂑 ",
        show_short_text=False,
        update_interval=20,
        foreground=colorscheme["GREEN"],
        low_foreground=colorscheme["RED"],
        low_percentage=0.2,
        fontsize=18,
    ),
    widget.TextBox(),
]

screens = [
    Screen(
        wallpaper_mode="fill",
        wallpaper=wallpaper,
        top=bar.Bar(
            widgets=widget_list,
            size=32,
            margin=[8, 8, 0, 8],
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
        Match(wm_class="confirmreset"),
        Match(wm_class="makebranch"),
        Match(wm_class="maketag"),
        Match(wm_class="ssh-askpass"),
        Match(title="branchdialog"),
        Match(title="pinentry"),
        Match(title="file-picker"),
        Match(wm_class="matplotlib"),
    ],
    border_focus=colorscheme["SKY"],
    border_normal=colorscheme["SKY"],
    border_width=0,
)
auto_fullscreen = True
focus_on_window_activation = "smart"
reconfigure_screens = True
auto_minimize = False
wmname = "QTile"


@hook.subscribe.startup_once
def autostart():
    subprocess.Popen([f"{home}/.config/qtile/scripts/autostart.sh"])


@hook.subscribe.client_new
def resize(window):
    if window.match(Match(wm_class="mpv")):
        window.cmd_set_size_floating(1600, 900)
    if window.match(Match(title="file-picker")):
        window.cmd_set_size_floating(1280, 720)
