from qtile_extras.layout.decorations.borders import _BorderStyle
import cairocffi
import math
from libqtile.utils import rgb

class RoundedCorners(_BorderStyle):
    """
    A simple decoration to draw rounded corners.

    .. note::

        This border will not render well on x11 backends as it does not implement transparency.
        As a result, the border will display with black artefacts in the corners.

    """

    needs_surface = True

    defaults = [
        ("colour", "00f", "Border colour"),
        ("radius", 2, "Border radius"),
    ]

    def __init__(self, **config):
        _BorderStyle.__init__(self, **config)
        self.add_defaults(RoundedCorners.defaults)

    def draw(self, surface, bw, x, y, width, height):
        with cairocffi.Context(surface) as ctx:
            ctx.translate(x, y)

            radius = self.radius
            degrees = math.pi / 180.0

            ctx.new_sub_path()
            ctx.arc(width - bw - radius, bw + radius, radius, -90 * degrees, 0 * degrees)
            ctx.arc(width - bw - radius, height - bw - radius, radius, 0 * degrees, 90 * degrees)
            ctx.arc(bw + radius, height - bw - radius, radius, 90 * degrees, 180 * degrees)
            ctx.arc(bw + radius, bw + radius, radius, 180 * degrees, 270 * degrees)
            ctx.close_path()

            ctx.set_line_width(bw)
            ctx.set_source_rgba(*rgb(self.colour))
            ctx.stroke()
