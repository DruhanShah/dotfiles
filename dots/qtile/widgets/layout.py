from libqtile.widget import CurrentLayout
from qtile_extras.widget.mixins import ExtendedPopupMixin


class LayoutWidget(CurrentLayout, ExtendedPopupMixin):

    def __init__(self, **config):
        CurrentLayout.__init__(self, **config)
        ExtendedPopupMixin.__init__(self, **config)
        self.add_defaults(ExtendedPopupMixin.defaults)
        self.mouse_callbacks = {"Button1": self.show_popup}

    def update_popup(self):
        self.extended_popup.update_controls()
