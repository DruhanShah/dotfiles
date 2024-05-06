import psutil
from libqtile import widget
from qtile_extras.popup import toolkit as popup
from qtile_extras.widget.mixins import ExtendedPopupMixin
from catppuccin import PALETTE

colorscheme = {}
for color in PALETTE.mocha.colors:
    colorscheme[color.name.upper()] = color.hex


class Diagnostics(widget.Battery, ExtendedPopupMixin):

    def __init__(self, **config):
        widget.Battery.__init__(self, **config)
        ExtendedPopupMixin.__init__(self, **config)
        self.add_defaults(ExtendedPopupMixin.defaults)
        self.add_callbacks({"Button1": self.show_popup})

    def _update_popup(self):
        battery = psutil.sensors_battery()
        memory = psutil.virtual_memory()
        status = "Charging" if battery.power_plugged else "Discharging"
        self.extended_popup.update_controls(
            BatteryStatus=status,
            BatterySlider=battery.percent / 100.0,
            MemorySlider=memory.percent / 100.0,
        )

    def draw(self):
        if not self.can_draw():
            return
        self.drawer.clear(self.background or self.bar.background)

        self.drawer.ctx.save()
        self.drawer.ctx.translate(self.margin_x, 0)

        size = self.bar.width

        self.layout.draw(
            -self._scroll_offset,
            int(size / 2.0 - self.layout.height / 2.0) + 1,
        )
        self.drawer.ctx.restore()

        self.drawer.draw(
            offsetx=self.offsetx, offsety=self.offsety,
            width=self.width, height=self.height
        )


battery = psutil.sensors_battery()

diagnostics_controls = [
    popup.PopupText(
        text="System Diagnostics",
        font="Operator Mono SSm Lig Bold",
        fontsize=25,
        pos_x=0.05,
        pos_y=0.05,
        width=0.9,
        height=0.05,
        h_align="center",
    ),
    popup.PopupText(
        text="Battery",
        font="Operator Mono SSm Lig Bold",
        fontsize=20,
        pos_x=0.05,
        pos_y=0.15,
        width=0.25,
        height=0.05,
        h_align="left",
    ),
    popup.PopupWidget(
        widget=widget.Battery(
            format="{percent:2.0%}",
            show_short_text=False,
            background=colorscheme["MANTLE"],
            foreground=colorscheme["TEXT"],
            low_foreground=colorscheme["TEXT"],
            font="Operator Mono SSm Lig",
            fontsize=13,
        ),
        pos_x=0.12,
        pos_y=0.195,
        width=0.1,
        height=0.05,
    ),
    popup.PopupSlider(
        name="BatterySlider",
        value=battery.percent / 100.0,
        bar_size=10,
        marker_size=0,
        colour_below=colorscheme["GREEN"],
        colour_above=colorscheme["SURFACE 0"],
        bar_border_colour=colorscheme["TEXT"],
        pos_x=0.21,
        pos_y=0.2,
        height=0.05,
        width=0.74,
    ),
    popup.PopupText(
        name="BatteryStatus",
        text="Charging" if battery.power_plugged else "Discharging",
        font="Operator Mono SSm Lig",
        fontsize=13,
        pos_x=0.22,
        pos_y=0.25,
        width=0.25,
        height=0.05,
        h_align="left",
    ),

    popup.PopupText(
        text="Memory",
        font="Operator Mono SSm Lig Bold",
        fontsize=20,
        pos_x=0.05,
        pos_y=0.35,
        width=0.25,
        height=0.05,
        h_align="left",
    ),
    popup.PopupWidget(
        widget=widget.Memory(
            format="{MemUsed: .0f}M",
            background=colorscheme["MANTLE"],
            foreground=colorscheme["TEXT"],
            font="Operator Mono SSm Lig",
            fontsize=13,
        ),
        pos_x=0.08,
        pos_y=0.395,
        width=0.15,
        height=0.05,
    ),
    popup.PopupSlider(
        name="MemorySlider",
        value=0.5,
        bar_size=10,
        marker_size=0,
        colour_below=colorscheme["GREEN"],
        colour_above=colorscheme["SURFACE 0"],
        bar_border_colour=colorscheme["TEXT"],
        pos_x=0.21,
        pos_y=0.4,
        height=0.05,
        width=0.74,
    ),
]

diagnostics_layout = popup.PopupRelativeLayout(
    width=400,
    height=600,
    controls=diagnostics_controls,
    background=colorscheme["MANTLE"],
)

diagnostics = Diagnostics(
    popup_layout=diagnostics_layout,
    popup_hide_timeout=3,
    popup_show_args={
        "relative_to": 1,
        "relative_to_bar": True,
        "x": 2,
        "y": 8,
    },
    format="{char}",
    charge_char="",
    discharge_char="",
    full_char="",
    unknown_char="",
    show_short_text=False,
    foreground=colorscheme["YELLOW"],
    low_foreground=colorscheme["RED"],
    low_percentage=0.2,
    fontsize=23,
    padding=15,
    margin_x=11,
)
