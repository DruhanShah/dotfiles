import subprocess
import shlex
from libqtile import hook
from libqtile import qtile


@hook.subscribe.startup_once
def autostart():
    commands = [
        "vicinae server",
        # "syncthing",
    ]
    for command in commands:
        subprocess.Popen(shlex.split(command))
