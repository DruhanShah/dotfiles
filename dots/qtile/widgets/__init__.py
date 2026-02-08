from libqtile.widget import (
    TextBox, Spacer,
    TaskList,
)
from qtile_extras.widget import (
    BrightnessControl, PulseVolumeExtra
)
from popups import PopupLayout

from .groupbox import GroupBoxWidget
from .diagnostics import DiagnosticsWidget
from .datetime import CalendarWidget
from .network import NetStatusIcon
from .powermenu import PowerWidget
from .layout import LayoutWidget

from theme import Theme


class Widgets:

    def pad(x):
        return TextBox(padding=x, background=None)

    def space():
        return Spacer(background=None)

    brightwidget = BrightnessControl(
        **PopupLayout.brightness_layout,
        mode="popup", step=4800,
    )
    audiowidget = PulseVolumeExtra(
        **PopupLayout.volume_layout,
        mode="popup", step=5,
    )
    groupboxwidget = GroupBoxWidget(
        **Theme.wgt_groupbox,
    )
    datetimewidget = CalendarWidget(
        **PopupLayout.datetime_layout,
        **Theme.wgt_clock,
    )
    diagnosticwidget = DiagnosticsWidget(
        **Theme.wgt_diagnostics,
    )
    networkwidget = NetStatusIcon(
        **Theme.wgt_networks,
    )
    powerwidget = PowerWidget(
        **PopupLayout.powermenu_layout,
        **Theme.wgt_powermenu,
    )
    layoutwidget = LayoutWidget(
        **PopupLayout.layout_layout,
        **Theme.wgt_layout,
    )
    windowswidget = TaskList(
        **Theme.wgt_windows,
    )
