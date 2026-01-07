import subprocess
import shlex
from libqtile import hook
from libqtile import qtile


@hook.subscribe.startup_once
def autostart():
    commands = [
        "picom",
        "syncthing",
        "setxkbmap -option compose:ralt,ctrl:nocaps",
        "xcape -e 'Control_L=Escape'",
    ]
    for command in commands:
        subprocess.Popen(shlex.split(command))


@hook.subscribe.startup_complete
def bar_class():
    qtile.current_screen.top.window.window.set_property("QTILE_BAR", 1, "CARDINAL", 32)
