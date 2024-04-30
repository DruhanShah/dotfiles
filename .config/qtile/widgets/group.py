from libqtile import hook, pangocffi
from libqtile.widget import base


class GroupScreen(base._TextBox):

    defaults = [
        ("default_text", "", "Default text to display"),
        ("mode", "nvim", "Display style"),
        ("format", "{base}", "Display format"),
        ("fmt", "{}", "Display format"),
        ("parse_text", None, "Function to parse the window name"),
        ("tiling_mode", "#000000", "Color when in tiling mode"),
        ("floating_mode", "#000000", "Color when in floating mode"),
        ("command_mode", "#000000", "Color when in command mode"),
    ]

    def __init__(self, **config):
        base._TextBox.__init__(self, "", **config)
        self.add_defaults(GroupScreen.defaults)

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
        if self.mode == "nvim":
            window = self.qtile.current_window
            if rofi:
                self.background = self.command_mode
            elif window is None:
                self.background = self.tiling_mode
            elif window.info()["floating"]:
                self.background = self.floating_mode
            else:
                self.background = self.tiling_mode

        if self.mode == "nvim" or self.more == "doom":
            screen = self.qtile.current_screen
            group = screen.group

            final = f" {group.name}:{str(screen.index)} "

        var = {"base": final}
        unescaped = self.format.format(**var)
        self.draw()
        self.update(pangocffi.markup_escape_text(unescaped))

    def finalize(self):
        self.remove_hooks()
        base._TextBox.finalize(self)
