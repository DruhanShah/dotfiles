from libqtile.config import Match
from libqtile.layout import Floating
from utils import RoundedCorners

from .base import Colours, Fonts


MARGIN = 18
BAR = 36


class Theme:

    grp_layouts = {
        "Browser": {
            "x": MARGIN/1920,
            "y": MARGIN/(1080-BAR),
            "width": 1 - 2*MARGIN/1920,
            "height": 1 - 2*MARGIN/(1080-BAR),
            "opacity": 1.0,
            "on_focus_lost_hide": False,
        },
    }

    lyt_scrolling = {
        "border_width": 2,
        "border_focus": Colours.fg,
        "border_normal": Colours.transparent(),
        "default_width": 50,
        "grow_amount": 5,
        "margin": MARGIN,
        "snap": True,
        "width_rules": {
            Match(wm_class="scrcpy"): 30,
            Match(wm_class="equibop"): 100,
            Match(wm_class="gimp"): 100,
            Match(wm_class="inkscape"): 100,
            Match(wm_class="brave-browser"): 100,
            Match(wm_class="zen-beta"): 100,
        },
    }

    lyt_stack = {
        "border_width": 2,
        "border_focus": Colours.fg,
        "border_normal": Colours.bg0,
        "margin": MARGIN,
        "num_stacks": 1,
    }

    lyt_bsp = {
        "border_width": 2,
        "border_focus": Colours.fg,
        "border_normal": Colours.bg0,
        "border_on_single": True,
        "margin": MARGIN,
    }

    lyt_monadtall = {
        "border_width": 2,
        "single_border_width": 2,
        "border_focus": Colours.fg,
        "border_normal": Colours.bg0,
        "margin": MARGIN,
        "margin_single": MARGIN,
        "ratio": 0.6,
        "new_client_position": "bottom",
    }

    lyt_floating = {
        "border_width": 2,
        "border_focus": Colours.fg,
        "border_normal": Colours.bg0,
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
        "foreground": (Colours.fg,
                       Colours.fg,
                       Colours.grey2),
        "background": (Colours.bg_dim,
                       Colours.bg_dim,
                       Colours.bg_dim),
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

    lyt_floating = {
        "border_width": 0,
        "border_focus": Colours.bg0,
        "border_normal": Colours.bg0,
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

    bar = {
        "size": BAR,
        "margin": 0,
        "border_width": 0,
        "background": Colours.transparent(),
    }

    wgt_defaults = {
        # Widgets
        "font": Fonts.symbol,
        "fontsize": 13,
        "padding": 0,
        "foreground": Colours.fg,
        "background": Colours.transparent(),
        "rotate": False,

        # Selection Menu
        "menu_width": 300,
        "menu_offset_x": 24,
        "menu_offset_y": 24,
        "highlight_colour": Colours.bg_blue,
        "highlight_radius": 0,
        "menu_background": Colours.bg3,
        "menu_foreground": Colours.fg,
        "menu_foreground_disabled": Colours.grey2,
        "menu_foreground_highlighted": Colours.fg,
        "menu_font": Fonts.sans,
        "menu_fontsize": 13,
    }

    wgt_groupbox = {
        "background": Colours.transparent(),
        "active": Colours.fg,
        "inactive": Colours.bg_dim,
        "occupied": Colours.grey1,
        "radius": 4,
        "size": 24,
        "mode": "pills",
        "vertical": False,
    }

    wgt_clock = {
        "format": "%A, %d %b   %H:%M:%S",
        "foreground": Colours.fg,
        "font": Fonts.sans + " Medium",
        "padding": 10,
        "width": 200,
    }

    wgt_diagnostics = {
        "battery_height": 12,
        "battery_width": 24,
        "border_charge_colour": Colours.fg,
        "border_colour": Colours.fg,
        "border_critical_colour": Colours.red,
        "fill_charge": Colours.green,
        "fill_critical": Colours.red,
        "fill_low": Colours.orange,
        "fill_normal": Colours.fg,
        "percentage_critical": 0.15,
        "percentage_low": 0.30,
        "padding": 2,
    }

    wgt_networks = {
        "active": Colours.green,
        "inactive": Colours.bg5,
        "padding": 2,
        "text": "󰤨",
        "wifi_arc": 75,
        "wifi_shape": "arc",
    }

    wgt_layout = {
        "background": None,
        "custom_icon_paths": ["~/.config/qtile/assets/layout/"],
        "scale": 0.4,
        "mode": "icon",
    }

    wgt_powermenu = {
        "filename": "~/.config/qtile/assets/others/qtile-logo.svg",
        "scale": True,
        "margin_y": 8,
        "margin_x": 2,
    }
