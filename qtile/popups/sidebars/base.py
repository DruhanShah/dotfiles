from qtile_extras.popup import toolkit as popup

from aesthetics import Colors


def block(x, y, w, h):
    return popup.PopupText(
        background=Colors.surface0,
        foreground=Colors.surface0,
        pos_x=x,
        pos_y=y,
        width=w,
        height=h,
    )


class Sidebar():

    def __init__(self):
        self.controls = []
        self.blocks = []

    def create_blocks(self, coords):
        for x, y, w, h in coords:
            self.blocks.append(popup.PopupText(
                background=Colors.surface0,
                foreground=Colors.surface0,
                pos_x=x,
                pos_y=y,
                width=w,
                height=h,
            ))

    def add_control(self, controls):
        if isinstance(controls, list):
            self.controls.extend(controls)
        else:
            self.controls.append(controls)

    def layout(self):
        return popup.PopupAbsoluteLayout(
            width=480,
            height=1080,
            border=Colors.mantle,
            border_width=2,
            background=Colors.mantle,
            close_on_click=False,
            hide_on_timeout=0,
            controls=self.blocks+self.controls,
            keymap={
                "close": ["Escape"],
                "down": ["j"],
                "up": ["k"],
                "left": ["h"],
                "right": ["l"],
                "select": ["Return"],
                "step": ["Tab"],
            },
        )
