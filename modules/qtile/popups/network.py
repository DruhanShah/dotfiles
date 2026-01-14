from qtile_extras.popup.toolkit import (
    PopupAbsoluteLayout,
    PopupText, PopupSlider
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

def network_controls():
    return [
    PopupText(
        text="󰤨",
        font=Fonts.symbol,
        fontsize=45,
        foreground=Colours.green,
        background=Colours.bg_dim,
        pos_x=100,
        pos_y=80,
        width=60,
        height=40,
        h_align="center",
    ),
    PopupText(
        name="wifi_ssid",
        font=Fonts.sans + " Bold",
        fontsize=14,
        foreground=Colours.fg,
        background=Colours.bg_dim,
        pos_x=40,
        pos_y=130,
        width=180,
        height=15,
        h_align="center",
    ),
    PopupText(
        name="wifi_status",
        font=Fonts.mono,
        fontsize=12,
        foreground=Colours.grey0,
        background=Colours.bg_dim,
        pos_x=40,
        pos_y=180,
        width=180,
        height=12,
        h_align="center",
    ),
    PopupSlider(
        name="wifi_signal_strength",
        bar_size=8,
        marker_size=0,
        colour_below=Colours.green,
        colour_above=Colours.bg3,
        bar_border_colour=Colours.fg,
        bar_border_margin=0,
        end_margin=0,
        pos_x=60,
        pos_y=160,
        width=140,
        height=8,
    ),
    PopupText(
        text="",
        font=Fonts.symbol,
        fontsize=45,
        foreground=Colours.blue,
        background=Colours.bg_dim,
        pos_x=100,
        pos_y=310,
        width=60,
        height=40,
        h_align="center",
    ),
    PopupText(
        name="internet_status",
        font=Fonts.sans + " Bold",
        fontsize=14,
        foreground=Colours.fg,
        background=Colours.bg_dim,
        pos_x=40,
        pos_y=360,
        width=180,
        height=15,
        h_align="center",
    ),
    PopupText(
        name="dns_servers",
        font=Fonts.mono,
        fontsize=11,
        foreground=Colours.grey1,
        background=Colours.bg_dim,
        pos_x=40,
        pos_y=385,
        width=180,
        height=12,
        h_align="center",
    ),
    PopupText(
        text="󰂯",
        font=Fonts.symbol,
        fontsize=45,
        foreground=Colours.purple,
        background=Colours.bg_dim,
        pos_x=100,
        pos_y=490,
        width=60,
        height=20,
        h_align="center",
    ),
    PopupText(
        name="bt_status",
        font=Fonts.sans + " Bold",
        fontsize=14,
        foreground=Colours.fg,
        background=Colours.bg_dim,
        pos_x=40,
        pos_y=530,
        width=180,
        height=15,
        h_align="center",
    ),
    PopupText(
        name="bt_connected_count",
        font=Fonts.mono,
        fontsize=11,
        foreground=Colours.grey1,
        background=Colours.bg_dim,
        pos_x=40,
        pos_y=555,
        width=180,
        height=12,
        h_align="center",
    ),
]


def blocks():
    return [
        block(20, 20, 220, 220),    # WiFi
        block(20, 260, 220, 160),   # Internet Speed
        block(20, 440, 220, 160),   # Bluetooth
    ]


def network_popup():
    return PopupAbsoluteLayout(
        width=260,
        height=620,
        background=Colours.bg1,
        border=Colours.bg1,
        border_width=0,
        controls=[*blocks(), *network_controls()],
        hide_on_timeout=0,
        close_on_click=True,
    )
