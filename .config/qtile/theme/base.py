import os
from catppuccin import PALETTE


class Colours:

    palette = PALETTE.latte.colors

    base = palette.base.hex
    rosewater = palette.rosewater.hex
    flamingo = palette.flamingo.hex
    pink = palette.pink.hex
    mauve = palette.mauve.hex
    red = palette.red.hex
    maroon = palette.maroon.hex
    peach = palette.peach.hex
    yellow = palette.yellow.hex
    green = palette.green.hex
    teal = palette.teal.hex
    sky = palette.sky.hex
    sapphire = palette.sapphire.hex
    blue = palette.blue.hex
    lavender = palette.lavender.hex
    text = palette.text.hex
    subtext1 = palette.subtext1.hex
    subtext0 = palette.subtext0.hex
    overlay2 = palette.overlay2.hex
    overlay1 = palette.overlay1.hex
    overlay0 = palette.overlay0.hex
    surface2 = palette.surface2.hex
    surface1 = palette.surface1.hex
    surface0 = palette.surface0.hex
    base = palette.base.hex
    mantle = palette.mantle.hex
    crust = palette.crust.hex

    def transparent(color=base):
        return color + "00"

    def translucent(color=base):
        return color + "aa"


class Fonts:

    mono = "Iosevka"
    serif = "Literata"
    sans = "Inter Text"
    display = "Inter Display"
    symbol = "Symbols Nerd Font"


class Wallpaper:

    path = os.path.expanduser("~/Wallpapers/contour-latte.png")
