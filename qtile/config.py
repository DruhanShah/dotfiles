from screens import Screens
from widgets import WidgetAesthetics
from layouts import Layouts
from groups import Groups
from bindings import Keys, Mouses
from hooks import autostart

widget_defaults = WidgetAesthetics.widget_defaults
extension_defaults = WidgetAesthetics.extension_defaults

key_obj = Keys()
mouse_obj = Mouses()
screen_obj = Screens()
groups_obj = Groups()

scratch_names = ["Browser"]
scratch_commands = ["zen-browser"]
scratch_keys = ["b"]


screens = screen_obj.init_single_screen_left()

layouts = [Layouts.scrolling]
floating_layout = Layouts.floating

groups = groups_obj.init_groups(10)
scratchpad = groups_obj.init_scratchpads(scratch_names, scratch_commands)
groups.append(scratchpad)

mouse = mouse_obj.init_mouses()
keys = key_obj.init_keys()
keys += key_obj.init_group_keys(groups)
keys += key_obj.init_dropdown_keys(scratch_names, scratch_keys)


auto_fullscreen = True
focus_on_window_activation = "smart"
reconfigure_screens = True
auto_minimize = False
dgroups_key_binder = None
dgroups_app_rules = []
follow_mouse_focus = False
bring_front_click = True
cursor_warp = False
wmname = "QTile"
