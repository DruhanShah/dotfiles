from libqtile.widget import TextBox, Spacer
from qtile_extras.widget import modify
from popups import PopupLayout

from .groupbox import GroupBoxWidget
from .audio import AudioWidget
from .brightness import BrightWidget
from .diagnostics_sidebar import DiagMasterWidget
from .datetime_sidebar import CalMasterWidget
from .network_sidebar import NetMasterWidget

from theme import Theme


class Widgets:

    def pad(x):
        return TextBox(padding=x-10, background=None)

    def space():
        return Spacer(background=None)

    def blankpad():
        return TextBox(background=None)

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
        CalMasterWidget,
        **PopupLayout.datetime_layout,
        **Theme.wgt_clock,
    )
    diagnosticwidget = modify(
        DiagMasterWidget,
        **PopupLayout.system_layout,
        **Theme.wgt_diagnostics,
    )
    networkwidget = modify(
        NetMasterWidget,
        **PopupLayout.network_layout,
        **Theme.wgt_networks,
    )
