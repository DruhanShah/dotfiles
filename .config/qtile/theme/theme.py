from libqtile.config import Match
from libqtile.layout import Floating
from qtile_extras.widget.decorations import RectDecoration

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
        "border_focus": Colours.base,
        "border_normal": Colours.base,
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
            Match(wm_class="Zotero"): 55,
            Match(wm_class="openscad"): 55,
            Match(wm_class="brave-browser"): 100,
            Match(wm_class="zen"): 100,
        },
    }

    lyt_floating = {
        "border_width": 0,
        "border_focus": Colours.base,
        "border_normal": Colours.base,
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
        "foreground": (Colours.maroon,
                       Colours.text,
                       Colours.subtext0),
        "background": (Colours.crust,
                       Colours.crust,
                       Colours.crust),
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
        "margin": [0, 36, 0, 0],
        "border_width": 0,
        "background": Colours.base,
    }

    wgt_defaults = {
        # Widgets
        "font": Fonts.symbol,
        "fontsize": 20,
        "padding": 5,
        "foreground": Colours.text,
        "background": Colours.crust,
        "rotate": False,

        # Selection Menu
        "menu_width": 300,
        "menu_offset_x": 24,
        "menu_offset_y": 24,
        "highlight_colour": Colours.blue,
        "highlight_radius": 0,
        "menu_background": Colours.crust,
        "menu_foreground": Colours.text,
        "menu_foreground_disabled": Colours.overlay0,
        "menu_foreground_highlighted": Colours.base,
        "menu_font": Fonts.sans,
        "menu_fontsize": 13,
    }

    wgt_groupbox = {
        "background": Colours.base,
        "active": Colours.mauve,
        "inactive": Colours.surface0,
        "occupied": Colours.subtext0,
        "radius": 10,
        "shrink": 0.85,
        "size": 40,
        "mode": "pills",
        "vertical": True,
        "decorations": [RectDecoration(
            use_widget_background=True,
            filled=True,
            radius=0,
            padding_x=4,
        )]
    }

    wgt_clock = {
        "format": "%H\n%M\n%S",
        "foreground": Colours.text,
        "font": Fonts.mono + " Medium",
        "fontsize": 20,
        "padding": 10,
        "decorations": [RectDecoration(
            use_widget_background=True,
            filled=True,
            radius=0,
            padding_x=8,
        )]
    }

    wgt_diagnostics = {
        "text": "",
        "foreground": Colours.blue,
        "padding": 10,
        "decorations": [RectDecoration(
            use_widget_background=True,
            filled=True,
            radius=0,
            padding_x=8,
        )]
    }

    wgt_networks = {
        "active": Colours.green,
        "inactive": Colours.surface0,
        "padding": 10,
        "text": "󰤨",
        "foreground": Colours.green,
        "wifi_arc": 75,
        "wifi_rectangle_width": 5,
        "wifi_shape": "arc",
        "decorations": [RectDecoration(
            use_widget_background=True,
            filled=True,
            radius=0,
            padding_x=8,
        )]
    }
