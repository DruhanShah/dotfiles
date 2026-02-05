import os
class Colours:

    bg_dim = "#bbbbbb"
    bg0 = "#cccccc"
    bg1 = "#c0c0c0"
    bg2 = "#bbbbbb"
    bg3 = "#aaaaaa"
    bg4 = "#999999"
    bg5 = "#888888"

    bg_visual = "#EAEDC8"
    bg_red = "#FDE3DA"
    bg_yellow = "#FAEDCD"
    bg_green = "#F0F1D2"
    bg_blue = "#E9F0E9"
    bg_purple = "#FAE8E2"

    fg = "#222222"

    red = "#af3029"
    orange = "#bc5215"
    yellow = "#ad8301"
    green = "#66800b"
    aqua = "#24837b"
    blue = "#205ea6"
    purple = "#5e409d"
    magenta = "#a02f6f"

    grey0 = "#777777"
    grey1 = "#555555"
    grey2 = "#444444"

    def transparent(color=bg0):
        return color + "00"

    def translucent(color=bg0, alpha="aa"):
        return color + alpha


class Fonts:

    mono = "Iosevka"
    serif = "Inter"
    sans = "Inter"
    display = "Inter Display"
    symbol = "Symbols Nerd Font"


class Wallpaper:

    path = os.path.expanduser("~/wallpapers/eink-device.jpg")
