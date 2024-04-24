from libqtile import hook, pangocffi
from libqtile.widget import base

class Mode(base._TextBox):

    defaults = [
        ("default_text", "", "Default text to display"),
        ("format", "{name}", "Display format"),
        ("fmt", "<b>{}</b>", "Display format"),
        ("doom", False, "Doom Emacs mode widget"),
        ("parse_text", None, "Function to parse the window name"),
        ("tiling_mode", "#000000", "Color when in tiling mode"),
        ("floating_mode", "#000000", "Color when in floating mode"),
        ("command_mode", "#000000", "Color when in command mode"),
    ]

    def __init__(self, **config):
        base._TextBox.__init__(self, "", **config)
        self.add_defaults(Mode.defaults)

    def _configure(self, qtile, bar):
        base._TextBox._configure(self, qtile, bar)
        hook.subscribe.changegroup(self.hook_response)
        hook.subscribe.client_new(self.hook_response)
        hook.subscribe.focus_change(self.hook_response)
        hook.subscribe.float_change(self.hook_response)
        hook.subscribe.current_screen_change(self.hook_response)

    def remove_hooks(self):
        hook.unsubscribe.changegroup(self.hook_response)
        hook.unsubscribe.client_new(self.hook_response)
        hook.unsubscribe.focus_change(self.hook_response)
        hook.unsubscribe.float_change(self.hook_response)
        hook.unsubscribe.current_screen_change(self.hook_response)

    def hook_response(self, *args, rofi=False):
        window = self.qtile.current_window

        if not self.doom:
            if rofi:
                self.background = self.command_mode
                final = "   COMMAND  "
            elif window is None:
                self.background = self.tiling_mode
                final = "   TILING   "
            elif window.info()["floating"]:
                self.background = self.floating_mode
                final = "  FLOATING  "
            else:
                self.background = self.tiling_mode
                final = "   TILING   "
        else:
            final = "  "
            if rofi:
                self.foreground = self.command_mode
            elif window is None:
                self.foreground = self.tiling_mode
            elif window.info()["floating"]:
                self.foreground = self.floating_mode
            else:
                self.foreground = self.tiling_mode

        self.draw()

        var = { "name": final }
        unescaped = self.format.format(**var)
        self.update(pangocffi.markup_escape_text(unescaped))

    def finalize(self):
        self.remove_hooks()
        base._TextBox.finalize(self)

