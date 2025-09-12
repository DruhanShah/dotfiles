from qtile_extras.widget.decorations import RectDecoration
from .base import Colors, Fonts


class WidgetAesthetics:

    widget_defaults = {
        # Actual Widget things
        "font": Fonts.symbol,
        "fontsize": 20,
        "padding": 5,
        "foreground": Colors.text,
        "background": Colors.crust,
        "rotate": False,

        # Selection Menu things
        "menu_width": 300,
        "menu_offset_x": 24,
        "menu_offset_y": 24,
        "highlight_colour": Colors.blue,
        "highlight_radius": 0,
        "menu_background": Colors.crust,
        "menu_foreground": Colors.text,
        "menu_foreground_disabled": Colors.overlay0,
        "menu_foreground_highlighted": Colors.base,
        "menu_font": Fonts.sans,
        "menu_fontsize": 13,
    }

    extension_defaults = widget_defaults.copy()

    invisible_aesthetics = lambda x: {
        "mode": "popup",
        "step": x,
    }

    groupbox_aesthetics = lambda: {
        "background": Colors.base,
        "active": Colors.mauve,
        "inactive": Colors.surface0,
        "occupied": Colors.subtext0,
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

    music_aesthetics = lambda: {
        "format": "󰓇",
        "paused_text": "󰓇",
        "stopped_text": "󰓇",
        "scroll": False,
        "foreground": Colors.green,
    }

    clock_aesthetics = lambda sep: {
        "format": f"%H{sep}%M{sep}%S",
        "foreground": Colors.text,
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

    diagnostic_aesthetics = {
        "text": "",
        "foreground": Colors.blue,
        "padding": 10,
        "decorations": [RectDecoration(
            use_widget_background=True,
            filled=True,
            radius=0,
            padding_x=8,
        )]
    }

    network_aesthetics = {
        "active": Colors.green,
        "inactive": Colors.surface0,
        "padding": 10,
        "text": "󰤨",
        "foreground": Colors.green,
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
