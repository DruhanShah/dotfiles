import QtQuick
import QtQuick.Layouts
import Quickshell

import qs.modules.common
import qs.modules.icons

Item {
    id: root
    width: 36
    height: 42

    property bool ethConnected: false
    property bool wifiConnected: false
    property real wifiStrength: 0.0

    WifiIcon {
	id: wifiIcon
	visible: root.wifiConnected
	strength: root.wifiStrength
    }

    EthernetIcon {
	id: ethIcon
	visible: root.ethConnected
    }

    NoNetIcon {
	id: noNetIcon
	visible: !root.wifiConnected && !root.ethConnected
    }
}
