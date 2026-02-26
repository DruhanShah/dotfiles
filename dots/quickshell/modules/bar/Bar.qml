import QtQuick
import QtQuick.Layouts
import Quickshell

PanelWindow {
    id: bar
    anchors {
        top: true
        left: true
        right: true
    }
    implicitHeight: 42
    color: "#6f6e69"

    RowLayout {
	anchors {
	    verticalCenter: parent.verticalCenter
	    left: parent.left
	    leftMargin: 12
	}
	Loader { active: true; sourceComponent: Workspaces {} }
    }
    // right
    RowLayout {
	anchors {
	    verticalCenter: parent.verticalCenter
	    right: parent.right
	    rightMargin: 12
	}
	spacing: 10
	Loader { active: true; sourceComponent: Power {} }
	Loader { active: true; sourceComponent: Time {} }
    }
}
