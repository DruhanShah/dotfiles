import os
from copy import deepcopy
from libqtile.widget import base
from qtile_extras.popup import toolkit as popup
from qtile_extras.widget.mixins import ExtendedPopupMixin
from gi.repository import Playerctl
from urllib.parse import urlparse
from catppuccin import PALETTE

colorscheme = {}
for color in PALETTE.mocha.colors:
    colorscheme[color.name.upper()] = color.hex[1:]

home = os.path.expanduser("~")

not_playing_controls = [
    popup.PopupText(
        text="Spotify is not playing",
        font="Operator Mono SSm Lig",
        foreground=colorscheme["TEXT"],
        fontsize=16,
        pos_x=0.05,
        pos_y=0.05,
        width=0.9,
        height=0.9,
        h_align="center",
    ),
]
not_playing = popup.PopupRelativeLayout(
    width=300,
    height=50,
    controls=not_playing_controls,
    background=colorscheme["MANTLE"],
)


playing_controls = [
    popup.PopupImage(
        name="artwork",
        pos_x=0.05,
        pos_y=0.05,
        width=0.3,
        height=0.7,
    ),
    popup.PopupText(
        name="title",
        font="Operator Mono SSm Lig Bold",
        fontsize=20,
        foreground=colorscheme["TEXT"],
        pos_x=0.4,
        pos_y=0.25,
        width=0.6,
        height=0.2,
        h_align="left",
    ),
    popup.PopupText(
        name="artist",
        font="Operator Mono SSm Lig",
        fontsize=15,
        foreground=colorscheme["OVERLAY 2"],
        pos_x=0.4,
        pos_y=0.4,
        width=0.4,
        height=0.2,
        h_align="left",
    ),
    popup.PopupSlider(
        name="progress",
        bar_size=10,
        marker_size=0,
        colour_below=colorscheme["GREEN"],
        colour_above=colorscheme["SURFACE 0"],
        bar_border_colour=colorscheme["TEXT"],
        pos_y=0.8,
        pos_x=0.05,
        height=0.05,
        width=0.9,
    ),
]
playing = popup.PopupRelativeLayout(
    width=400,
    height=200,
    controls=playing_controls,
    background=colorscheme["MANTLE"],
)


class Spotify(base._TextBox, ExtendedPopupMixin):

    def __init__(self, **config):
        base._TextBox.__init__(self, **config)
        ExtendedPopupMixin.__init__(self, **config)
        self.add_defaults(ExtendedPopupMixin.defaults)
        self.add_callbacks({"Button1": self.show_popup})
        self.not_playing = not_playing
        self.playing = playing

    def _update_popup(self):
        manager = Playerctl.PlayerManager()
        names = manager.props.player_names
        if len(names) <= 1:
            self.extended_popup = deepcopy(self.not_playing)
            self.extended_popup._configure(self.qtile)
        else:
            name = names[1]
            player = Playerctl.Player.new_from_name(name)
            metadata = player.props.metadata
            title = metadata["xesam:title"]
            artist = metadata["xesam:artist"][0]
            parse = urlparse(metadata["mpris:artUrl"])
            artUrl = f"{parse.scheme}://{parse.netloc}{parse.path}"

            position = player.props.position
            length = metadata["mpris:length"]
            value = position / length

            self.extended_popup = deepcopy(self.playing)
            self.extended_popup._configure(self.qtile)
            self.extended_popup.update_controls(
                artwork=artUrl,
                title=title,
                artist=artist,
                progress=value,
            )

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


spotify = Spotify(
    popup_layout=not_playing,
    popup_hide_timeout=3,
    popup_show_args={
        "relative_to": 1,
        "relative_to_bar": True,
        "x": 2,
        "y": 48,
    },
    text="",
    foreground=colorscheme["GREEN"],
    fontsize=27,
    padding=15,
    margin_x=11,
)
