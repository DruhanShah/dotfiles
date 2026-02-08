from libqtile.widget import Clock
from libqtile.command.base import expose_command
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

        self.time = None

    def _recalibrate(self):
        self.time = datetime.datetime.now()

    def update_calendar(self):
        now = datetime.datetime.now()
        cal = calendar.Calendar()
        weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

        cal_dict = {
            "current_month": self.time.strftime("%B %Y"),
            **{f"weekday_{i}": day for i, day in enumerate(weekdays)},
            **{f"day_{i}_{ii}": "" for i in range(6) for ii in range(7)}
        }

        monthcal = cal.monthdatescalendar(self.time.year, self.time.month)
        for i, week in enumerate(monthcal):
            for ii, day in enumerate(week):
                if day.month != self.time.month:
                    label = ""
                else:
                    label = str(day.day)

                if day.day == now.day and day.month == now.month:
                    label = f"<span foreground='{Colours.red}'>{label}</span>"

                cal_dict[f"day_{i}_{ii}"] = label

        return cal_dict

    @expose_command
    def next_month(self):
        self.time = self.time.replace(month=self.time.month+1, day=1)
        self.extended_popup.update_controls(**self.update_calendar())

    @expose_command
    def prev_month(self):
        self.time = self.time.replace(month=self.time.month-1, day=1)
        self.extended_popup.update_controls(**self.update_calendar())

    def update_popup(self):
        self._recalibrate()
        self.extended_popup.update_controls(**self.update_calendar())
