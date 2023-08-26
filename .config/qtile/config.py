import subprocess
from libqtile import bar, layout, widget, hook
from libqtile.config import Drag, Group, Key, KeyChord, Match, Screen, ScratchPad, DropDown
from libqtile.lazy import lazy
from qtile_extras import widget
from qtile_extras.widget.decorations import RectDecoration

#############################################
# GLOBALS
#############################################

# Colorscheme
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

mod = "mod4"
control = "control"
shift = "shift"
alt = "mod1"

#############################################
# KEYBINDINGS
#############################################

keys = [
    # Important stuff, volume and brightness and all
    Key([], "XF86MonBrightnessUp", lazy.spawn("brightnessctl set +5%")),
    Key([], "XF86MonBrightnessDown", lazy.spawn("brightnessctl set 5%-")),
    Key([], "XF86AudioRaiseVolume", lazy.spawn("pactl set-sink-volume @DEFAULT_SINK@ +5%")),
    Key([], "XF86AudioLowerVolume", lazy.spawn("pactl set-sink-volume @DEFAULT_SINK@ -5%")),
    Key([], "XF86AudioMute", lazy.spawn("pactl set-sink-mute @DEFAULT_SINK@ toggle")),
    Key([], "print", lazy.spawn("flameshot gui")),

    # Switch between windows
    Key([mod], "h", lazy.layout.left()),
    Key([mod], "l", lazy.layout.right()),
    Key([mod], "j", lazy.layout.down()),
    Key([mod], "k", lazy.layout.up()),
    Key([mod], "space", lazy.group.next_window()),
    Key([mod], "period", lazy.next_screen()),
    Key([mod], "Tab", lazy.next_layout()),
    # Move windows between left/right columns or move up/down in current stack.
    # Moving out of range in Columns layout will create new column.
    Key([mod, shift], "h", lazy.layout.shuffle_left()),
    Key([mod, shift], "l", lazy.layout.shuffle_right()),
    Key([mod, shift], "j", lazy.layout.shuffle_down()),
    Key([mod, shift], "k", lazy.layout.shuffle_up()),
    # Grow windows. If current window is on the edge of screen and direction
    # will be to screen edge - window would shrink.
    Key([mod, control], "h", lazy.layout.grow_left()),
    Key([mod, control], "l", lazy.layout.grow_right()),
    Key([mod, control], "j", lazy.layout.grow_down()),
    Key([mod, control], "k", lazy.layout.grow_up()),

    Key([mod, shift], "space", lazy.window.toggle_floating()),
    Key([mod], "f", lazy.window.toggle_fullscreen()),

    # Launch stuff
    Key([mod], "Return", lazy.spawn("kitty")),
    Key([mod], "b", lazy.spawn("qutebrowser")),
    Key([control, alt], "b", lazy.spawn("brave")),
    Key([control, alt], "d", lazy.spawn("discord")),
    Key([mod], "r", lazy.spawn("rofi -show run")),
    Key([mod], "c", lazy.spawn("rofi -show calc")),
    Key([control, alt], "c", lazy.spawn("roficlip < /dev/null")),

    Key([control, shift], "w", lazy.window.kill()),
    Key([mod, shift], "r", lazy.reload_config()),
    Key([mod], "Escape", lazy.spawn("betterlockscreen -l")),
    Key([mod, shift], "q", lazy.shutdown()),
]

#############################################
# GROUPS AND SCRATCHPADS
#############################################

groups = [Group(str(i)) for i in range(1, 11)]

scratch_names = ["Scribble", "Music", "Whatsapp"]
scratch_commands = [
    "kitty -- fish -c 'note'",
    "spotify",
    "qutebrowser --target window https://web.whatsapp.com"
]
scratch_keys = ["n", "m", "w"]

for group in groups:
    name = group.name
    keys.append(KeyChord([mod], name[-1], [
        Key([], "1", lazy.group[name].toscreen(0, toggle=True)),
        Key([], "2", lazy.group[name].toscreen(1, toggle=True)),
    ]))
    keys.append(Key([mod, shift], name[-1], lazy.window.togroup(name)))

