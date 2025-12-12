from screens import Screens
from layouts import Layouts
from groups import Groups
from bindings import Keys, Mouses
from theme import Theme
from hooks import autostart, bar_class

key_obj = Keys()
mouse_obj = Mouses()
screen_obj = Screens()
groups_obj = Groups()

scratchpads = [
    # ("Browser", "zen-browser", "b"),
]
special_groups = [
    # [{"wm_class": "zen"}],  # Browser
]

screens = screen_obj.screen_list(1)
notifications = screen_obj.notifications()

layouts = [Layouts.scrolling]
floating_layout = Layouts.floating

groups = groups_obj.init_groups(10, special_groups)
scratchpad = groups_obj.init_scratchpads(scratchpads)
groups.append(scratchpad)

mouse = mouse_obj.init_mouses()
keys = key_obj.init_keys()
keys += key_obj.init_group_keys(groups)
keys += key_obj.init_dropdown_keys(scratchpads)
keys += key_obj.init_notification_keys(notifications)

widget_defaults = Theme.wgt_defaults
extension_defaults = Theme.wgt_defaults


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
