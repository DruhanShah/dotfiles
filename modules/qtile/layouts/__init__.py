from libqtile.layout import Bsp, Floating, Stack, MonadTall
from theme import Theme
from .scroll import Scrolling


class Layouts:

    scrolling = Scrolling(**Theme.lyt_scrolling)
    stack = Stack(**Theme.lyt_stack)
    bsp = Bsp(**Theme.lyt_bsp)
    floating = Floating(**Theme.lyt_floating)
    monadtall = MonadTall(**Theme.lyt_monadtall)
