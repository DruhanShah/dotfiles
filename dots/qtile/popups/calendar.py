from libqtile.lazy import lazy
from qtile_extras.popup.toolkit import (
    PopupAbsoluteLayout,
    PopupText,
)

from theme import Colours, Fonts


def calendar_controls():
    weekdays = [
        PopupText(
            name=f"weekday_{i}",
            foreground=Colours.fg,
            background=Colours.bg4 if i == 6 else Colours.bg3,
            fontsize=15,
            font=Fonts.sans + " Medium",
            markup=True,
            width=40,
            height=30,
            pos_x=35 + i*50,
            pos_y=70,
            h_align="center",
        )
        for i in range(7)
    ]

    calendar = [
        PopupText(
            name=f"day_{i}_{ii}",
            foreground=Colours.fg,
            background=Colours.bg4 if ii == 6 else Colours.bg3,
            fontsize=15,
            font=Fonts.sans + " Medium",
            markup=True,
            width=40,
            height=40,
            pos_x=35 + ii*50,
            pos_y=110 + i*50,
            h_align="center",
        )
        for i in range(6)
        for ii in range(7)
    ]

    return [
        *weekdays,
        *calendar,
        PopupText(
            name="current_month",
            font=Fonts.sans + " Bold",
            fontsize=20,
            foreground=Colours.fg,
            background=Colours.bg1,
            pos_x=80,
            pos_y=20,
            width=250,
            height=30,
            h_align="center",
        ),
        PopupText(
            text="",
            font=Fonts.symbol,
            fontsize=20,
            foreground=Colours.fg,
            background=Colours.bg1,
            pos_x=350,
            pos_y=20,
            width=25,
            height=30,
            h_align="center",
            mouse_callbacks={
                "Button1": lazy.widget["calendarwidget"].next_month(),
            },
            highlight=Colours.bg3,
        ),
        PopupText(
            text="",
            font=Fonts.symbol,
            fontsize=20,
            foreground=Colours.fg,
            background=Colours.bg1,
            pos_x=35,
            pos_y=20,
            width=25,
            height=30,
            h_align="center",
            mouse_callbacks={
                "Button1": lazy.widget["calendarwidget"].prev_month(),
            },
            highlight=Colours.bg3,
        ),
    ]


def calendar_popup():

    return PopupAbsoluteLayout(
        width=410,
        height=430,
        background=Colours.bg1,
        border=Colours.bg1,
        controls=calendar_controls(),
        hide_on_timeout=0,
        close_on_click=False,
    )
