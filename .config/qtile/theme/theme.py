from libqtile.config import Match
from libqtile.layout import Floating

from .base import Colours, Fonts


class Theme:

    grp_layouts = {
        "Browser": {
            "x": 0.00,
            "y": 0.0341,
            "width": 0.98,
            "height": 0.934,
        },
    }

    lyt_scrolling = {
        "border_width": 0,
        "border_focus": Colours.bg1,
        "border_normal": Colours.bg1,
        "default_width": 70,
        "grow_amount": 5,
        "margin": [36, 36, 36, 0],
        "snap": True,
        "width_rules": {
            Match(wm_class="scrcpy"): 30,
            Match(wm_class="emacs"): 45,
            Match(wm_class="kitty"): 45,
            Match(wm_class="ghostty"): 45,
            Match(wm_class="Zathura"): 45,
            Match(wm_class="Zotero"): 60,
            Match(wm_class="openscad"): 60,
            Match(wm_class="brave-browser"): 100,
            Match(wm_class="zen"): 100,
        },
    }

    lyt_floating = {
        "border_width": 0,
        "border_focus": Colours.bg1,
        "border_normal": Colours.bg1,
        "float_rules": [
            *Floating.default_float_rules,
            Match(wm_class="confirmreset"),
            Match(wm_class="makebranch"),
            Match(wm_class="maketag"),
            Match(wm_class="ssh-askpass"),
            Match(wm_class="pinentry"),
            Match(wm_class="matplotlib"),
            Match(wm_class="file-picker"),
            Match(wm_class="mpv"),
            Match(wm_class="vicinae"),
        ],
    }

    notif_defaults = {
        "x": 60,
        "y": 24,
        "width": 240,
        "height": 72,
        "foreground": (Colours.red,
                       Colours.tx1,
                       Colours.tx2),
        "background": (Colours.bg2,
                       Colours.bg2,
                       Colours.bg2),
        "border_width": 0,
        "timeout": (10000, 3000, 3000),
        "corner_radius": 12,
        "font": Fonts.sans,
        "fontsize": 14,
        "horizontal_padding": 12,
        "vertical_padding": 8,
        "overflow": "more_height",
        "max_windows": 3,
        "gap": 8,
    }

    bar = {
        "size": 52,
        "margin": [18, 36, 18, 18],
        "border_width": 0,
        "background": Colours.bg1,
    }

    wgt_defaults = {
        # Widgets
        "font": Fonts.symbol,
        "fontsize": 20,
        "padding": 0,
        "foreground": Colours.tx1,
        "background": Colours.bg1,
        "rotate": False,

        # Selection Menu
        "menu_width": 300,
        "menu_offset_x": 24,
        "menu_offset_y": 24,
        "highlight_colour": Colours.blue,
        "highlight_radius": 0,
        "menu_background": Colours.bg2,
        "menu_foreground": Colours.tx1,
        "menu_foreground_disabled": Colours.tx3,
        "menu_foreground_highlighted": Colours.bg1,
        "menu_font": Fonts.sans,
        "menu_fontsize": 13,
    }

    wgt_groupbox = {
        "background": Colours.bg1,
        "active": Colours.purple,
        "inactive": Colours.ui2,
        "occupied": Colours.tx2,
        "radius": 8,
        "size": 36,
        "mode": "pills",
        "vertical": True,
    }

    wgt_clock = {
        "format": "%H\n%M\n%S",
        "foreground": Colours.tx1,
        "font": Fonts.mono + " Medium",
        "fontsize": 20,
        "padding": 10,
    }

    wgt_diagnostics = {
        "text": "",
        "foreground": Colours.green,
        "padding": 2,
    }

    wgt_networks = {
        "active": Colours.green,
        "inactive": Colours.ui2,
        "padding": 2,
        "text": "󰤨",
        "foreground": Colours.blue,
        "wifi_arc": 75,
        "wifi_rectangle_width": 5,
        "wifi_shape": "arc",
    }

    wgt_powermenu = {
        "text": "",
        "foreground": Colours.red,
        "padding": 2,
    }
