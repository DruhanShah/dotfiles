from libqtile import widget
from libqtile.widget import base


class V_Battery(widget.Battery):

    orientation = base.ORIENTATION_BOTH

    def __init__(self, **config):
        widget.Battery.__init__(self, **config)

    def calculate_length(self):
        if self.text:
            return min(self.layout.height, self.bar.height) + self.actual_padding * 2
        else:
            return 0

    def draw(self):
        if not self.can_draw():
            return
        self.drawer.clear(self.background or self.bar.background)

        self.drawer.ctx.save()
        size = self.bar.width

        self.layout.draw(
            (size // 2) - (self.layout.width // 2),
            0,
        )
        self.drawer.ctx.restore()
        self.drawer.draw(
            offsetx=self.offsetx, offsety=self.offsety, width=self.width, height=self.height
        )
