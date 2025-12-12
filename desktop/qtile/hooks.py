import subprocess
from os.path import expanduser
from libqtile import hook
from libqtile.lazy import lazy


@hook.subscribe.startup_once
def autostart():
    subprocess.call([expanduser("~/.config/qtile/scripts/autostart.sh")])


@hook.subscribe.startup
def bar_class():
    lazy.bar["top"].window.window.set_property("QTILE_BAR", 1, "CARDINAL", 32)
