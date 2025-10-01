from libqtile.widget import TextBox, Spacer
from qtile_extras.widget import modify
from popups import PopupLayout

from .groupbox import GroupBoxWidget
from .audio import AudioWidget
from .brightness import BrightWidget
from .diagnostics import DiagnosticsWidget
from .datetime import CalendarWidget
from .network import NetworkWidget
from .powermenu import PowerWidget

from theme import Theme


class Widgets:

    def pad(x):
        return TextBox(padding=x-10, background=None)

    def space():
        return Spacer(background=None)

    brightwidget = BrightWidget(
        **PopupLayout.brightness_layout,
        mode="popup",
        step=4800,
    )
    audiowidget = AudioWidget(
        **PopupLayout.volume_layout,
        mode="popup",
        step=5,
    )
    groupboxwidget = GroupBoxWidget(
        **Theme.wgt_groupbox,
    )
    datetimewidget = modify(
        CalendarWidget,
        **PopupLayout.datetime_layout,
        **Theme.wgt_clock,
    )
    diagnosticwidget = modify(
        DiagnosticsWidget,
        **PopupLayout.system_layout,
        **Theme.wgt_diagnostics,
    )
    networkwidget = modify(
        NetworkWidget,
        **PopupLayout.network_layout,
        **Theme.wgt_networks,
    )
    powerwidget = modify(
        PowerWidget,
        **PopupLayout.powermenu_layout,
        **Theme.wgt_powermenu,
    )
