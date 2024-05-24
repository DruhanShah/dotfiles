from libqtile import widget
from libqtile.widget import base


class V_Battery(widget.Battery):

    orientation = base.ORIENTATION_BOTH

    def __init__(self, **config):
        widget.Battery.__init__(self, **config)

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
