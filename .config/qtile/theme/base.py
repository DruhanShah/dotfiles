import os
class Colours:

    bg1 = "#FFFCF0"
    bg2 = "#F2F0E5"
    ui1 = "#E6E4D9"
    ui2 = "#DAD8CE"
    ui3 = "#CECDC3"
    tx3 = "#B7B5AC"
    tx2 = "#6F6E69"
    tx1 = "#100F0F"

    red = "#AF3029"
    orange = "#BC5215"
    yellow = "#AD8301"
    green = "#66800B"
    cyan = "#24837B"
    blue = "#205EA6"
    purple = "#5E409D"
    magenta = "#A02F6F"

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

    path = os.path.expanduser("~/Wallpapers/rocks.jpg")
