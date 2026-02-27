import QtQuick
import QtQuick.Layouts
import Quickshell
import Quickshell.Wayland
import "./modules/bar/"
import "./modules/osd"
import "./services"

ShellRoot{
    id: root

    LazyLoader{
	active: true
	component: Bar {}
    }
    VolumeOSD {}
    BrightnessOSD {}
}
