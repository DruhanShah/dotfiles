from qtile_extras.popup.toolkit import (
    PopupAbsoluteLayout,
    PopupText, PopupSlider
)
from theme import Colours, Fonts
from utils import Function


def brightness_slider():

    controls = [
        PopupText(
            name="icon",
            font=Fonts.symbol,
            fontsize=22,
            foreground=Colours.fg,
            background=Colours.bg_dim,
            pos_x=0,
            pos_y=300,
            width=48,
            height=50,
            h_align="center",
        ),
        PopupSlider(
            name="value",
            horizontal=False,
            bar_size=48,
            marker_size=0,
            colour_below=Colours.aqua,
            colour_above=Colours.bg_dim,
            bar_border_colour=Colours.fg,
            bar_border_margin=0,
            end_margin=0,
            pos_x=0,
            pos_y=0,
            height=300,
            width=48,
            drag_callback=Function.set_brightness,
        ),
    ]
    
    return PopupAbsoluteLayout(
        width=48,
        height=350,
        border_width=0,
        background=Colours.bg_dim,
        close_on_click=False,
        hide_on_timeout=2,
        controls=controls,
    )
