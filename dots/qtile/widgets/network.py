from libqtile import bar
from qtile_extras.widget import WiFiIcon
from libqtile.log_utils import logger
import os

class NetStatusIcon(WiFiIcon):

    defaults = [
        ("eth_interface", "enp3s0", "Ethernet interface name"),
        ("wifi_interface", "wlan0", "Wifi interface name"),
    ]

    def __init__(self, **config):
        WiFiIcon.__init__(self, **config)
        self.add_defaults(NetStatusIcon.defaults)
        self.is_eth = False
        self.wifi_width = 4

    def poll(self):
        eth_path = f"/sys/class/net/{self.eth_interface}/operstate"
        if os.path.exists(eth_path):
            with open(eth_path, "r") as f:
                if f.read().strip() == "up":
                    self.is_eth = True
                    return "ETH"
        
        self.is_eth = False
        return super().poll()

    def draw(self):
        if not self.is_eth:
            super().draw()
            return

        self.drawer.clear(self.background or self.bar.background)
        
        offset = self.margin_y
        size = self.bar.height - (self.margin_y * 2)
        
        ctx = self.drawer.ctx
        logger.warning(*self.calculate_colors())
        ctx.set_source_rgb(*self.calculate_colors())
        
        ctx.rectangle(self.margin_x + size/4, offset + size/4, size/2, size/2)
        ctx.rectangle(self.margin_x + 3*size/8, offset, size/4, size/4)
        ctx.move_to(self.margin_x + size/2, offset + 3*size/4)
        ctx.line_to(self.margin_x + size/2, offset + size)
        
        ctx.set_line_width(1)
        ctx.stroke()
        
        self.drawer.draw(offsetx=self.offset, offsety=self.offsety, width=self.width)

    def calculate_colors(self):
        return self.drawer.renderer.color_pixel(self.active_colour)
