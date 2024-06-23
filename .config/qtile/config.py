import os
import re
import subprocess
from libqtile import bar, layout, widget, hook
from libqtile.config import Match
from libqtile.config import Click, Drag, Key, KeyChord
from libqtile.config import Group, ScratchPad, DropDown, Screen
from libqtile.lazy import lazy
# import widgets as custom_widgets
import layouts as custom_layouts
from utils import COLORSCHEME

home = os.path.expanduser("~")

mod = "mod4"
ctrl = "control"
shift = "shift"
alt = "mod1"
vb_command = f"{home}/.config/qtile/scripts/dunst-vb.sh"
wallpaper = f"{home}/Wallpapers/neuschwanstein.jpg"
rofi_script = f"{home}/.config/rofi/scripts"


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


keys = [
    Key([], "XF86MonBrightnessUp", lazy.spawn(f"{vb_command} bright_up")),
    Key([], "XF86MonBrightnessDown", lazy.spawn(f"{vb_command} bright_down")),
    Key([], "XF86AudioRaiseVolume", lazy.spawn(f"{vb_command} vol_up")),
    Key([], "XF86AudioLowerVolume", lazy.spawn(f"{vb_command} vol_down")),
    Key([], "XF86AudioMute", lazy.spawn(f"{vb_command} volume_mute")),
    Key([], "XF86AudioPlay", lazy.spawn(f"{vb_command} play_pause")),
    Key([], "print", lazy.spawn("flameshot gui")),

    Key([mod], "space", lazy.layout.next()),
    Key([mod], "h", lazy.layout.left()),
    Key([mod], "j", lazy.layout.down()),
    Key([mod], "k", lazy.layout.up()),
    Key([mod], "l", lazy.layout.right()),
    Key([mod, shift], "h", lazy.layout.shuffle_left()),
    Key([mod, shift], "j", lazy.layout.shuffle_down()),
    Key([mod, shift], "k", lazy.layout.shuffle_up()),
    Key([mod, shift], "l", lazy.layout.shuffle_right()),
    Key([mod, ctrl], "h", lazy.layout.shrink_left()),
    Key([mod, ctrl], "j", lazy.layout.grow_down()),
    Key([mod, ctrl], "k", lazy.layout.shrink_up()),
    Key([mod, ctrl], "l", lazy.layout.grow_right()),
    Key([mod, ctrl, shift], "h", lazy.layout.scroll_left()),
    Key([mod, ctrl, shift], "l", lazy.layout.scroll_right()),

    Key([mod, shift], "space", lazy.window.toggle_floating()),
    Key([mod], "f", lazy.window.toggle_fullscreen()),

    Key([mod], "Return", lazy.spawn("kitty")),
    Key([mod], "b", lazy.spawn("qutebrowser")),

    Key([mod], "Semicolon", lazy.spawn(f"{rofi_script}/launcher.sh")),
    KeyChord([mod], "r", [
        Key([], "w", lazy.spawn(f"{rofi_script}/wifi.sh")),
        Key([], "b", lazy.spawn(f"{rofi_script}/bluetooth.sh")),
        Key([], "c", lazy.spawn(f"{rofi_script}/clipboard.sh")),
        Key([], "q", lazy.spawn(f"{rofi_script}/calculator.sh")),
        Key([], "n", lazy.spawn(f"{rofi_script}/nerd-fonts.sh")),
        Key([], "z", lazy.spawn(f"{rofi_script}/zotero.sh")),
        Key([], "6", lazy.spawn(f"{rofi_script}/battery.sh")),
        Key([], "5", lazy.spawn(f"{rofi_script}/spotify.sh")),
        Key([], "4", lazy.spawn(f"{rofi_script}/brightness.sh")),
        Key([], "3", lazy.spawn(f"{rofi_script}/volume.sh")),
        Key([], "2", lazy.spawn(f"{rofi_script}/calendar.sh")),
        Key([], "1", lazy.spawn(f"{rofi_script}/powermenu.sh")),
    ]),
    Key([mod], "q", lazy.spawn(f"{rofi_script}/powermenu.sh")),

    Key([mod], "F9", toggle_trackpad),
    Key([ctrl, shift], "w", lazy.window.kill()),
    Key([mod, shift], "r", lazy.reload_config()),
]

opts = {
    "x": 0.2, "width": 0.6,
    "y": 0.1, "height": 0.8,
    "opacity": 1,
}

groups = [Group(str(i), label="󱓻") for i in range(1, 11)]

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


def trim(text):
    if text == "org.pwmt.zathura":
        return "zathura"
    if text == "Navigator":
        return "zotero"
    if text == "gl":
        return "mpv"
    return text


