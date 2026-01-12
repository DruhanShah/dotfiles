from libqtile.config import Screen
from libqtile.bar import Bar

from utils import Notifier
from theme import Theme, Wallpaper
from widgets import Widgets


class Screens:

    def init_bar():
        return Bar(
            widgets=[
                Widgets.brightwidget,
                # Widgets.audiowidget,
                Widgets.pad(4),
                Widgets.powerwidget,
                Widgets.pad(6),
                Widgets.groupboxwidget,
                Widgets.space(),
                Widgets.diagnosticwidget,
                Widgets.pad(6),
                Widgets.networkwidget,
                Widgets.pad(6),
                Widgets.layoutwidget,
                Widgets.pad(6),
                Widgets.datetimewidget,
            ],
            **Theme.bar
        )

    def init_screens(screens=1):
        return [
            Screen(wallpaper_mode="fill",
                   wallpaper=Wallpaper.path,
                   top=Screens.init_bar())
            for _ in range(screens)
        ]

    def init_notifs():
        return Notifier(**Theme.notif_defaults)
