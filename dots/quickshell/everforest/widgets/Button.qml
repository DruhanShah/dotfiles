import QtQuick
import QtQuick.Layouts

import qs.modules.common

Rectangle {
    id: root

    property bool active: true
    property bool danger: false
    property string text: "Sample text"
    
    implicitWidth: label.implicitWidth + 16
    implicitHeight: 22
    radius: 8
    color: "transparent"
    border.width: 1
    border.color: active ? (danger ? Theme.red : Theme.fg) : Theme.grey1

    Text {
	id: label
	anchors.centerIn: parent
	text: root.text
	color: active ? (danger ? Theme.red : Theme.fg) : Theme.grey1
	font.pixelSize: 11
    }
}
