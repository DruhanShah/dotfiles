import QtQuick
import QtQuick.Layouts
import Quickshell

import qs.modules.common
import qs.modules.icons

Item {
    id: root
    width: 36
    height: 42

    property string deviceName: ""

    HeadphonesIcon {
	id: headphonesIcon
	visible: root.deviceName == "soundcore V20i"
    }

    /* MonitorIcon { */
    /* 	id: monitorIcon */
    /* 	visible: root.deviceName == "" */
    /* } */

    /* MouseIcon { */
    /* 	id: mouseIcon */
    /* 	visible: root.deviceName == "" */
    /* } */

    /* KeyboardIcon { */
    /* 	id: keyboardIcon */
    /* 	visible: root.deviceName == "" */
    /* } */

    /* SpeakerIcon { */
    /* 	id: speakerIcon */
    /* 	visible: root.deviceName == "" */
    /* } */
}
