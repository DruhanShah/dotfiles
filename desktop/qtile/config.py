from screens import Screens
from layouts import Layouts
from groups import Groups
from bindings import Keys, Mouses
from theme import Theme
from hooks import autostart, bar_class


scratchpads = [
    # ("Browser", "zen-browser", "b"),
]
special_groups = [
    # [{"wm_class": "zen"}],  # Browser
]

screens = Screens.init_screens(1)
notifications = Screens.init_notifs()

layouts = [Layouts.scrolling]
floating_layout = Layouts.floating

groups = Groups.init_groups(10, special_groups)
scratchpad = Groups.init_scratchpads(scratchpads)
groups.append(scratchpad)

mouse = Mouses.init_mouses()
keys = Keys.init_keys()
keys += Keys.init_group_keys(groups)
keys += Keys.init_dropdown_keys(scratchpads)
keys += Keys.init_notification_keys(notifications)


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
