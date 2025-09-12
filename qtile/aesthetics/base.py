import os
from catppuccin import PALETTE


class Colors:

    flavor = ("latte"
              if os.environ.get("THEME", "light") == "light"
              else "macchiato")
    palette = (PALETTE.latte.colors
               if flavor == "latte"
               else PALETTE.macchiato.colors)

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
    transparent = base + "00"
    translucent = base + "aa"


class Fonts:

    mono = "Iosevka"
    serif = "Literata"
    sans = "Inter Variable"
    symbol = "Symbols Nerd Font"


class Wallpaper:

    path = os.path.expanduser(f"~/Wallpapers/contour-{Colors.flavor}.png")
