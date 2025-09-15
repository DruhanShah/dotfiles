import calendar
import datetime
import re
from libqtile.widget import base, Clock
from qtile_extras.widget.mixins import ExtendedPopupMixin
from aesthetics import Colors


class DateTimeWidget(Clock, ExtendedPopupMixin):

    orientation = base.ORIENTATION_BOTH

    def __init__(self, **config):
        Clock.__init__(self, **config)
        ExtendedPopupMixin.__init__(self, **config)
        self.add_defaults(ExtendedPopupMixin.defaults)
        self.add_callbacks({"Button1": self.show_popup})

    def update_popup(self):
        today = datetime.date.today()
        cal = calendar.TextCalendar()
        s = cal.formatmonth(today.year, today.month, w=3).split("\n")
        weekdays, cal = s[1], s[2:]

        if len(cal[-1]) < len(cal[1]):
            cal[-1] += " "*(len(cal[1])-len(cal[-1]))
        for i, week in enumerate(cal):
            cal[i] = re.sub(
                rf"\b({today.day})\b",
                rf'<span color="{Colors.red}"><b>\1</b></span>',
                week
            )

        s = "\n".join(cal)

        month_str = today.strftime("%B")
        today_str = f"{today.day} {month_str}"
        today_day = f"{today.strftime('%A').upper()}"
        self.extended_popup.update_controls(
            todate=today_str,
            today=today_day,
            weekdays=weekdays,
            calendar=s,
        )
