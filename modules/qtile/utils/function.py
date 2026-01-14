import re
import subprocess
from libqtile.lazy import lazy

class Function:

    @lazy.function
    def toggle_trackpad(qtile, index=10):
        command = f"xinput list-props {index}"
        output = subprocess.check_output(command.split()).decode("utf-8")
        status = int(re.search(r"Device Enabled.*(\d)", output).group(1))

        task = "disable" if status else "enable"
        command = f"xinput {task} {index}"
        subprocess.run(command.split())
        return
       
    @lazy.function
    def set_brightness(qtile, x):
        qtile.widgets_map["brightwidget"].set_brightness_percent(x)

    @lazy.function
    def set_volume(qtile, x):
        qtile.widgets_map["audiowidget"].set_volume_percent(x)
