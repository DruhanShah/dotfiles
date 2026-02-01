from pathlib import Path
from libqtile.config import EzClick, EzDrag, EzKey, EzKeyChord
from libqtile.lazy import lazy
# from utils import Function
from utils import launcher

BROWSER = "zen"
EDITOR = "emacsclient -nca ''"
TERMINAL = "kitty"
LAUNCHER = "vicinae toggle"
SCREENSHOT = "grim -g \"$(slurp)\" - | wl-copy"


class Keys:

    def init_keys():
        return [
            # Media Keys
            EzKey("<XF86MonBrightnessUp>", lazy.widget["brightwidget"].brightness_up()),
            EzKey("<XF86MonBrightnessDown>", lazy.widget["brightwidget"].brightness_down()),
            EzKey("<XF86AudioRaiseVolume>", lazy.widget["audiowidget"].volume_up()),
            EzKey("<XF86AudioLowerVolume>", lazy.widget["audiowidget"].volume_down()),
            EzKey("<XF86AudioMute>", lazy.widget["audiowidget"].toggle_mute()),
            EzKey("<XF86AudioPlay>", lazy.widget["audiowidget"].play_pause()),
            EzKey("<print>", lazy.spawn(SCREENSHOT, shell=True)),

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
            EzKey("M-C-h", lazy.layout.shrink_left()),
            EzKey("M-C-j", lazy.layout.grow_down()),
            EzKey("M-C-k", lazy.layout.shrink_up()),
            EzKey("M-C-l", lazy.layout.grow_right()),
            EzKey("M-C-f", lazy.layout.maximize()),
            EzKey("M-S-<space>", lazy.window.toggle_floating()),
            EzKey("M-f", lazy.window.toggle_fullscreen()),

            # Applications and launchers
            EzKey("M-b", lazy.spawn(BROWSER)),
            EzKey("M-<Return>", lazy.spawn(TERMINAL)),
            EzKey("M-e", lazy.spawn(EDITOR)),
            EzKey("M-<Semicolon>", lazy.spawn(LAUNCHER)),

            # Bar and widgets
            EzKeyChord("M-w", [
                EzKey("1", lazy.widget["powerwidget"].show_popup()),
                EzKey("7", lazy.widget["diagnosticswidget"].show_popup()),
                EzKey("8", lazy.widget["networkwidget"].show_popup()),
                EzKey("9", lazy.widget["layoutwidget"].show_popup()),
                EzKey("0", lazy.widget["calendarwidget"].show_popup()),
                EzKey("b", lazy.hide_show_bar()),
            ]),

            # Others
            EzKey("M-S-r", lazy.function(launcher.toggle_popup)),

            # Important system utilities
            EzKey("M-q", lazy.window.kill()),
            EzKey("M-C-r", lazy.reload_config()),
            EzKey("M-C-q", lazy.shutdown()),
        ]

    def init_group_keys(groups):
        group_keys = "1234567890"
        keys = [
            EzKey("M-<equal>", lazy.screen.next_group()),
            EzKey("M-<minus>", lazy.screen.prev_group()),
        ]

        # This conveniently skips the scratchpad at the end
        # but only if there are exactly 10 groups
        for key, group in zip(group_keys, groups):
            name = group.name
            keys.extend([
                EzKey(f"M-{key}", lazy.group[name].toscreen(0, toggle=True)),
                EzKey(f"M-S-{key}", lazy.window.togroup(name)),
            ])

        return keys

    def init_dropdown_keys(scratchpads):
        return [
            EzKey(f"M-{key}", lazy.group["scratch"].dropdown_toggle(scratch))
            for scratch, _, key in scratchpads
        ]

    def init_notification_keys(notifier):

        return [
            EzKey("M-<grave>", notifier.prev),
            EzKey("M-S-<grave>", notifier.next),
            EzKey("M-C-<grave>", notifier.close),
        ]


class Mouses:

    def init_mouses():
        return [
            EzDrag("M-<Button1>", lazy.window.set_position_floating(),
                   start=lazy.window.get_position()),
            EzDrag("M-S-<Button1>", lazy.window.set_size_floating(),
                   start=lazy.window.get_size()),
            EzClick("M-<Button2>", lazy.window.bring_to_front()),
            EzClick("M-<Button4>", lazy.layout.scroll_right(5)),
            EzClick("M-<Button5>", lazy.layout.scroll_left(5)),
        ]
