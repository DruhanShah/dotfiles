from libqtile.widget import Clock
from qtile_extras.widget.mixins import ExtendedPopupMixin
import datetime
import calendar

from theme import Colours


class CalendarWidget(Clock, ExtendedPopupMixin):

    def __init__(self, **config):
        if "format" not in config:
            config["format"] = "%H\n%M\n%S"

        Clock.__init__(self, **config)
        ExtendedPopupMixin.__init__(self, **config)
        self.add_defaults(ExtendedPopupMixin.defaults)
        self.mouse_callbacks = {"button1": self.show_popup}

    def update_calendar(self, dt=datetime.datetime.now()):
        pass

    def update_popup(self):
        self.extended_popup.update_controls(
            **self.update_calendar(),
        )
