from libqtile.config import Screen
from libqtile.bar import Bar

from utils import Notifier
from theme import Theme, Wallpaper
from widgets import Widgets


class Screens:

    def __init__(self):
        self.bar = Bar(
            widgets=[
                Widgets.brightwidget,
                Widgets.audiowidget,
                Widgets.pad(5),
                Widgets.diagnosticwidget,
                Widgets.pad(2),
                Widgets.networkwidget,
                Widgets.space(),
                Widgets.groupboxwidget,
                Widgets.space(),
                Widgets.datetimewidget,
                Widgets.pad(2),
                Widgets.powerwidget,
                Widgets.pad(5),
            ],
            **Theme.bar
        )

    def screen_list(self, screens=1):
        return [
            Screen(wallpaper_mode="fill",
                   wallpaper=Wallpaper.path,
                   left=self.bar)
            for _ in range(screens)
        ]

    def notifications(self):
        return Notifier(**Theme.notif_defaults)
