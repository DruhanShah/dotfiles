import os


class Colours:

    base = "#faf4ed"
    surface = "#fffaf3"
    overlay = "#f2e9e1"
    muted = "#9893a5"
    subtle = "#797593"
    text = "#575279"
    love = "#b4637a"
    gold = "#ea9d34"
    rose = "#d7827e"
    pine = "#286983"
    foam = "#56949f"
    iris = "#907aa9"
    highlight0 = "#f4ede8"
    highlight1 = "#dfdad9"
    highlight2 = "#cecacd"

    def transparent(color=base):
        return color + "00"

    def translucent(color=base):
        return color + "aa"


class Fonts:

    mono = "Iosevka"
    serif = "Literata"
    sans = "Inter"
    display = "Inter Display"
    symbol = "Symbols Nerd Font"


class Wallpaper:

    path = os.path.expanduser("~/Wallpapers/blockwavedawn.png")
