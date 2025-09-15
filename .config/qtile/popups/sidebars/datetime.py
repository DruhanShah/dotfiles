from .base import Sidebar
from .components import _datetime as components


class DateTimeSidebar(Sidebar):

    BLOCKS = [
        (20, 20, 440, 200),    # Today
        (20, 240, 440, 480),   # Calendar
        (20, 740, 300, 320),   # Music
        (340, 740, 120, 320),  # Volume and brightness
    ]

    def __init__(self):
        super().__init__()
        self.create_blocks(self.BLOCKS)
        self.add_control(components)
