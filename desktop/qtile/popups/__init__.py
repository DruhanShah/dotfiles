from .brightness import brightness_slider
from .volume import volume_slider
from .diagnostics import diagnostics_popup
from .network import network_popup
from .calendar import calendar_popup
from .power import powermenu_popup


class PopupLayout:

    brightness_layout = {
        "popup_layout": brightness_slider(),
        "popup_hide_timeout": 0,
        "popup_show_args": {
            "relative_to": 4,
            "relative_to_bar": True,
            "x": 16,
            "y": 0,
        },
    }

    volume_layout = {
        "popup_layout": volume_slider(),
        "popup_hide_timeout": 0,
        "popup_show_args": {
            "relative_to": 4,
            "relative_to_bar": True,
            "x": 16,
            "y": 0,
        },
    }

    datetime_layout = {
        "popup_layout": calendar_popup(),
        "popup_hide_timeout": 0,
        "popup_show_args": {
            "relative_to": 3,
            "relative_to_bar": True,
            "x": -16,
            "y": 48,
        },
    }

    system_layout = {
        "popup_layout": diagnostics_popup(),
        "popup_hide_timeout": 0,
        "popup_show_args": {
            "relative_to": 3,
            "relative_to_bar": True,
            "x": -16,
            "y": 48,
        },
    }

    network_layout = {
        "popup_layout": network_popup(),
        "popup_hide_timeout": 0,
        "popup_show_args": {
            "relative_to": 3,
            "relative_to_bar": True,
            "x": -16,
            "y": 48,
        },
    }

    powermenu_layout = {
        "popup_layout": powermenu_popup(),
        "popup_hide_timeout": 0,
        "popup_show_args": {
            "relative_to": 5,
            "relative_to_bar": False,
            "x": 0,
            "y": 0,
        },
    }
