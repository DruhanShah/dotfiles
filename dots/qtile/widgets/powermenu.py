from uptime import uptime
from libqtile.widget import Image
from qtile_extras.widget.mixins import ExtendedPopupMixin


def pretty_time(seconds):
    components = []
    m, s = divmod(seconds, 60)
    h, m = divmod(m, 60)
    d, h = divmod(h, 24)
    if d > 0:
        components.append(f"{d:.0f} day{'s' if d > 1 else ''}")
    if h > 0:
        components.append(f"{h:.0f} hour{'s' if h > 1 else ''}")
    if m > 0:
        components.append(f"{m:.0f} minute{'s' if m > 1 else ''}")
    if s > 0:
        components.append(f"{s:.0f} second{'s' if s > 1 else ''}")
    return " ".join(components)


class PowerWidget(Image, ExtendedPopupMixin):

    def __init__(self, **config):
        Image.__init__(self, **config)
        ExtendedPopupMixin.__init__(self, **config)
        self.add_defaults(ExtendedPopupMixin.defaults)
        self.add_callbacks({"Button1": self.show_popup})

    def update_popup(self):
        uptime_s = uptime()
        uptime_str = f"Uptime: {pretty_time(uptime_s)}"
        self.extended_popup.update_controls(uptime=uptime_str)
