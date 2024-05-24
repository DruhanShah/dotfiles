from libqtile.widget import base


class V_TextBox(base._TextBox):

    def __init__(self, **config):
        base._TextBox.__init__(self, **config)

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
