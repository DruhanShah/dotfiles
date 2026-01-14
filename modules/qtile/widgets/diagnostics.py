from qtile_extras.widget import UPowerWidget
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


class DiagnosticsWidget(UPowerWidget, ExtendedPopupMixin):

    def __init__(self, **config):
        UPowerWidget.__init__(self, **config)
        ExtendedPopupMixin.__init__(self, **config)
        self.add_defaults(ExtendedPopupMixin.defaults)
        self.mouse_callbacks = {"Button1": self.show_popup}

    def update_battery(self):
        icon = ""
        percentage = "0%",
        value = 0

        battery = psutil.sensors_battery()
        percentage = f"{round(battery.percent, 1)}%"
        value = battery.percent / 100
        if battery.power_plugged:
            icon = "󰂄" if battery.percent < 100 else "󱟢"
            time_string = "Charging"
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
        return {
            "ram_icon": "󰘚",
            "ram_value": ram.percent/100,
            "ram_percentage": str(ram.percent) + "%",
        }

    def update_cpu(self):
        net = psutil.cpu_percent(percpu=False, interval=0.05)
        return {
            "cpu_icon": "",
            "cpu_value": net/100,
            "cpu_percentage": str(net) + "%",
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
        return {"fan_speed": f"{fan.current} RPM"}

    def update_temp(self):
        temp = psutil.sensors_temperatures()["dell_smm"][0]
        return {"temp_value": f"{temp.current}°C"}

    def update_popup(self):
        self.extended_popup.update_controls(
            **self.update_cpu(),
            **self.update_ram(),
            **self.update_battery(),
            **self.update_disk(),
            **self.update_fan(),
            **self.update_temp(),
        )
        self.timeout_add(1, self.update_popup)
