from libqtile import hook, pangocffi
from libqtile.widget import base


class Window(base._TextBox):

    defaults = [
        ("default_text", "", "Default text to display"),
        ("format", "{name}", "Display format"),
        ("parse_text", None, "Function to parse the window name"),
    ]

    def __init__(self, **config):
        base._TextBox.__init__(self, "", **config)
        self.add_defaults(Window.defaults)

    def _configure(self, qtile, bar):
        base._TextBox._configure(self, qtile, bar)
        hook.subscribe.client_name_updated(self.hook_response)
        hook.subscribe.focus_change(self.hook_response)
        hook.subscribe.float_change(self.hook_response)
        hook.subscribe.current_screen_change(self.hook_response)

    def remove_hooks(self):
        hook.unsubscribe.client_name_updated(self.hook_response)
        hook.unsubscribe.focus_change(self.hook_response)
        hook.unsubscribe.float_change(self.hook_response)
        hook.unsubscribe.current_screen_change(self.hook_response)

    def hook_response(self, *args):
        window = self.qtile.current_screen.group.current_window
        if window:
            wm_class = window.get_wm_class()[0]
            if callable(self.parse_text):
                wm_class = self.parse_text(wm_class)
            final = wm_class
        else:
            final = "[No name]"

        var = {"name": final}
        unescaped = self.format.format(**var)
        self.update(pangocffi.markup_escape_text(unescaped))

    def finalize(self):
        self.remove_hooks()
        base._TextBox.finalize(self)
