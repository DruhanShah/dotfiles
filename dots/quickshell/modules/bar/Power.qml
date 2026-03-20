import QtQuick
import QtQuick.Layouts
import QtQuick.Shapes
import Quickshell
import Quickshell.Services.UPower
import qs.modules.icons

Rectangle {
    id: powerWidget
    signal clicked()
    width: 32
    height: 42
    color: "transparent"

    MouseArea {
	anchors.fill: parent
	cursorShape: Qt.PointingHandCursor
	onClicked: powerWidget.clicked()
    }
    
    BatteryIcon {
	id: batteryIcon
	anchors.centerIn: parent
	percentage: UPower.displayDevice.percentage
	charging: !UPower.onBattery
    }
}
