import QtQuick
import QtQuick.Layouts
import QtQuick.Shapes
import Quickshell
import Quickshell.Networking

import qs.services
import qs.icons
import qs.widgets

Rectangle {
    id: root
    signal clicked()
    width: 32
    height: 42
    color: "transparent"

    onClicked: networkPopup.toggle()

    MouseArea {
        anchors.fill: parent
        cursorShape: Qt.PointingHandCursor
        onClicked: root.clicked()
    }
    
    NetIcon {
        id: icon
        anchors.centerIn: parent
        wifiConnected: true
        wifiStrength: 0.5
        ethConnected: false
    }

    Popup {
        id: networkPopup
        contentWidth: 320
        contentHeight: content.implicitHeight
        anchorItem: root

        ColumnLayout {
            id: content
            width: parent.width
            spacing: 18

            RowLayout {
                Layout.fillWidth: true

                Text {
                    text: tabs.model[tabs.currentIndex]
                    color: Theme.paper
                    font.pixelSize: 18
                    font.bold: true
                    Layout.fillWidth: true
                }

                Toggle {
                    id: toggleBtn
                    visible: tabs.currentIndex === 0
                    enabled: Networking.wifiEnabled
                    onToggled: function(enabled) {
                        Networking.wifiEnabled = enabled
                    }
                }
            }

            Tabs {
                id: tabs
                model: ["Wi-Fi", "Ethernet", "VPN"]
            }

            StackLayout {
                id: panelStack
                currentIndex: tabs.currentIndex
                Layout.fillWidth: true
		Layout.preferredHeight: children[currentIndex] ? children[currentIndex].implicitHeight : 0

                ColumnLayout {
                    Layout.fillWidth: true
                    spacing: 8

                    property var wifiDevice: Networking.devices.values.find(d => d.type === DeviceType.Wifi)

                    Repeater {
                        model: parent.wifiDevice ? parent.wifiDevice.networks : null
                        delegate: NetItem {
                            networkData: modelData
                            isWifi: true
                        }
                    }

                    Text {
                        visible: parent.wifiDevice && parent.wifiDevice.networks.count === 0
                        text: "No known networks"
                        color: Theme.paper
                        opacity: 0.4
                        font.pixelSize: 12
                        Layout.alignment: Qt.AlignHCenter
                    }
                }

                ColumnLayout {
                    Layout.fillWidth: true
                    spacing: 8

                    property var ethDevice: Networking.devices.values.find(d => d.type === DeviceType.Wired)

		    NetItem {
			networkData: parent.ethDevice.network
			isWifi: false
		    }

                    Text {
                        visible: parent.ethDevice && !parent.ethDevice.network
                        text: "No known networks"
                        color: Theme.paper
                        opacity: 0.4
                        font.pixelSize: 12
                        Layout.alignment: Qt.AlignHCenter
                    }
                }

                ColumnLayout {
                    Layout.fillWidth: true
                    spacing: 8

                    Text {
                        text: "No active VPN connections"
                        color: Theme.paper
                        opacity: 0.4
                        font.pixelSize: 12
                        Layout.alignment: Qt.AlignHCenter
                    }
                }
            }
        }
    }
}