for name, command, key in zip(scratch_names, scratch_commands, scratch_keys):
    groups.append(ScratchPad(name, [DropDown("temporary", command,
                                             x=0.2,
                                             y=0.1,
                                             width=0.6,
                                             height=0.8,
                                             opacity=1.0,
                                             on_focus_lost_hide=False
                                             )]))
    keys.append(Key([mod], key, lazy.group[name].dropdown_toggle("temporary")))

#############################################
# LAYOUTS
#############################################

layouts = [
    layout.Columns(
        border_focus=BASE,
        border_focus_stack=BASE,
        border_normal=BASE,
        border_normal_stack=BASE,
        border_on_single=True,
        border_width=0,
        margin=8,
    ),
    layout.Floating(
        border_focus=BASE,
        border_normal=BASE,
        border_width=0,
    ),
    layout.MonadWide(
        border_focus=BASE,
        border_normal=BASE,
        border_width=0,
        margin=8,
        ratio=0.6,
        single_margin=8,
    ),
]

#############################################
# SCREENS AND BARS
#############################################


def open_cal(qtile):
    qtile.cmd_spawn("galendae")


widget_defaults = dict(
    font="JetBrains Mono",
    fontsize=15,
    padding=0,
)
extension_defaults = widget_defaults.copy()

decoration_group = dict(
    decorations=[
        RectDecoration(
            colour=PINK,
            # filled=True,
            padding_y=4,
            group=True,
        ),
    ],
    foreground=PINK,
)

