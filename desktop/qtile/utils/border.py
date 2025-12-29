"""Screen borders somewhat like EWW or Quickshell"""
from theme import Colours, Theme
from qtile_extras.popup import (
    PopupAbsoluteLayout,
    PopupText,
)
from libqtile import qtile


class Border():
    def __init__(self, border: int = 0):
        self.border = border
        self.w = 1920
        self.h = 1080 - Theme.bar["size"]
        self.controls = [
            PopupText(
                text="",
                width=self.w-2*self.border,
                height=self.h-2*self.border,
                pos_x=self.border,
                pos_y=self.border,
                background=Colours.transparent(),
                highlight_radius=12,
            )
        ]
        self.layout = PopupAbsoluteLayout(
            qtile,
            height=self.h,
            width=self.w,
            background=Colours.bg0,
            border_width=0,
            controls=self.controls,
            close_on_click=False,
            hide_on_timeout=0,
        )

    def show_popup(self):
        self.layout.show(
            relative_to=8,
            relative_to_bar=True,
        )

    def hide_popup(self):
        self.layout.hide()
