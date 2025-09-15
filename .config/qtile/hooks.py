import subprocess
from os.path import expanduser
from libqtile import hook


@hook.subscribe.startup_once
def autostart():
    subprocess.call([expanduser("~/.config/qtile/scripts/autostart.sh")])
