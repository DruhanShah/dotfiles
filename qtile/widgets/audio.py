from libqtile.widget import base
from qtile_extras.widget import PulseVolumeExtra


class AudioWidget(PulseVolumeExtra):

    orientations = base.ORIENTATION_BOTH

    def __init__(self, **config):
        PulseVolumeExtra.__init__(self, **config)

    def _update_popup(self):
        volume = self.volume / 100
        label = "󰕾" if not self.muted else "󰝟"
        self.extended_popup.update_controls(volume=volume, icon=label)
