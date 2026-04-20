import Quickshell.Widgets
import QtQuick
import QtQuick.Layouts
import Quickshell
import qs.services.niri
import qs.modules.common


Rectangle {
    id: root
    color: "transparent"
    height: 42
    
    Rectangle {
	id: workspaceLayout
	height: workspaceList.implicitHeight + 12
	width: workspaceList.implicitWidth + 8
	radius: 4
	color: Theme.base700
	anchors.verticalCenter: parent.verticalCenter

	RowLayout {
	    id: workspaceList
            anchors.verticalCenter: parent.verticalCenter
            spacing: 8

	    Rectangle {}

            Repeater {
		model: Niri.workspaces
		Rectangle {
		    id: workspaceDelegate
                    visible: model.isFocused || model.activeWindowId >= 0
		    implicitWidth: model.isFocused ? 32 : 16
		    implicitHeight: 16
                    radius: 4
		    color: model.isFocused ? Theme.base300 : Theme.base500

		    MouseArea {
			anchors.fill: parent
			cursorShape: Qt.PointingHandCursor
			onClicked: Niri.focusWorkspace(model.workspaceId)
		    }
		}
            }
	}
    }
}