widget_defaults = dict(
    font="JetBrains Mono",
    fontsize=16,
    padding=0,
    foreground=COLORSCHEME["TEXT"],
    background=COLORSCHEME["BASE"],
)
extension_defaults = widget_defaults.copy()

widget_list = [
    widget.TextBox(),
    widget.GroupBox(
        highlight_method="text",
        active=COLORSCHEME["TEXT"],
        inactive=COLORSCHEME["SURFACE 1"],
        urgent_text=COLORSCHEME["RED"],
        this_current_screen_border=COLORSCHEME["BLUE"],
        this_screen_border=COLORSCHEME["BLUE"],
        other_current_screen_border=COLORSCHEME["YELLOW"],
        other_screen_border=COLORSCHEME["YELLOW"],
        padding=3,
        fontsize=20,
    ),
    widget.Spacer(),
    widget.Battery(
        format="{char}",
        charge_char="󰢞",
        discharge_char="󰁾",
        full_char="󱟢",
        unknown_char="󰂑",
        show_short_text=False,
        foreground=COLORSCHEME["TEAL"],
        low_foreground=COLORSCHEME["RED"],
        low_percentage=0.2,
        mouse_callbacks={
            "Button1": lazy.spawn(f"{rofi_script}/battery.sh")
        },
        fontsize=20,
        padding=5,
    ),
    widget.TextBox(
        text="",
        foreground=COLORSCHEME["GREEN"],
        mouse_callbacks={
            "Button1": lazy.spawn(f"{rofi_script}/spotify.sh")
        },
        fontsize=20,
        padding=10,
    ),
    widget.TextBox(
        text="󰃟",
        foreground=COLORSCHEME["MAUVE"],
        mouse_callbacks={
            "Button1": lazy.spawn(f"{rofi_script}/brightness.sh")
        },
        fontsize=20,
        padding=10,
    ),
    widget.PulseVolume(
        foreground=COLORSCHEME["FLAMINGO"],
        emoji=True,
        emoji_list=["󰝟", "󰖀", "󰕾", "󰕾", "󰋋"],
        mouse_callbacks={
            "Button1": lazy.spawn(f"{rofi_script}/volume.sh")
        },
        fontsize=20,
        padding=10,
    ),
    widget.Clock(
        format="%H:%M:%S",
        foreground=COLORSCHEME["LAVENDER"],
        mouse_callbacks={
            "Button1": lazy.spawn(f"{rofi_script}/calendar.sh")
        },
        fmt="<b>{}</b>",
        fontsize=15,
        padding=10,
    ),
    widget.TextBox(
        text="",
        foreground=COLORSCHEME["RED"],
        mouse_callbacks={
            "Button1": lazy.spawn(f"{rofi_script}/powermenu.sh")
        },
        fontsize=20,
        padding=15,
    ),
    widget.TextBox(),
]

screens = [
    Screen(
        wallpaper_mode="fill",
        wallpaper=wallpaper,
        top=bar.Bar(
            widgets=widget_list,
            size=36,
            margin=[12, 12, 0, 12],
        ),
    )
]

mouse = [
    Drag([mod], "Button1", lazy.window.set_position_floating(),
         start=lazy.window.get_position()),
    Drag([mod, shift], "Button1", lazy.window.set_size_floating(),
         start=lazy.window.get_size()),
    Click([mod], "Button7", lazy.layout.scroll_right(5)),
    Click([mod], "Button6", lazy.layout.scroll_left(5)),
]


layouts = [
    custom_layouts.Scrolling(
        border_width=0,
        border_focus=COLORSCHEME["SKY"],
        border_normal=COLORSCHEME["SKY"],
        default_width=60,
        grow_amount=5,
        margin=12,
        width_rules={
            Match(wm_class="kitty"): 40,
            Match(wm_class="qutebrowser"): 100,
            Match(wm_class="vesktop"): 100,
        },
    ),
]

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
    border_focus=COLORSCHEME["SKY"],
    border_normal=COLORSCHEME["SKY"],
    border_width=0,
)


auto_fullscreen = True
focus_on_window_activation = "smart"
reconfigure_screens = True
auto_minimize = False
wmname = "QTile"
dgroups_key_binder = None
dgroups_app_rules = []
follow_mouse_focus = False
bring_front_click = False
cursor_warp = False


@hook.subscribe.startup_once
def autostart():
    subprocess.Popen([f"{home}/.config/qtile/scripts/autostart.sh"])


@hook.subscribe.client_new
def resize(window):
    if window.match(Match(wm_class="mpv")):
        window.cmd_set_size_floating(1600, 900)
    if window.match(Match(title="file-picker")):
        window.cmd_set_size_floating(1280, 720)
