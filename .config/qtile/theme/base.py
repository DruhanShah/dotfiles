import os
class Colours:

    bg_dim = "#EFEBD4"
    bg0 = "#FDF6E3"
    bg1 = "#F4F0D9"
    bg2 = "#EFEBD4"
    bg3 = "#E6E2CC"
    bg4 = "#E0DCC7"
    bg5 = "#BDC3AF"

    bg_visual = "#EAEDC8"
    bg_red = "#FDE3DA"
    bg_yellow = "#FAEDCD"
    bg_green = "#F0F1D2"
    bg_blue = "#E9F0E9"
    bg_purple = "#FAE8E2"

    fg = "#5C6A72"

    red = "#F85552"
    orange = "#F57D26"
    yellow = "#DFA000"
    green = "#8DA101"
    aqua = "#35A77C"
    blue = "#3A94C5"
    purple = "#DF69BA"

    grey0 = "#A6B0A0"
    grey1 = "#939F91"
    grey2 = "#829181"

    sl_green = "#93B259"
    sl_grey = "#708089"
    sl_red = "#E66868"

    def transparent(color=bg1):
        return color + "00"

    def translucent(color=bg1):
        return color + "aa"


class Fonts:

    mono = "Iosevka"
    serif = "Inter"
    sans = "Inter"
    display = "Inter Display"
    symbol = "Symbols Nerd Font"


class Wallpaper:

    path = os.path.expanduser("~/Wallpapers/contour-everforest.png")
