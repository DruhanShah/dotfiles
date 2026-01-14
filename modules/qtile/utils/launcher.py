from libqtile import bar
from libqtile.widget import Prompt
from libqtile.log_utils import logger
from qtile_extras.popup.toolkit import (
    PopupRelativeLayout,
    _PopupWidget,
    PopupWidget,
    ControlBar,
)


class ModdedControlBar(ControlBar):
    """
    A modified ControlBar that can handle key events.
    """
    def __init__(self, control):
        super().__init__(control)
        self.qtile = control.qtile
        self._has_keyboard = None
        self._saved_focus = None

    def widget_grab_keyboard(self, control) -> None:
        """
        A PopupWidget can call this method to grab the keyboard focus
        and receive keyboard messages. When done,
        widget_ungrab_keyboard() must be called.
        """
        assert self.qtile is not None

        self._has_keyboard = control
        self._saved_focus = self.qtile.current_window
        if self.window:
            self.window.focus(False)

    def widget_ungrab_keyboard(self) -> None:
        """
        Removes keyboard focus from the PopupWidget.
        """
        if self._saved_focus is not None:
            self._saved_focus.focus(False)
        self._has_keyboard = None

    def draw(self):
        if self.control.drawer and self.control.drawer.ctx:
            self.control.draw()


class ModdedPopupWidget(PopupWidget):
    """
    A modified PopupWidget that can handle key events.
    """
    def __init__(self, **config):
        super().__init__(**config)

    def _configure(self, qtile, container):
        _PopupWidget._configure(self, qtile, container)
        if self.widget is None:
            logger.warning("PopupWidget control created with no widget.")
            return

        # Force the widget's length to be the same as the control
        self.widget.length_type = bar.STATIC
        self.widget.length = self.width if self.horizontal else self.height

        # Configure the widget
        self.widget._configure(qtile, ModdedControlBar(self))
        self.widget.configured = True

        # Set the correct offsets for positioning the widget in the popup window
        self.widget.offsetx = self.offsetx
        self.widget.offsety = self.offsety

    def cmd_handle_key_event(self, event):
        if self.widget:
            self.widget.key_press(event)


class Launcher:
    """
    A Rofi-like launcher with a popup window.
    """
    def __init__(self, qtile, max_completions=10):
        self.qtile = qtile
        self.max_completions = max_completions
        self.popup = None
        self.visible = False

    def _create_popup(self):
        self.prompt_widget = Prompt()
        self.popup = PopupRelativeLayout(
            self.qtile,
            width=500,
            height=300,
            controls=[
                ModdedPopupWidget(
                    widget=self.prompt_widget,
                    pos_x=0.05,
                    pos_y=0.1,
                    width=0.9,
                    height=0.2,
                    can_focus=True,
                ),
            ],
            background="eff1f5",
            close_on_click=False,
        )

    def toggle_popup(self, qtile):
        if self.popup is None or self.popup._killed:
            self._create_popup()
            self.popup.show(x=0, y=0, relative_to=5)
            logger.info(self.prompt_widget.bar.control.drawer.ctx)
            self.prompt_widget.start_input(prompt="Run", callback=self._on_input)
        else:
            self.popup.kill()

    def _on_input(self, text):
        logger.info(f"Input received: {text}")
