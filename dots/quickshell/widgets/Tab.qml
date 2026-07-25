import QtQuick
import QtQuick.Layouts

import qs.services

Item {
    id: root
    
    width: {
	let totalSpacing = (ListView.view.count - 1) * ListView.view.spacing;
	return (ListView.view.width - totalSpacing) / ListView.view.count;
    } // Because Layout.fillWidth doesn't work with ListView
    height: 32

    property string title: ""
    property bool isActive: false

    signal clicked()

    Text {
        id: textItem
        text: root.title
        color: root.isActive ? Theme.black : Theme.base100
        font.family: Theme.fontSans
        font.pixelSize: Theme.fontSize - 2
        anchors.centerIn: parent
    }

    MouseArea {
        anchors.fill: parent
        cursorShape: Qt.PointingHandCursor
        onClicked: root.clicked()
    }
}
