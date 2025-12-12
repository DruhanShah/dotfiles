from libqtile.backend.wayland import InputConfig

wl_input_rules = {
    "type:keyboard": InputConfig(kb_options="ctrl:nocaps,compose:ralt"),
    "type:mouse": InputConfig(natural_scroll=True),
    "type:touchpad": InputConfig(scroll_method="two_finger")
}
