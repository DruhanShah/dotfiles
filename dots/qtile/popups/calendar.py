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
            width=30,
            height=30,
            h_align="center",
            mouse_callbacks={"Button1": lambda x: None},
            highlight=Colours.bg_dim,
        ),
        PopupText(
            text="",
            font=Fonts.symbol,
            fontsize=20,
            foreground=Colours.fg,
            background=Colours.bg1,
            pos_x=30,
            pos_y=20,
            width=30,
            height=30,
            h_align="center",
            mouse_callbacks={"Button1": lambda x: None},
            highlight=Colours.bg_dim,
        ),
    ]


def blocks():
    return []


def calendar_popup():
    return PopupAbsoluteLayout(
        width=420,
        height=420,
        background=Colours.bg1,
        border=Colours.bg1,
        controls=[*blocks(), *calendar_controls()],
        hide_on_timeout=0,
        close_on_click=True,
    )
