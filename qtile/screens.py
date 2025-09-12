from libqtile.config import Screen
from libqtile.bar import Bar
from aesthetics import BarAesthetics, Wallpaper
from widgets import WidgetsList


class Bars:

    widget_list = WidgetsList()

    def init_left_bar(self):
        return Bar(
            widgets=list(self.widget_list.init_left()),
            **BarAesthetics.left_bar
        )

    def init_top_bar(self):
        return Bar(
            widgets=list(self.widget_list.init_top()),
            **BarAesthetics.top_bar
        )

    def init_bottom_bar(self):
        return Bar(
            widgets=list(self.widget_list.init_top()),
            **BarAesthetics.bottom_bar
        )


class Screens:

    bars = Bars()

    def init_single_screen_left(self):
        return [
            Screen(
                wallpaper_mode="fill",
                wallpaper=Wallpaper.path,
                left=self.bars.init_left_bar(),
            )
        ]

    def init_single_screen_top(self):
        return [
            Screen(
                wallpaper_mode="fill",
                wallpaper=Wallpaper.path,
                top=self.bars.init_top_bar(),
            )
        ]

    def init_single_screen_bottom(self):
        return [
            Screen(
                wallpaper_mode="fill",
                wallpaper=Wallpaper.path,
                bottom=self.bars.init_bottom_bar(),
            )
        ]

    def init_dual_screen_left(self):
        return [
            Screen(
                wallpaper_mode="fill",
                wallpaper=Wallpaper.path,
                left=self.bars.init_left_bar(),
            ),
            Screen(
                wallpaper_mode="fill",
                wallpaper=Wallpaper.path,
                left=self.bars.init_left_bar(),
            )
        ]

    def init_dual_screen_top(self):
        return [
            Screen(
                wallpaper_mode="fill",
                wallpaper=Wallpaper.path,
                top=self.bars.init_top_bar(),
            ),
            Screen(
                wallpaper_mode="fill",
                wallpaper=Wallpaper.path,
                top=self.bars.init_top_bar(),
            )
        ]
