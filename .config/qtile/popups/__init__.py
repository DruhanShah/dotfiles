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

    brightness_layout = {"popup_layout": bright_slider.layout()}
    volume_layout = {"popup_layout": volume_slider.layout()}
    datetime_layout = {"popup_layout": datetime_sidebar.layout()}
    system_layout = {"popup_layout": diagnostics_sidebar.layout()}
    network_layout = {"popup_layout": network_sidebar.layout()}
