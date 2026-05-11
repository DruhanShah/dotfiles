import QtQuick
import qs.modules.common

Column {
    id: root
    property int    value: 0
    property int    max:   59
    property string label: ""

    spacing: 2

    Rectangle {
        width: 44
	height: 18
	radius: 4
        color: upMa.containsMouse ? Theme.base150 : Theme.base100

        Behavior on color {
	    ColorAnimation { duration: 80 }
	}

        Text {
	    anchors.centerIn: parent
	    text: "▲"
	    font.pixelSize: 8
	    color: Theme.base500
	}

        MouseArea {
	    id: upMa
	    anchors.fill: parent
	    hoverEnabled: true
	    cursorShape: Qt.PointingHandCursor
	    onClicked: if (root.value < root.max) root.value++
	}
    }

    Rectangle {
        width: 44
	height: 28
	radius: 4
	color: Theme.paper
        border.color: Theme.base200; border.width: 1
        Row {
            anchors.centerIn: parent; spacing: 1
	    Text {
		text: root.value < 10 ? "0"+root.value : ""+root.value
		font.family: Theme.fontMono
		font.pixelSize: 14
		color: Theme.base900
	    }
	    Text {
		text: root.label
		font.family: Theme.fontSans
		font.pixelSize: 9
		color: Theme.base400
		anchors.bottom: parent.bottom
		anchors.bottomMargin: 3
	    }
        }
    }

    Rectangle {
        width: 44
	height: 18
	radius: 4
        color: dnMa.containsMouse ? Theme.base150 : Theme.base100

        Behavior on color {
	    ColorAnimation { duration: 80 }
	}

	Text {
	    anchors.centerIn: parent
	    text: "▼"
	    font.pixelSize: 8
	    color: Theme.base500
	}
	MouseArea {
	    id: dnMa
	    anchors.fill: parent
	    hoverEnabled: true
	    cursorShape: Qt.PointingHandCursor
	    onClicked: if (root.value > 0) root.value--
	}
    }
}
