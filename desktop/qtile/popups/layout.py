from os.path import expanduser
from libqtile.lazy import lazy
from qtile_extras.popup.toolkit import (
    PopupAbsoluteLayout,
    PopupText,
    PopupImage,
)

from theme import Colours, Fonts


def button(
        path, name, colour, mouse_callback,
        pos_x, pos_y,
):
    return [
        PopupText(
            pos_x=pos_x - 1,
            pos_y=pos_y - 1,
            width=162,
            height=152,
            h_align="center",
            background=Colours.bg5,
            can_focus=False,
            highlight_radius=14,
        ),
        PopupText(
            pos_x=pos_x,
            pos_y=pos_y,
            width=160,
            height=150,
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
        PopupImage(
            filename=expanduser(path),
            pos_x=pos_x + 15,
            pos_y=pos_y + 10,
            width=130,
            height=120,
            h_align="center",
            background=Colours.bg1,
            can_focus=False,
        ),
        PopupText(
            text=name,
            pos_x=pos_x + 10,
            pos_y=pos_y + 120,
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
            text="Layout",
            pos_x=860,
            pos_y=400,
            width=200,
            height=40,
            h_align="center",
            foreground=Colours.fg,
            fontsize=24,
            font=Fonts.sans + " Bold",
            can_focus=False,
        ),
        *button(
            path="~/.config/qtile/assets/layout/layout-scrolling.svg",
            name="Scrolling",
            colour=Colours.yellow,
            mouse_callback=lazy.group.setlayout("scrolling"),
            pos_x=610,
            pos_y=470,
        ),
        *button(
            path="~/.config/qtile/assets/layout/layout-bsp.svg",
            name="BSP",
            colour=Colours.blue,
            mouse_callback=lazy.group.setlayout("bsp"),
            pos_x=790,
            pos_y=470,
        ),
        *button(
            path="~/.config/qtile/assets/layout/layout-stack.svg",
            name="Stacking",
            colour=Colours.red,
            mouse_callback=lazy.group.setlayout("stack"),
            pos_x=970,
            pos_y=470,
        ),
        *button(
            path="~/.config/qtile/assets/layout/layout-monadtall.svg",
            name="MonadTall",
            colour=Colours.green,
            mouse_callback=lazy.group.setlayout("monadtall"),
            pos_x=1150,
            pos_y=470,
        ),
    ]


def layout_popup():
    return PopupAbsoluteLayout(
        width=1920,
        height=1080,
        background=Colours.translucent(alpha="aa"),
        border_width=0,
        controls=[*powermenu_controls()],
        hide_on_timeout=0,
        close_on_click=True,
    )
