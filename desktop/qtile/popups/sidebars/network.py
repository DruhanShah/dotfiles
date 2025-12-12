from .base import Sidebar
from .components import _network as components


class NetworkSidebar(Sidebar):

    BLOCKS = [
        (260, 20, 200, 220),   # Ethernet Status
        (20, 440, 220, 300),   # Available WiFi Networks
        (260, 440, 200, 300),  # Bluetooth Devices
        (20, 760, 440, 140),   # Network Tools
        (20, 920, 440, 140),   # Toggles
    ]

    def __init__(self):
        super().__init__()
        self.create_blocks(self.BLOCKS)
        self.add_control(components)
