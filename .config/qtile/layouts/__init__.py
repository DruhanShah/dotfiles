from libqtile.layout import Floating
from theme import Theme
from .scroll import Scrolling


class Layouts:

    scrolling = Scrolling(**Theme.lyt_scrolling)
    floating = Floating(**Theme.lyt_floating)
