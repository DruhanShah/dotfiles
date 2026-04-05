import Quickshell

import qs.modules.notifs
import qs.modules.bar
import qs.modules.osd
import qs.services

ShellRoot {
    id: root
    
    Bar {}
    VolumeOSD {}
    BrightnessOSD {}
    NotificationPanel {}
}
