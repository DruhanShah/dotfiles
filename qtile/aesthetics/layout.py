from libqtile.layout import Floating
from libqtile.config import Match
from qtile_extras.layout.decorations import SolidEdge

from .base import Colors

class LayoutAesthetics:

    scrolling = {
        "border_width": 0,
        "border_focus": SolidEdge(colour=Colors.base),
        "border_normal": SolidEdge(colour=Colors.base),
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

    floating = {
        "border_width": 0,
        "border_focus": SolidEdge(colour=Colors.base),
        "border_normal": SolidEdge(colour=Colors.base),
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
