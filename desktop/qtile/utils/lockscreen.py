import os
import pam
from libqtile import qtile
from libqtile.widget import Prompt, Clock
from libqtile.images import Img
from qtile_extras.popup import toolkit as popup
from aesthetics import Colors, Fonts, Wallpaper


class LockScreen:

    def __init__(self):
        self.prompt = Prompt(
            prompt="",
            font=Fonts.sans,
            fontsize=14,
            foreground=Colors.text,
            background=Colors.crust,
            padding=10,
            cursor=True,
            cursorblink=True,
            cursorwidth=2,
        )
        self.clock = Clock(
            format="%H:%M:%S",
            font=Fonts.sans + " Medium",
            fontsize=20,
            foreground=Colors.text,
        )
        self.today = Clock(
            format="%A, %d %B",
            font=Fonts.sans,
            fontsize=14,
            foreground=Colors.text,
        )

        self.layout = popup.PopupAbsoluteLayout(
            qtile,
            background=Wallpaper.path,
            border_width=0,
            close_on_click=False,
            hide_on_timeout=0,
            height=1080,
            width=1920,
            controls=[
                popup.PopupWidget(
                    widget=self.prompt,
                    pos_x=960,
                    pos_y=980,
                    width=400,
                    height=50,
                    align="center",
                    valign="center",
                    can_focus=True,
                ),
                popup.PopupWidget(
                    widget=self.clock,
                    pos_x=760,
                    pos_y=80,
                    width=400,
                    height=50,
                    align="center",
                    valign="center",
                    can_focus=False,
                ),
                popup.PopupText(
                    name="notice",
                    pos_x=760,
                    pos_y=200,
                    width=400,
                    height=50,
                    align="center",
                    valign="center",
                    can_focus=False,
                )
            ],
            keymap={
                "close": ["Escape"],
                "left": ["Left", "h"],
                "right": ["Right", "l"],
                "up": ["Up", "k"],
                "down": ["Down", "j"],
                "select": ["Return", "Space"],
                "step": ["Tab"],
            },
        )

    def lock(self, qtile):
        self.layout.show(x=0, y=0)
        self.prompt.start_input(
            prompt="",
            callback=self.verify,
            complete=None,
            allow_empty_input=False,
        )

    def verify(self, password):
        user = os.getenv("USER", "username")
        verified = pam.authenticate(user, password, service="login")

        if verified:
            self.layout.update_controls(notice="")
            self.layout.hide()
        else:
            self.layout.update_controls(notice="Incorrect password!")