screens = [
    # First screen (Laptop monitor)
    Screen(
        top=bar.Bar(
            [
                widget.TextBox(),
                widget.GroupBox(
                    highlight_method="border",
                    disable_drag="True",
                    this_current_screen_border=OVERLAY1,
                    other_screen_border=SURFACE1,
                    this_screen_border=OVERLAY1,
                    other_current_screen_border=SURFACE1,
                    decorations=[
                        RectDecoration(
                            colour=MAUVE,
                            # filled=True,
                            padding_y=4,
                        )
                    ],
                    padding=0,
                ),
                widget.TextBox(),
                widget.Memory(
                    format="RAM: {MemUsed:.0f}M",
                    foreground=PEACH,
                    decorations=[
                        RectDecoration(
                            colour=PEACH,
                            # filled=True,
                            padding_y=4,
                        )
                    ],
                    padding=6,
                ),
                widget.TextBox(),
                widget.CPU(
                    format="CPU: {load_percent}%",
                    foreground=YELLOW,
                    decorations=[
                        RectDecoration(
                            colour=YELLOW,
                            # filled=True,
                            padding_y=4,
                        )
                    ],
                    padding=6,
                ),
                widget.TextBox(),
                widget.Net(
                    format="{up} ⇅ {down}",
                    foreground=ROSEWATER,
                    decorations=[
                        RectDecoration(
                            colour=ROSEWATER,
                            # filled=True,
                            padding_y=4,
                        )
                    ],
                    padding=6,
                ),
                widget.Spacer(),
                widget.Clock(
                    format="%A %d %B %Y - %H:%M:%S",
                    foreground=BLUE,
                    decorations=[
                        RectDecoration(
                            colour=BLUE,
                            # filled=True,
                            padding_y=4,
                        )
                    ],
                    mouse_callbacks={"Button1": lazy.spawn("galendae")},
                    padding=6,
                ),
                widget.TextBox(),
                widget.Battery(
                    format="{char} {percent:2.0%}",
                    charge_char="󰂋",
                    discharge_char="󰁿",
                    update_interval=20,
                    foreground=GREEN,
                    background=GREEN,
                    low_background=RED,
                    low_foreground=RED,
                    low_percentage=0.2,
                    decorations=[
                        RectDecoration(
                            use_widget_background=True,
                            # filled=True,
                            padding_y=4,
                        )
                    ],
                    padding=6,
                ),
                widget.TextBox(),
                widget.Backlight(
                    backlight_name="intel_backlight",
                    fmt="󰃟 {}",
                    **decoration_group,
                    padding=6,
                ),
                widget.Sep(
                    foregound=BASE,
                    **decoration_group,
                ),
                widget.GenPollText(
                    fmt=" {}",
                    update_interval=0.1,
                    func=lambda: subprocess.check_output("/home/druhan/.config/qtile/scripts/volume.sh").decode().strip(),
                    **decoration_group,
                    padding=6,
                ),
                widget.TextBox(),
                widget.CurrentLayoutIcon(
                    foreground=BASE,
                    scale=0.6,
                ),
                widget.TextBox(),
                widget.Systray(
                    padding=2,
                ),
                widget.TextBox(),
            ],
            32,
            margin=[8, 8, 0, 8],
            background=BASE,
        ),
    ),
    # Second screen (External monitor)
    Screen(
        top=bar.Bar(
            [
                widget.TextBox(),
                widget.GroupBox(
                    highlight_method="border",
                    disable_drag="True",
                    this_current_screen_border=OVERLAY1,
                    other_screen_border=SURFACE1,
                    this_screen_border=OVERLAY1,
                    other_current_screen_border=SURFACE1,
                    decorations=[
                        RectDecoration(
                            colour=MAUVE,
                            # filled=True,
                            padding_y=4,
                        )
                    ],
                    padding=0,
                ),
                widget.TextBox(),
                widget.Memory(
                    format="RAM: {MemUsed:.0f}M",
                    foreground=PEACH,
                    decorations=[
                        RectDecoration(
                            colour=PEACH,
                            # filled=True,
                            padding_y=4,
                        )
                    ],
                    padding=6,
                ),
                widget.TextBox(),
                widget.CPU(
                    format="CPU: {load_percent}%",
                    foreground=YELLOW,
                    decorations=[
                        RectDecoration(
                            colour=YELLOW,
                            # filled=True,
                            padding_y=4,
                        )
                    ],
                    padding=6,
                ),
                widget.TextBox(),
                widget.Net(
                    format="{up} ⇅ {down}",
                    foreground=ROSEWATER,
                    decorations=[
                        RectDecoration(
                            colour=ROSEWATER,
                            # filled=True,
                            padding_y=4,
                        )
                    ],
                    padding=6,
                ),
                widget.Spacer(),
                widget.Clock(
                    format="%A %d %B %Y - %H:%M:%S",
                    foreground=BLUE,
                    decorations=[
                        RectDecoration(
                            colour=BLUE,
                            # filled=True,
                            padding_y=4,
                        )
                    ],
                    mouse_callbacks={"Button1": lazy.spawn("galendae")},
                    padding=6,
                ),
                widget.TextBox(),
                widget.Battery(
                    format="{char} {percent:2.0%}",
                    charge_char="󰂋",
                    discharge_char="󰁿",
                    update_interval=20,
                    foreground=GREEN,
                    background=GREEN,
                    low_background=RED,
                    low_foreground=RED,
                    low_percentage=0.2,
                    decorations=[
                        RectDecoration(
                            use_widget_background=True,
                            # filled=True,
                            padding_y=4,
                        )
                    ],
                    padding=6,
                ),
                widget.TextBox(),
                widget.Backlight(
                    backlight_name="intel_backlight",
                    fmt="󰃟 {}",
                    **decoration_group,
                    padding=6,
                ),
                widget.Sep(
                    foregound=BASE,
                    **decoration_group,
                ),
                widget.GenPollText(
                    fmt=" {}",
                    update_interval=0.1,
                    func=lambda: subprocess.check_output("/home/druhan/.config/qtile/scripts/volume.sh").decode().strip(),
                    **decoration_group,
                    padding=6,
                ),
                widget.TextBox(),
                widget.CurrentLayoutIcon(
                    foreground=BASE,
                    scale=0.6,
                ),
                widget.TextBox(),
            ],
            32,
            margin=[8, 8, 0, 8],
            background=BASE,
        ),
    ),

]

#############################################
# OTHER STUFF
#############################################

mouse = [
    Drag([mod], "Button1", lazy.window.set_position_floating(), start=lazy.window.get_position()),
    Drag([mod, shift], "Button1", lazy.window.set_size_floating(), start=lazy.window.get_size()),
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
    ],
    border_focus=BASE,
    border_normal=BASE,
    border_width=0,
)
auto_fullscreen = True
focus_on_window_activation = "smart"
reconfigure_screens = True

auto_minimize = False

# When using the Wayland backend, this can be used to configure input devices.
wl_input_rules = None
wmname = "QTile"


@hook.subscribe.client_new
def fixed_size(window):
    if window.match(Match(wm_class="mpv")):
        window.cmd_set_size_floating(1600, 900)
        window.center()
    if window.match(Match(title="file-picker")):
        window.cmd_set_size_floating(1280, 720)
        window.center()
