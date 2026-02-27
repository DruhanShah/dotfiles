import QtQuick
import QtQuick.Layouts
import Quickshell
import qs.modules.common

PanelWindow {
    id: bar
    anchors {
        top: true
        left: true
        right: true
    }
    implicitHeight: 42
    color: Theme.base800

    RowLayout {
	anchors {
	    verticalCenter: parent.verticalCenter
	    left: parent.left
	    leftMargin: 16
	}
	Loader { active: true; sourceComponent: Workspaces {} }
    }
    // right
    RowLayout {
	anchors {
	    verticalCenter: parent.verticalCenter
	    right: parent.right
	    rightMargin: 16
	}
	spacing: 32
	Loader { active: true; sourceComponent: Power {} }
	Loader { active: true; sourceComponent: Time {} }
    }
}
