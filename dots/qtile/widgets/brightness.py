from libqtile.widget import base
from libqtile.log_utils import logger
from libqtile.command.base import expose_command
from qtile_extras.widget import BrightnessControl
from qtile_extras.widget.mixins import ExtendedPopupMixin

class BrightWidget(BrightnessControl):

    orientations = base.ORIENTATION_BOTH

    def __init__(self, **config):
        BrightnessControl.__init__(self, **config)

    def _update_popup(self):
        brightness = f"{int(self.percentage * 100)}%"
        value = self.percentage
        self.extended_popup.update_controls(
            percent=brightness,
            value=value,
            icon="󰃟",
        )
