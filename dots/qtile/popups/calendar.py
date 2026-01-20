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

    calendar = [
        PopupText(
            name=f"day_{i}_{ii}",
            foreground=Colours.fg,
            background=Colours.bg4 if ii == 6 else Colours.bg3,
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
    ]

    return [
        *weekdays,
        *calendar,
        PopupText(
            name="current_day",
            font=Fonts.sans + " Bold",
            fontsize=56,
            foreground=Colours.green,
            background=Colours.bg_dim,
            pos_x=40,
            pos_y=40,
            width=400,
            height=120,
            h_align="center",
        ),
        PopupText(
            name="current_date",
            font=Fonts.sans + " Medium",
            fontsize=25,
            foreground=Colours.aqua,
            background=Colours.bg_dim,
            pos_x=40,
            pos_y=160,
            width=400,
            height=20,
            h_align="center",
        ),
        PopupText(
            name="current_month",
            font=Fonts.sans + " Bold",
            fontsize=25,
            foreground=Colours.fg,
            background=Colours.bg_dim,
            pos_x=90,
            pos_y=260,
            width=300,
            height=30,
            h_align="center",
        ),
        PopupText(
            text="",
            font=Fonts.symbol,
            fontsize=25,
            foreground=Colours.fg,
            background=Colours.bg_dim,
            pos_x=370,
            pos_y=260,
            width=50,
            height=30,
            h_align="center",
            mouse_callbacks={"Button1": lambda x: None},
            highlight=Colours.bg_dim,
        ),
        PopupText(
            text="",
            font=Fonts.symbol,
            fontsize=25,
            foreground=Colours.fg,
            background=Colours.bg_dim,
            pos_x=40,
            pos_y=260,
            width=50,
            height=30,
            h_align="center",
            mouse_callbacks={"Button1": lambda x: None},
            highlight=Colours.bg_dim,
        ),
    ]


def blocks():
    return [
        block(20, 20, 440, 200),    # Today
        block(20, 240, 440, 480),   # Calendar
    ]


def calendar_popup():
    return PopupAbsoluteLayout(
        width=480,
        height=740,
        background=Colours.bg1,
        border=Colours.bg1,
        border_width=0,
        controls=[*blocks(), *calendar_controls()],
        hide_on_timeout=0,
        close_on_click=True,
    )
