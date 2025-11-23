from os.path import expanduser
from libqtile.lazy import lazy
from qtile_extras.popup.toolkit import (
    PopupAbsoluteLayout,
    PopupText,
)

from theme import Colours, Fonts


def block(x, y, w, h):
    return PopupText(
        background=Colours.bg_dim,
        foreground=Colours.bg_dim,
        highlight_radius=12,
        pos_x=x,
        pos_y=y,
        width=w,
        height=h,
    )

def powermenu_controls():
    return [
        PopupText(
            text="Uptime:",
            pos_x=40,
            pos_y=40,
            width=380,
            height=40,
            h_align="center",
            foreground=Colours.fg,
            background=Colours.bg_dim,
            fontsize=24,
            font=Fonts.sans + " Bold",
            can_focus=False,
        ),
        PopupText(
            name="uptime",
            pos_x=40,
            pos_y=80,
            width=380,
            height=40,
            h_align="center",
            foreground=Colours.fg,
            background=Colours.bg_dim,
            fontsize=16,
            font=Fonts.sans,
            can_focus=False,
        ),
        PopupText(
            text="",
            pos_x=40,
            pos_y=180,
            width=180,
            height=90,
            h_align="center",
            foreground=Colours.fg,
            background=Colours.bg1,
            fontsize=32,
            font=Fonts.symbol,
            highlight=Colours.grey0,
            mouse_callbacks={
                "Button1": lazy.spawn(expanduser("~/.local/bin/lock"))
            },
        ),
        PopupText(
            text="",
            pos_x=40,
            pos_y=290,
            width=180,
            height=90,
            h_align="center",
            foreground=Colours.fg,
            background=Colours.bg1,
            fontsize=33,
            font=Fonts.symbol,
            highlight=Colours.grey0,
            mouse_callbacks={
                "Button1": lazy.shutdown()
            },
        ),
        PopupText(
            text="",
            pos_x=240,
            pos_y=180,
            width=180,
            height=90,
            h_align="center",
            foreground=Colours.fg,
            background=Colours.bg1,
            fontsize=34,
            font=Fonts.symbol,
            highlight=Colours.grey0,
            mouse_callbacks={
                "Button1": lazy.spawn("reboot")
            },
        ),
        PopupText(
            text="󰐥",
            pos_x=240,
            pos_y=290,
            width=180,
            height=90,
            h_align="center",
            foreground=Colours.fg,
            background=Colours.bg1,
            fontsize=38,
            font=Fonts.symbol,
            highlight=Colours.grey0,
            mouse_callbacks={
                "Button1": lazy.spawn("shutdown now")
            },
        ),
    ]


def blocks():
    return [
        block(20, 20, 420, 120),  # Uptime
        block(20, 160, 420, 240), # Power buttons
    ]


def powermenu_popup():
    return PopupAbsoluteLayout(
        width=460,
        height=420,
        background=Colours.bg1,
        border_width=0,
        controls=[*blocks(), *powermenu_controls()],
        hide_on_timeout=0,
        close_on_click=True,
    )
