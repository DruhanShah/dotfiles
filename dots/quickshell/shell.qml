import QtQuick
import QtQuick.Layouts
import Quickshell
import Quickshell.Wayland
import "./modules/notifs"
import "./modules/bar"
import "./modules/osd"
import "./services"

ShellRoot{
    id: root

    Bar {}
    VolumeOSD {}
    BrightnessOSD {}
    NotificationPanel {}
}
