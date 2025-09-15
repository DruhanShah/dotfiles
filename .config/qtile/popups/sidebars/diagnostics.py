from .base import Sidebar
from .components import _diagnostics as components


class DiagnosticsSidebar(Sidebar):

    BLOCKS = [
        (20, 20, 220, 235),    # Battery
        (260, 20, 200, 515),   # RAM
        (20, 275, 220, 480),   # CPU
        (260, 555, 200, 200),  # Disk
        (20, 775, 235, 140),   # Fan
        (275, 775, 185, 140),  # Temperature
        (20, 935, 440, 125),   # Powermenu
    ]

    def __init__(self):
        super().__init__()
        self.create_blocks(self.BLOCKS)
        self.add_control(components)
