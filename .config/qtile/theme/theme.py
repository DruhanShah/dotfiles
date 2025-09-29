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
        "border_width": 6,
        "border_focus": Colours.highlight1,
        "border_normal": Colours.highlight1,
        "default_width": 70,
        "grow_amount": 5,
        "margin": [36, 36, 36, 0],
        "snap": True,
        "width_rules": {
            Match(wm_class="scrcpy"): 30,
            Match(wm_class="emacs"): 50,
            Match(wm_class="kitty"): 50,
            Match(wm_class="ghostty"): 50,
            Match(wm_class="Zathura"): 50,
            Match(wm_class="Zotero"): 75,
            Match(wm_class="openscad"): 60,
            Match(wm_class="brave-browser"): 100,
            Match(wm_class="zen"): 100,
        },
    }

    lyt_floating = {
        "border_width": 6,
        "border_focus": Colours.highlight1,
        "border_normal": Colours.highlight1,
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
        "foreground": (Colours.love,
                       Colours.text,
                       Colours.muted),
        "background": (Colours.overlay,
                       Colours.overlay,
                       Colours.overlay),
        "border_width": 2,
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
        "background": Colours.surface,
        "rotate": False,

        # Selection Menu
        "menu_width": 300,
        "menu_offset_x": 24,
        "menu_offset_y": 24,
        "highlight_colour": Colours.pine,
        "highlight_radius": 0,
        "menu_background": Colours.overlay,
        "menu_foreground": Colours.text,
        "menu_foreground_disabled": Colours.muted,
        "menu_foreground_highlighted": Colours.base,
        "menu_font": Fonts.sans,
        "menu_fontsize": 13,
    }

    wgt_groupbox = {
        "background": Colours.base,
        "active": Colours.iris,
        "inactive": Colours.highlight2,
        "occupied": Colours.subtle,
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
        "foreground": Colours.pine,
        "padding": 10,
        "decorations": [RectDecoration(
            use_widget_background=True,
            filled=True,
            radius=0,
            padding_x=8,
        )]
    }

    wgt_networks = {
        "active": Colours.foam,
        "inactive": Colours.muted,
        "padding": 10,
        "text": "󰤨",
        "foreground": Colours.foam,
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
