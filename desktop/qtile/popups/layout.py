from os.path import expanduser
from libqtile.lazy import lazy
from qtile_extras.popup.toolkit import (
    PopupAbsoluteLayout,
    PopupText,
)

from theme import Colours, Fonts


def button(
        text, name, colour, mouse_callback,
        pos_x, pos_y,
):
    return [
        PopupText(
            pos_x=pos_x - 1,
            pos_y=pos_y - 1,
            width=162,
            height=102,
            h_align="center",
            background=Colours.bg5,
            can_focus=False,
            highlight_radius=14,
        ),
        PopupText(
            pos_x=pos_x,
            pos_y=pos_y,
            width=160,
            height=100,
            h_align="center",
            background=Colours.bg1,
            highlight_method="border",
            highlight=colour,
            highlight_radius=12,
            highlight_border=5,
            mouse_callbacks={
                "Button1": mouse_callback,
            },
        ),
        PopupText(
            text=text,
            pos_x=pos_x + 10,
            pos_y=pos_y + 10,
            width=140,
            height=70,
            h_align="center",
            foreground=Colours.fg,
            background=Colours.bg1,
            fontsize=32,
            font=Fonts.symbol,
            can_focus=False,
        ),
        PopupText(
            text=name,
            pos_x=pos_x + 10,
            pos_y=pos_y + 70,
            width=140,
            height=20,
            h_align="center",
            foreground=Colours.fg,
            background=Colours.bg1,
            fontsize=14,
            font=Fonts.sans,
            can_focus=False,
        ),
    ]


def powermenu_controls():
    return [
        PopupText(
            text="Power",
            pos_x=860,
            pos_y=420,
            width=200,
            height=40,
            h_align="center",
            foreground=Colours.fg,
            fontsize=24,
            font=Fonts.sans + " Bold",
            can_focus=False,
        ),
        PopupText(
            name="uptime",
            pos_x=600,
            pos_y=600,
            width=720,
            height=40,
            h_align="center",
            foreground=Colours.fg,
            fontsize=16,
            font=Fonts.sans,
            can_focus=False,
        ),
        *button(
            text="",
            name="Lock",
            colour=Colours.aqua,
            mouse_callback=lazy.spawn(expanduser("~/.local/bin/lock")),
            pos_x=610,
            pos_y=490,
        ),
        *button(
            text="",
            name="Exit Qtile",
            colour=Colours.blue,
            mouse_callback=lazy.shutdown(),
            pos_x=790,
            pos_y=490,
        ),
        *button(
            text="",
            name="Reboot",
            colour=Colours.orange,
            mouse_callback=lazy.spawn("reboot"),
            pos_x=970,
            pos_y=490,
        ),
        *button(
            text="",
            name="Shutdown",
            colour=Colours.red,
            mouse_callback=lazy.spawn("shutdown now"),
            pos_x=1150,
            pos_y=490,
        ),
    ]


def powermenu_popup():
    return PopupAbsoluteLayout(
        width=1920,
        height=1080,
        background=Colours.translucent(alpha="66"),
        border_width=0,
        controls=[*powermenu_controls()],
        hide_on_timeout=0,
        close_on_click=True,
    )
