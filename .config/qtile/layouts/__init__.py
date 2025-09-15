from libqtile.layout import Floating, Columns
from aesthetics import LayoutAesthetics
from .scroll import Scrolling

class Layouts:

    scrolling = Scrolling(**LayoutAesthetics.scrolling)
    floating = Floating(**LayoutAesthetics.floating)
    # max = Floating(**LayoutAesthetics.max)
    # columns = Columns(**LayoutAesthetics.columns)
    # monadtall = Floating(**LayoutAesthetics.monadtall)
    # monadwide = Floating(**LayoutAesthetics.monadwide)
