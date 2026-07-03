import QtQuick
import QtQuick.Layouts

import qs.modules.common


Rectangle {
    id: slider
    Layout.fillWidth: true

    implicitHeight: 8
    radius: 4
    color: Theme.bg2

    property real value: 0.0
    property color barColor

    Rectangle {
        anchors {
            left: parent.left
            top: parent.top
            bottom: parent.bottom
        }

        implicitWidth: parent.width * slider.value
        radius: parent.radius
        color: slider.barColor

	Behavior on implicitWidth {
	    NumberAnimation { duration: 200; easing.type: Easing.InOutQuad }
	}
    }
}
