from qtile_extras.popup.toolkit import PopupAbsoluteLayout, PopupSlider
from theme import Colours, Fonts


def brightness_slider():
    return PopupAbsoluteLayout(
        width=48,
        height=300,
        border_width=0,
        background=Colours.bg_dim,
        close_on_click=False,
        hide_on_timeout=2,
        controls=[
            PopupSlider(
                name="brightness",
                horizontal=False,
                bar_size=48,
                marker_size=0,
                colour_below=Colours.aqua,
                colour_above=Colours.bg_dim,
                end_margin=0,
                pos_x=0,
                pos_y=0,
                height=300,
                width=48,
            ),
        ],
    )


def volume_slider():
    return PopupAbsoluteLayout(
        width=48,
        height=300,
        border_width=0,
        background=Colours.bg_dim,
        close_on_click=False,
        hide_on_timeout=2,
        controls=[
            PopupSlider(
                name="volume",
                horizontal=False,
                bar_size=48,
                marker_size=0,
                colour_below=Colours.blue,
                colour_above=Colours.bg_dim,
                end_margin=0,
                pos_x=0,
                pos_y=0,
                height=300,
                width=48,
            ),
        ],
    )
