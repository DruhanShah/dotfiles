from libqtile.layout import Bsp, Floating, Stack
from theme import Theme
from .scroll import Scrolling


class Layouts:

    scrolling = Scrolling(**Theme.lyt_scrolling)
    stacking = Stack(**Theme.lyt_stacking)
    bsp = Bsp(**Theme.lyt_bsp)
    floating = Floating(**Theme.lyt_floating)
