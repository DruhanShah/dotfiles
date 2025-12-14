import subprocess
from os.path import expanduser
from libqtile import hook
from libqtile import qtile


@hook.subscribe.startup_once
def autostart():
    subprocess.call([expanduser("~/.config/qtile/scripts/autostart.sh")])


@hook.subscribe.startup
def bar_class():
    qtile.current_screen.top.window.window.set_property("QTILE_BAR", 1, "CARDINAL", 32)
