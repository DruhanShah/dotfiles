import QtQuick
import QtQuick.Layouts
import QtQuick.Shapes
import Quickshell
import Quickshell.Bluetooth
import qs.modules.common
import qs.modules.icons

Rectangle {
    id: root
    signal clicked()
    width: icon.implicitWidth
    height: 42
    color: "transparent"

    onClicked: bluetoothPopup.toggle()

    readonly property bool enabled: Bluetooth.defaultAdapter
                                    ? Bluetooth.defaultAdapter.enabled
                                    : false

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
	contentWidth: 300
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

		Rectangle {
                    id: toggleBtn
                    implicitWidth: 40
                    implicitHeight: 20
                    radius: 10
                    color: adapter && adapter.enabled ? Theme.greenBright : Theme.base600

                    readonly property var adapter: Bluetooth.defaultAdapter

                    Rectangle {
			width: 14; height: 14
			radius: 7
			color: Theme.paper
			anchors.verticalCenter: parent.verticalCenter
			x: parent.adapter && parent.adapter.enabled ? 23 : 3

			Behavior on x {
                            NumberAnimation { duration: 150; easing.type: Easing.InOutQuad }
			}
                    }

                    MouseArea {
			anchors.fill: parent
			cursorShape: Qt.PointingHandCursor
			onClicked: {
                            if (toggleBtn.adapter)
				toggleBtn.adapter.enabled = !toggleBtn.adapter.enabled
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

			Image {
                            source: Quickshell.iconPath(modelData.icon, 16)
                            width: 16; height: 16
                            sourceSize: Qt.size(16, 16)
                            visible: status === Image.Ready
			}
			Rectangle {
                            visible: parent.children[0].status !== Image.Ready
                            width: 16; height: 16; radius: 8
                            color: modelData.connected ? Theme.green : Theme.base600
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

			Text {
                            visible: modelData.pairing
                            text: "pairing…"
                            color: Theme.paper
                            opacity: 0.5
                            font.pixelSize: 11
			}

			Rectangle {
                            visible: !modelData.pairing
                            implicitWidth: connectLabel.implicitWidth + 16
                            implicitHeight: 22
                            radius: 8
                            color: "transparent"
			    border.width: 1
			    border.color: Theme.base600

                            Text {
				id: connectLabel
				anchors.centerIn: parent
				text: modelData.connected ? "Disconnect" : "Connect"
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
