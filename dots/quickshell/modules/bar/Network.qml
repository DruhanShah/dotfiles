import QtQuick
import QtQuick.Layouts
import QtQuick.Shapes
import Quickshell
import Quickshell.Networking

import qs.modules.common
import qs.modules.icons
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
		visible: wifiTab.active

		Text {
                    text: "WiFi"
                    color: Theme.paper
                    font.pixelSize: 18
                    font.bold: true
                    Layout.fillWidth: true
		}

		Toggle {
		    id: toggleBtn
		    enabled: Networking.wifiEnabled
		    onToggled: function(enabled) {
			Networking.wifiEnabled = enabled
		    }
		}
            }

            RowLayout {
		Layout.fillWidth: true
		visible: ethTab.active

		Text {
                    text: "Ethernet"
                    color: Theme.paper
                    font.pixelSize: 18
                    font.bold: true
                    Layout.fillWidth: true
		}
            }

            RowLayout {
		Layout.fillWidth: true
		visible: vpnTab.active

		Text {
                    text: "VPN"
                    color: Theme.paper
                    font.pixelSize: 18
                    font.bold: true
                    Layout.fillWidth: true
		}
            }

	    Tabs {
		id: tabs
		activeTab: wifiTab
		content: [
		    Tab {
			id: wifiTab
			parentBar: tabs
			title: "Wi-Fi"
			isFirst: true
		    },
		    Tab {
			id: ethTab
			parentBar: tabs
			title: "Ethernet"
		    },
		    Tab {
			id: vpnTab
			parentBar: tabs
			title: "VPN"
			isLast: true
		    }
		]
	    }

	    ColumnLayout {
		id: wifiPanel
		visible: wifiTab.active
		Layout.fillWidth: true
		spacing: 8

		property NetworkDevice wifiDevice: (
		    Networking.devices.values[0].type == DeviceType.Wifi
			? Networking.devices.values[0]
			: Networking.devices.values[1]
		)

		Repeater {
		    model: wifiPanel.wifiDevice ? wifiPanel.wifiDevice.networks : null

		    RowLayout {
			required property WifiNetwork modelData
			Layout.fillWidth: true
			spacing: 12

			NetIcon {
			    id: icon
			    wifiConnected: true
			    wifiStrength: modelData.signalStrength
			    width: 32
			    height: 32
			}

			Text {
			    text: modelData.name
			    color: modelData.connected ? Theme.paper : Theme.base300
			    font.pixelSize: 13
			    elide: Text.ElideRight
			    Layout.fillWidth: true
			}

			Rectangle {
			    implicitWidth: connectLabel.implicitWidth + 16
			    implicitHeight: 22
			    radius: 8
			    color: "transparent"
			    border.width: 1
			    border.color: (modelData.state == ConnectionState.Connected
					   || modelData.state == ConnectionState.Disconnected
					   ? Theme.base300 : Theme.base700)

			    Text {
				id: connectLabel
				anchors.centerIn: parent
				text: {
				    if (modelData.state === ConnectionState.Connected)
					return "Disconnect"
				    else if (modelData.state === ConnectionState.Disconnected)
					return "Connect"
				    else if (modelData.state === ConnectionState.Connecting)
					return "Connecting…"
				}
				color: Theme.paper
				font.pixelSize: 11
			    }

			    MouseArea {
				anchors.fill: parent
				cursorShape: Qt.PointingHandCursor
				onClicked: {
				    if (modelData.connected) {
					modelData.disconnect()
				    } else {
					modelData.connect()
				    }
				}
			    }
			}
		    }
		}
	    }

		Text {
		    visible: wifiPanel.wifiDevice
			&& wifiPanel.wifiDevice.networks.count === 0
		    text: "No known networks"
		    color: Theme.paper
		    opacity: 0.4
		    font.pixelSize: 12
		    Layout.alignment: Qt.AlignHCenter
		}

	}
    }
}
