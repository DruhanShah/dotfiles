from .brightness import BrightnessPopup
from .volume import VolumePopup
from .sidebars import (
    DateTimeSidebar,
    DiagnosticsSidebar,
    NetworkSidebar,
)

datetime_sidebar = DateTimeSidebar()
diagnostics_sidebar = DiagnosticsSidebar()
network_sidebar = NetworkSidebar()
volume_slider = VolumePopup()
bright_slider = BrightnessPopup()


class PopupLayout:

    brightness_layout = {
        "popup_layout": bright_slider.layout(),
        "popup_hide_timeout": 0,
        "popup_show_args": {
            "relative_to": 4,
            "relative_to_bar": True,
            "x": 16,
            "y": 0,
        },
    }
    volume_layout = {
        "popup_layout": volume_slider.layout(),
        "popup_hide_timeout": 0,
        "popup_show_args": {
            "relative_to": 4,
            "relative_to_bar": True,
            "x": 16,
            "y": 0,
        },
    }
    datetime_layout = {
        "popup_layout": datetime_sidebar.layout(),
        "popup_hide_timeout": 0,
        "popup_show_args": {
            "relative_to": 4,
            "relative_to_bar": False,
            "x": 0,
            "y": 0,
        },
    }
    system_layout = {
        "popup_layout": diagnostics_sidebar.layout(),
        "popup_hide_timeout": 0,
        "popup_show_args": {
            "relative_to": 4,
            "relative_to_bar": False,
            "x": 0,
            "y": 0,
        },
    }
    network_layout = {
        "popup_layout": network_sidebar.layout(),
        "popup_hide_timeout": 0,
        "popup_show_args": {
            "relative_to": 4,
            "relative_to_bar": False,
            "x": 0,
            "y": 0,
        },
    }
