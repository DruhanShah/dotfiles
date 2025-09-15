from libqtile.widget import TextBox, Spacer
from qtile_extras.widget import modify
from popups import PopupLayout

from .groupbox import GroupBoxWidget
from .audio import AudioWidget
from .brightness import BrightWidget
from .diagnostics_sidebar import DiagMasterWidget
from .datetime_sidebar import CalMasterWidget
from .network_sidebar import NetMasterWidget

from aesthetics import PopupAesthetics, WidgetAesthetics


class Widgets:

    pad = lambda x: TextBox(padding=x-10, background=None)
    space = lambda: Spacer(background=None)
    blankpad = lambda: TextBox(background=None)

    brightwidget = lambda: BrightWidget(
        **PopupLayout.brightness_layout,
        **PopupAesthetics.place_w,
        **WidgetAesthetics.invisible_aesthetics(4800),
    )
    audiowidget = lambda: AudioWidget(
        **PopupLayout.volume_layout,
        **PopupAesthetics.place_w,
        **WidgetAesthetics.invisible_aesthetics(5),
    )
    groupboxwidget = lambda: GroupBoxWidget(
        **WidgetAesthetics.groupbox_aesthetics(),
    )
    datetimewidget = lambda sep: modify(
        CalMasterWidget,
        **PopupLayout.datetime_layout,
        **PopupAesthetics.place_sidebar,
        **WidgetAesthetics.clock_aesthetics(sep),
    )
    diagnosticwidget = lambda: modify(
        DiagMasterWidget,
        **PopupLayout.system_layout,
        **PopupAesthetics.place_sidebar,
        **WidgetAesthetics.diagnostic_aesthetics,
    )
    networkwidget = lambda: modify(
        NetMasterWidget,
        **PopupLayout.network_layout,
        **PopupAesthetics.place_sidebar,
        **WidgetAesthetics.network_aesthetics,
    )


class WidgetsList:

    def init_left(self):

        yield Widgets.brightwidget()
        yield Widgets.audiowidget()
        yield Widgets.pad(0)
        yield Widgets.diagnosticwidget()
        yield Widgets.pad(0)
        yield Widgets.networkwidget()
        yield Widgets.space()
        yield Widgets.groupboxwidget()
        yield Widgets.space()
        yield Widgets.datetimewidget("\n")
        yield Widgets.pad(0)

    def init_top(self):
        yield Widgets.audiowidget()
        yield Widgets.brightwidget()
        yield Widgets.diagnosticwidget()
        yield Widgets.pad(12)
        yield Widgets.networkwidget()
        yield Widgets.space()
        yield Widgets.groupboxwidget()
        yield Widgets.space()
        yield Widgets.datetimewidget(" ")
