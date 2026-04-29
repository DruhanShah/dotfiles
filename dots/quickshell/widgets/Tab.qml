import QtQuick
import QtQuick.Layouts
import Quickshell

import qs.modules.common


Rectangle {
    id: root

    property var parentBar: null
    
    property string title: "Tab"
    property bool isFirst: false
    property bool active: isFirst ? true : false
    property bool isLast: false

    signal clicked

    Layout.fillHeight: true
    Layout.fillWidth: true

    topLeftRadius: isFirst ? 8 : 2
    topRightRadius: isLast ? 8 : 2
    bottomLeftRadius: isFirst ? 8 : 2
    bottomRightRadius: isLast ? 8 : 2
    color: active ? Theme.base500 : Theme.base850
    border.color: Theme.base700
    border.width: active ? 0 : 1

    Behavior on color {
	ColorAnimation {
	    duration: 150
	    easing.type: Easing.InOutQuad
	}
    }

    Text {
	text: title
	color: active ? Theme.black : Theme.base200
	font.family: Theme.fontSans
	font.pixelSize: Theme.fontSize - 2
	anchors.centerIn: parent
    }

    MouseArea {
	anchors.fill: parent
	cursorShape: Qt.PointingHandCursor
	onClicked: {
	    root.clicked()
	    if (parentBar) {
		parentBar.activeTab.active = false;
		parentBar.activeTab = root;
		root.active = true;
	    }
	}
    }
}
