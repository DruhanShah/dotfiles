from libqtile.config import EzClick, EzDrag, EzKey, EzKeyChord
from libqtile.lazy import lazy
from utils import Function
from wacky_ideas import launcher


ROFI_CLIP = "rofi -modi 'clipboard:greenclip print' -show clipboard -run-command '{cmd}'"
ROFI_CALC = "rofi -show calc -modi calc -no-show-match -no-sort"


class Keys:

    mod = "mod4"
    ctrl = "control"
    shift = "shift"
    alt = "mod1"

    def init_keys(self):

        return [
            # Media Keys
            EzKey("<XF86MonBrightnessUp>",
                  lazy.widget["brightwidget"].brightness_up()),
            EzKey("<XF86MonBrightnessDown>",
                  lazy.widget["brightwidget"].brightness_down()),
            EzKey("<XF86AudioRaiseVolume>",
                  lazy.widget["audiowidget"].volume_up()),
            EzKey("<XF86AudioLowerVolume>",
                  lazy.widget["audiowidget"].volume_down()),
            EzKey("<XF86AudioMute>",
                  lazy.widget["audiowidget"].toggle_mute()),
            EzKey("<XF86AudioPlay>",
                  lazy.widget["audiowidget"].play_pause()),
            EzKey("<print>",
                  lazy.spawn("flameshot gui")),

            # Window Management
            EzKey("M-<space>", lazy.layout.next()),
            EzKey("M-h", lazy.layout.left()),
            EzKey("M-j", lazy.layout.down()),
            EzKey("M-k", lazy.layout.up()),
            EzKey("M-l", lazy.layout.right()),
            EzKey("M-S-h", lazy.layout.shuffle_left()),
            EzKey("M-S-j", lazy.layout.shuffle_down()),
            EzKey("M-S-k", lazy.layout.shuffle_up()),
            EzKey("M-S-l", lazy.layout.shuffle_right()),
            EzKey("M-C-S-h", lazy.layout.shrink_left()),
            EzKey("M-C-S-j", lazy.layout.grow_down()),
            EzKey("M-C-S-k", lazy.layout.shrink_up()),
            EzKey("M-C-S-l", lazy.layout.grow_right()),
            EzKey("M-C-f", lazy.layout.maximize()),
            EzKey("M-C-h", lazy.layout.scroll_left()),
            EzKey("M-C-l", lazy.layout.scroll_right()),
            EzKey("M-C-<equal>", lazy.layout.reset_scroll()),
            EzKey("M-S-<space>", lazy.window.toggle_floating()),
            EzKey("M-f", lazy.window.toggle_fullscreen()),

            # Applications and launchers
            EzKey("M-<Return>", lazy.spawn("kitty")),
            EzKey("M-e", lazy.spawn("emacsclient -nca ''")),
            EzKey("M-<Semicolon>", lazy.spawn("rofi -show drun")),

            # Rofi plugins
            EzKeyChord("M-r", [
                EzKey("q", lazy.spawn(ROFI_CALC)),
                EzKey("c", lazy.spawn(ROFI_CLIP)),
            ]),

            # Bar and widgets
            EzKeyChord("M-w", [
                EzKey("1", lazy.widget["diagmasterwidget"].show_popup()),
                EzKey("2", lazy.widget["netmasterwidget"].show_popup()),
                EzKey("9", lazy.widget["calmasterwidget"].show_popup()),
                EzKey("b", lazy.hide_show_bar()),
            ]),

            # Others
            EzKey("M-S-r", lazy.function(launcher.toggle_popup)),

            # Important system utilities
            EzKey("M-<F9>", Function.toggle_trackpad),
            EzKey("C-S-w", lazy.window.kill()),
            EzKey("M-C-r", lazy.reload_config()),
            EzKey("M-C-q", lazy.shutdown()),
        ]

    def init_group_keys(self, groups):

        group_keys = "1234567890"
        keys = [
            EzKey("M-<equal>", lazy.screen.next_group()),
            EzKey("M-<minus>", lazy.screen.prev_group()),
        ]
        for key, group in zip(group_keys, groups):
            name = group.name
            keys.extend([
                EzKey(f"M-{key}", lazy.group[name].toscreen(0, toggle=True)),
                EzKey(f"M-A-{key}", lazy.group[name].toscreen(1, toggle=True)),
                EzKey(f"M-S-{key}", lazy.window.togroup(name)),
            ])

        return keys

    def init_dropdown_keys(self, scratchpads):

        return [
            EzKey(f"M-{key}", lazy.group["scratch"].dropdown_toggle(scratch))
            for scratch, _, key in scratchpads
        ]

    def init_notification_keys(self, notifier):

        return [
            EzKey("M-<grave>", notifier.prev),
            EzKey("M-S-<grave>", notifier.next),
            EzKey("M-C-<grave>", notifier.close),
        ]


class Mouses:

    mod = "mod4"
    ctrl = "control"
    shift = "shift"
    alt = "mod1"

    def init_mouses(self):

        return [
            EzDrag("M-<Button1>", lazy.window.set_position_floating(),
                   start=lazy.window.get_position()),
            EzDrag("M-S-<Button1>", lazy.window.set_size_floating(),
                   start=lazy.window.get_size()),
            EzClick("M-<Button2>", lazy.window.bring_to_front()),
            EzClick("M-<Button4>", lazy.layout.scroll_right(5)),
            EzClick("M-<Button5>", lazy.layout.scroll_left(5)),
        ]
