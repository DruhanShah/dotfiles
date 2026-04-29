import Quickshell
import Quickshell.Wayland

import qs.modules.notifs
import qs.modules.bar
import qs.modules.osd
import qs.modules.launcher
import qs.services

ShellRoot {
    id: root
    
    Bar {}
    VolumeOSD {}
    BrightnessOSD {}
    NotificationPanel {}
    Launcher {}
}
