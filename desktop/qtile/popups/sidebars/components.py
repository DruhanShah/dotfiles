import os
from libqtile.lazy import lazy
from qtile_extras.popup import toolkit as popup
from os.path import expanduser

from theme import Colours, Fonts


DEFAULT = os.path.expanduser("~/.config/qtile/assets/none.png")


####################
# Component batches
####################
powermenu_components = [
    popup.PopupText(
        text="",
        pos_x=40,
        pos_y=955,
        width=85,
        height=85,
        h_align="center",
        foreground=Colours.crust,
        background=Colours.subtext0,
        fontsize=32,
        font=Fonts.symbol,
        highlight=Colours.blue,
        mouse_callbacks={
            "Button1": lazy.spawn(expanduser("~/.local/bin/lock"))
        },
    ),
    popup.PopupText(
        text="",
        pos_x=145,
        pos_y=955,
        width=85,
        height=85,
        h_align="center",
        foreground=Colours.crust,
        background=Colours.subtext0,
        fontsize=33,
        font=Fonts.symbol,
        highlight=Colours.blue,
        mouse_callbacks={
            "Button1": lazy.shutdown()
        },
    ),
    popup.PopupText(
        text="",
        pos_x=250,
        pos_y=955,
        width=85,
        height=85,
        h_align="center",
        foreground=Colours.crust,
        background=Colours.subtext0,
        fontsize=34,
        font=Fonts.symbol,
        highlight=Colours.blue,
        mouse_callbacks={
            "Button1": lazy.spawn("reboot")
        },
    ),
    popup.PopupText(
        text="󰐥",
        pos_x=355,
        pos_y=955,
        width=85,
        height=85,
        h_align="center",
        foreground=Colours.crust,
        background=Colours.subtext0,
        fontsize=38,
        font=Fonts.symbol,
        highlight=Colours.blue,
        mouse_callbacks={
            "Button1": lazy.spawn("shutdown now")
        },
    ),
]



today_components = [
    popup.PopupText(
        name="current_day",
        font=Fonts.sans + " Bold",
        fontsize=56,
        foreground=Colours.mauve,
        background=Colours.surface0,
        pos_x=40,
        pos_y=40,
        width=400,
        height=120,
        h_align="center",
    ),
    popup.PopupText(
        name="current_date",
        font=Fonts.sans + " Medium",
        fontsize=25,
        foreground=Colours.lavender,
        background=Colours.surface0,
        pos_x=40,
        pos_y=160,
        width=400,
        height=20,
        h_align="center",
    ),
    popup.PopupText(
        name="current_month",
        font=Fonts.sans + " Bold",
        fontsize=25,
        foreground=Colours.text,
        background=Colours.surface0,
        pos_x=90,
        pos_y=260,
        width=300,
        height=30,
        h_align="center",
    ),
]

calendar_components = [
    popup.PopupText(
        text="",
        font=Fonts.symbol,
        fontsize=25,
        foreground=Colours.text,
        background=Colours.surface0,
        pos_x=370,
        pos_y=260,
        width=50,
        height=30,
        h_align="center",
        mouse_callbacks={"Button1": lambda x: None},
        highlight=Colours.surface0,
    ),
    popup.PopupText(
        text="",
        font=Fonts.symbol,
        fontsize=25,
        foreground=Colours.text,
        background=Colours.surface0,
        pos_x=40,
        pos_y=260,
        width=50,
        height=30,
        h_align="center",
        mouse_callbacks={"Button1": lambda x: None},
        highlight=Colours.surface0,
    ),
] + [
    popup.PopupText(
        name=f"day_{i}_{ii}",
        foreground=Colours.text,
        background=Colours.crust if ii == 6 else Colours.mantle,
        fontsize=18,
        font=Fonts.sans + " Medium",
        markup=True,
        width=50,
        height=50,
        pos_x=35 + ii*60,
        pos_y=350 + i*60,
        h_align="center",
    )
    for i in range(6)
    for ii in range(7)
] + [
    popup.PopupText(
        name=f"weekday_{i}",
        foreground=Colours.text,
        background=Colours.crust if i == 6 else Colours.mantle,
        fontsize=18,
        font=Fonts.sans + " Medium",
        markup=True,
        width=50,
        height=30,
        pos_x=35 + i*60,
        pos_y=310,
        h_align="center",
    )
    for i in range(7)
]

music_components = [
    popup.PopupImage(
        name="music_cover",
        filename=DEFAULT,
        background=Colours.surface0,
        pos_x=40,
        pos_y=760,
        width=260,
        height=160,
        h_align="center",
    ),
    popup.PopupText(
        name="music_title",
        font=Fonts.sans + " Bold",
        fontsize=20,
        foreground=Colours.text,
        background=Colours.surface0,
        pos_x=40,
        pos_y=940,
        width=260,
        height=20,
        h_align="center",
    ),
    popup.PopupText(
        name="music_artist",
        font=Fonts.sans + " Medium",
        fontsize=18,
        foreground=Colours.text,
        background=Colours.surface0,
        pos_x=40,
        pos_y=960,
        width=260,
        height=20,
        h_align="center",
    ),
]

volbright_components = [
    popup.PopupSlider(
        name="volume_value",
        horizontal=False,
        bar_size=20,
        end_margin=0,
        marker_size=0,
        colour_below=Colours.green,
        colour_above=Colours.surface1,
        pos_y=760,
        pos_x=370,
        height=240,
        width=20,
    ),
    popup.PopupText(
        name="volume_icon",
        font=Fonts.symbol,
        fontsize=28,
        foreground=Colours.text,
        background=Colours.surface0,
        pos_x=365,
        pos_y=1015,
        width=30,
        height=20,
        h_align="center",
    ),
    popup.PopupSlider(
        name="brightness_value",
        horizontal=False,
        bar_size=20,
        end_margin=0,
        marker_size=0,
        colour_below=Colours.pink,
        colour_above=Colours.surface1,
        pos_y=760,
        pos_x=410,
        height=240,
        width=20,
    ),
    popup.PopupText(
        name="brightness_icon",
        font=Fonts.symbol,
        fontsize=28,
        foreground=Colours.text,
        background=Colours.surface0,
        pos_x=405,
        pos_y=1015,
        width=30,
        height=20,
        h_align="center",
    ),
]


########################
# Diagnostics sidebar
########################

_diagnostics = [
    *powermenu_components,
]


########################
# Network sidebar
########################

_network = [
]


########################
# Datetime sidebar
########################

_datetime = [
    *today_components,
    *calendar_components,
    *music_components,
    *volbright_components,
]
