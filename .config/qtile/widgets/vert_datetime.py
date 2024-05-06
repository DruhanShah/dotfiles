from libqtile import widget
from libqtile.widget import base
from qtile_extras.popup import toolkit as popup
from qtile_extras.widget.mixins import ExtendedPopupMixin
from catppuccin import PALETTE

colorscheme = {}
for color in PALETTE.mocha.colors:
    colorscheme[color.name.upper()] = color.hex


class DateTime(widget.Clock, ExtendedPopupMixin):

    orientation = base.ORIENTATION_BOTH

    def __init__(self, **config):
        widget.Clock.__init__(self, **config)
        ExtendedPopupMixin.__init__(self, **config)
        self.add_defaults(ExtendedPopupMixin.defaults)
        self.add_callbacks({"Button1": self.show_popup})

    def _update_popup(self):
        self.extended_popup.update_controls()

    def draw(self):
        if not self.can_draw():
            return
        self.drawer.clear(self.background or self.bar.background)

        self.drawer.ctx.save()
        self.drawer.ctx.translate(self.margin_x, 0)

        size = self.bar.width

        self.layout.draw(
            -self._scroll_offset,
            int(size / 2 - self.layout.height / 2),
        )
        self.drawer.ctx.restore()

        self.drawer.draw(
            offsetx=self.offsetx, offsety=self.offsety,
            width=self.width, height=self.height
        )


datetime_controls = [

]

datetime_layout = popup.PopupRelativeLayout(
    width=400,
    height=600,
    controls=datetime_controls,
    background=colorscheme["MANTLE"],
)

datetime = DateTime(
    popup_layout=datetime_layout,
    popup_hide_timeout=3,
    popup_show_args={
        "relative_to": 7,
        "relative_to_bar": True,
        "x": 4,
        "y": -8,
    },
    format="\n%H\n%M\n%S",
    foreground=colorscheme["LAVENDER"],
    font="Operator Mono SSm Lig Bold",
    fontsize=20,
    padding=35,
    margin_x=10,
)
