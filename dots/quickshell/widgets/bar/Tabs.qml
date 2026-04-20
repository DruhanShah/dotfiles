import QtQuick
import QtQuick.Layouts
import Quickshell

import qs.modules.common


Item {
    id: root
    width: parent.width
    height: 32

    property string currentTab: ""
    property var model: null

    RowLayout {
	anchors.fill: parent
	spacing: 2

	Repeater {
	    model: root.model
	    delegate: Rectangle {
		id: tab
		required property string name
		required property bool first
		required property bool last
		
		color: name === root.currentTab ? Theme.base500 : Theme.base700
		Layout.fillWidth: true
		height: parent.height
		bottomLeftRadius: first ? 8 : 4
		bottomRightRadius: last ? 8 : 4
		topLeftRadius: first ? 8 : 4
		topRightRadius: last ? 8 : 4

		Text {
		    text: tab.name
		    color: tab.name === root.currentTab ? Theme.black : Theme.base200
		    font.family: Theme.fontSans
		    font.pixelSize: Theme.fontSize
		    anchors.centerIn: parent
		}
	    }
	}
    }
}
