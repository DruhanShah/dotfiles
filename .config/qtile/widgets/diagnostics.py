from libqtile.widget import TextBox
from qtile_extras.widget.mixins import ExtendedPopupMixin
import psutil


def get_timestr(secs):
    mins, ss = divmod(secs, 60)
    hh, mm = divmod(mins, 60)
    return f"{hh}:{mm}:{ss}"


def get_battery_icon(value):
    if 0 <= value < 0.2:
        return "󰁺"
    if 0.2 <= value < 0.4:
        return "󰁼"
    if 0.4 <= value < 0.6:
        return "󰁾"
    if 0.6 <= value < 0.8:
        return "󰂀"
    if 0.8 <= value <= 1:
        return "󰂂"
    return "󰂑"


class DiagnosticsWidget(TextBox, ExtendedPopupMixin):

    def __init__(self, **config):
        TextBox.__init__(self, **config)
        ExtendedPopupMixin.__init__(self, **config)
        self.add_defaults(ExtendedPopupMixin.defaults)
        self.add_callbacks({"Button1": self.show_popup})

    def update_battery(self):
        icon = ""
        percentage = "0%",
        value = 0
        charging = "Charging"

        battery = psutil.sensors_battery()
        percentage = f"{round(battery.percent, 1)}%"
        value = battery.percent / 100
        if battery.power_plugged:
            charging = "Charging" if battery.percent < 100 else "Charged"
            icon = "󰂄" if battery.percent < 100 else "󱟢"
            time_string = ""
        else:
            icon = get_battery_icon(value)
            time_string = f"{get_timestr(battery.secsleft)} till empty"


        return {
            "battery_icon": icon,
            "battery_percentage": percentage,
            "battery_value": value,
            "battery_time": time_string,
        }

    def update_ram(self):
        ram = psutil.virtual_memory()
        processes = sorted(
            psutil.process_iter(["name", "memory_percent"]),
            key=lambda x: x.memory_percent()
        )
        proc_dict = {}
        for i, proc in enumerate(processes[-9:]):
            proc_dict[f"process_{9-i}_name"] = proc.name()
            proc_dict[f"process_{9-i}_mem"] = proc.memory_percent()

        return {
            "ram_icon": "󰘚",
            "ram_value": ram.percent/100,
            "ram_percentage": str(ram.percent) + "%",
            **proc_dict,
        }

    def update_cpu(self):
        net = psutil.cpu_percent(percpu=False, interval=0.1)
        pnet = psutil.cpu_percent(percpu=True, interval=0.1)
        pnet = { f"cpu_core_{i+1}": v/100 for i, v in enumerate(pnet) }
        return {
            "cpu_icon": "",
            "cpu_value": net/100,
            "cpu_percentage": str(net) + "%",
            **pnet,
        }

    def update_disk(self):
        disk = psutil.disk_usage("/")
        return {
            "disk_icon": "",
            "disk_value": disk.percent/100,
            "disk_percentage": str(disk.percent) + "%",
        }

    def update_fan(self):
        fan = psutil.sensors_fans()["dell_smm"][0]
        return {
            "fan_speed": f"{fan.current} RPM"
        }

    def update_temp(self):
        temp = psutil.sensors_temperatures()["dell_smm"][0]
        return {
            "temp_value": f"{temp.current}°C"
        }

    def update_popup(self):
        self.extended_popup.update_controls(
            **self.update_cpu(),
            **self.update_ram(),
            **self.update_battery(),
            **self.update_disk(),
            **self.update_fan(),
            **self.update_temp(),
        )
