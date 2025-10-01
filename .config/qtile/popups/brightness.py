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
            foreground=Colours.text,
            background=Colours.transparent(),
            pos_x=0,
            pos_y=240,
            width=48,
            height=60,
            h_align="center",
        ),
        PopupSlider(
            name="value",
            horizontal=False,
            bar_size=48,
            marker_size=0,
            colour_below=Colours.sapphire,
            colour_above=Colours.transparent(),
            bar_border_colour=Colours.text,
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
        height=300,
        border_width=0,
        background=Colours.crust,
        close_on_click=False,
        hide_on_timeout=2,
        controls=controls,
    )
