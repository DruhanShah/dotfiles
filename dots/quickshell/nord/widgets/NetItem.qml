import QtQuick
import QtQuick.Layouts
import Quickshell.Networking

import qs.modules.common
import qs.modules.icons
import qs.widgets

RowLayout {
    id: root
    
    required property var networkData // Accepts either WifiNetwork or Network
    property bool isWifi: false 
    
    Layout.fillWidth: true
    spacing: 12

    NetIcon {
        wifiConnected: root.isWifi
        ethConnected: !root.isWifi
        wifiStrength: root.isWifi ? root.networkData.signalStrength : 0
        width: 32
        height: 32
    }

    Text {
        text: root.networkData.name
        color: root.networkData.connected ? Theme.paper : Theme.base300
        font.pixelSize: 13
        elide: Text.ElideRight
        Layout.fillWidth: true
    }

    Button {
        active: root.networkData.state === ConnectionState.Connected || root.networkData.state === ConnectionState.Disconnected
        text: {
            if (root.networkData.state === ConnectionState.Connected)
                return "Disconnect"
            else if (root.networkData.state === ConnectionState.Disconnected)
                return "Connect"
            else if (root.networkData.state === ConnectionState.Connecting)
                return "Connecting…"
            return ""
        }

        MouseArea {
            anchors.fill: parent
            cursorShape: Qt.PointingHandCursor
            onClicked: {
                if (root.networkData.connected) {
                    root.networkData.disconnect()
                } else {
                    root.networkData.connect()
                }
            }
        }
    }
}
