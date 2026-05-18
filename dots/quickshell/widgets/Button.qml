import QtQuick
import QtQuick.Layouts

import qs.modules.common

Rectangle {
    id: root

    property bool active: true
    property string text: "Sample text"
    property var toggle: null
    
    implicitWidth: label.implicitWidth + 16
    implicitHeight: 22
    radius: 8
    color: "transparent"
    border.width: 1
    border.color: active ? Theme.base300 : Theme.base700

    Text {
	id: label
	anchors.centerIn: parent
	text: root.text
	color: Theme.paper
	font.pixelSize: 11
    }

    MouseArea {
	anchors.fill: parent
	cursorShape: Qt.PointingHandCursor
	onClicked: root.toggle
    }
}
