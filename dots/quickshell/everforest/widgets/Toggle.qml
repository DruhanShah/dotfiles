import Quickshell
import QtQuick
import qs.modules.common


Rectangle {
    id: toggleBtn
    implicitWidth: 40
    implicitHeight: 20
    radius: 10
    
    property bool enabled: false
    property var onToggled: null

    color: enabled ? Theme.green : Theme.bg4

    Rectangle {
	width: 14; height: 14
	radius: 7
	color: toggleBtn.enabled ? Theme.bg_dim : Theme.fg
	anchors.verticalCenter: parent.verticalCenter
	x: toggleBtn.enabled ? 23 : 3

	Behavior on x {
            NumberAnimation { duration: 150; easing.type: Easing.InOutQuad }
	}
    }

    MouseArea {
	anchors.fill: parent
	cursorShape: Qt.PointingHandCursor
	onClicked: {
	    toggleBtn.enabled = !toggleBtn.enabled
	    if (toggleBtn.onToggled) toggleBtn.onToggled(toggleBtn.enabled)
	}
    }
}
