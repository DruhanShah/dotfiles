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
        self.add_callbacks({"button1": self.show_popup})

    def update_datetime(self):
        now = datetime.datetime.now()
        return {
            "current_day": now.strftime("%A"),
            "current_date": now.strftime("%d %B"),
        }

    def update_calendar(self):
        now = datetime.datetime.now()
        cal = calendar.Calendar()
        weekdays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

        cal_dict = {
            "current_month": now.strftime("%B %Y"),
            **{f"weekday_{i}": day for i, day in enumerate(weekdays)},
            **{f"day_{i}_{ii}": "" for i in range(6) for ii in range(7)}
        }

        monthcal = cal.monthdatescalendar(now.year, now.month)
        for i, week in enumerate(monthcal):
            for ii, day in enumerate(week):
                if day.month != now.month:
                    label = ""
                else:
                    label = str(day.day)

                if day.day == now.day:
                    label = f"<span foreground='{Colours.red}'>{label}</span>"

                cal_dict[f"day_{i}_{ii}"] = label

        return cal_dict

    def update_popup(self):
        self.extended_popup.update_controls(
            **self.update_datetime(),
            **self.update_calendar(),
        )
