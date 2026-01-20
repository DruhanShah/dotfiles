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

# WHY do I have to do this
@hook.subscribe.client_new
def flameshot(client):
    if client.name and "flameshot" in client.name.lower():
        client.enable_floating()
        client.center()
