import QtQuick
import QtQuick.Layouts
import QtQuick.Shapes
import Quickshell
import Quickshell.Bluetooth

import qs.modules.common
import qs.modules.icons
import qs.widgets


Rectangle {
    id: root

    width: icon.implicitWidth
    height: 42
    color: "transparent"

    signal clicked()
    onClicked: bluetoothPopup.toggle()

    readonly property bool enabled: (Bluetooth.defaultAdapter
				     ? Bluetooth.defaultAdapter.enabled
                                     : false)

    BluetoothIcon {
	id: icon
	enabled: root.enabled
    }

    MouseArea {
        anchors.fill: root
        cursorShape: Qt.PointingHandCursor
        onClicked: root.clicked()
    }

    Popup {
	id: bluetoothPopup
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
                    text: "Bluetooth"
                    color: Theme.paper
                    font.pixelSize: 18
                    font.bold: true
                    Layout.fillWidth: true
		}

		Toggle {
		    id: toggleBtn
		    enabled: Bluetooth.defaultAdapter ? Bluetooth.defaultAdapter.enabled : false
		    onToggled: function(enabled) {
			if (Bluetooth.defaultAdapter) {
			    Bluetooth.defaultAdapter.enabled = enabled
			}
		    }
		}
            }

            Rectangle {
		Layout.fillWidth: true
		implicitHeight: 0
		color: Theme.base600
		visible: Bluetooth.defaultAdapter && Bluetooth.defaultAdapter.devices
            }

            ColumnLayout {
		visible: Bluetooth.defaultAdapter && Bluetooth.defaultAdapter.enabled
		Layout.fillWidth: true
		spacing: 8

		Repeater {
                    model: Bluetooth.defaultAdapter ? Bluetooth.defaultAdapter.devices : null

                    RowLayout {
			required property BluetoothDevice modelData
			Layout.fillWidth: true
			spacing: 12

			BluetoothDeviceIcon {
			    deviceName: modelData.name
			    width: 32
			    height: 32
			}

			Text {
                            text: modelData.name || modelData.deviceName
                            color: modelData.connected ? Theme.paper : Theme.base300
                            font.pixelSize: 13
                            elide: Text.ElideRight
                            Layout.fillWidth: true
			}

			Text {
                            visible: modelData.batteryAvailable && modelData.connected
                            text: Math.round(modelData.battery * 100) + "%"
                            color: modelData.battery < 0.2
				? Theme.redBright : Theme.base300
                            font.pixelSize: 11
			}

			Rectangle {
                            visible: !modelData.pairing
                            implicitWidth: connectLabel.implicitWidth + 16
                            implicitHeight: 22
                            radius: 8
                            color: "transparent"
			    border.width: 1
			    border.color: (modelData.state !== BluetoothDevice.Connecting
					   ? Theme.base300 : Theme.base700)

                            Text {
				id: connectLabel
				anchors.centerIn: parent
				text: {
				    if (modelData.state === BluetoothDevice.Connected)
					return "Disconnect"
				    else if (modelData.state === BluetoothDevice.Disconnected)
					return "Connect"
				    else if (modelData.state === BluetoothDevice.Connecting)
					return "Connecting…"
				}
				color: Theme.paper
				font.pixelSize: 11
                            }

                            MouseArea {
				anchors.fill: parent
				cursorShape: Qt.PointingHandCursor
				onClicked: {
                                    modelData.connected = !modelData.connected
				}
                            }
			}
                    }
		}
            }

            Text {
		visible: Bluetooth.defaultAdapter
                    && Bluetooth.defaultAdapter.enabled
                    && Bluetooth.defaultAdapter.devices.count === 0
		text: "No paired devices"
		color: Theme.paper
		opacity: 0.4
		font.pixelSize: 12
		Layout.alignment: Qt.AlignHCenter
            }
	}
    }
}
