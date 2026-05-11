import QtQuick
import QtQuick.Shapes
import QtQuick.Layouts

import qs.modules.common

Rectangle {
    id: root
    color: Theme.base800
    border.color: Theme.base700
    border.width: 1
    radius: 8
    height: 42
    width: 240

    default property alias icon: _icon.data
    property string text: "TBU"
    property var click: null

    RowLayout {
	spacing: 8
	anchors.fill: parent
	anchors.leftMargin: 12

	Rectangle {}

	Item { id: _icon }

	Rectangle {}

	Text {
	    text: root.text
	    color: Theme.base100
	    font.family: Theme.fontSans
	    font.pixelSize: Theme.fontSize
	}
    }

    MouseArea {
	anchors.fill: parent
	cursorShape: Qt.PointingHandCursor
	hoverEnabled: true
	onClicked: root.click()
	onEntered: root.color = Theme.base600
	onExited: root.color = Theme.base800
    }

    Behavior on color {
	ColorAnimation { duration: 100 }
    }
}
