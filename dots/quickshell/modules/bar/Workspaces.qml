import Quickshell.Widgets
import QtQuick
import QtQuick.Layouts
import Quickshell
import qs.services
import qs.modules.common

Rectangle {
    id: dummy
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

		    property int id: model.id

                    visible: model.isActive || model.activeWindowId > 0
		    implicitWidth: model.isActive ? 32 : 16
		    implicitHeight: 16
		    /* implicitWidth: windows.implicitWidth ? windows.implicitWidth + 4 : 16 */
                    /* implicitHeight: windows.implicitHeight ? windows.implicitHeight + 4 : 16 */
                    radius: 4
		    color: model.isActive ? Theme.base300 : Theme.base500

		    /* RowLayout { */
		    /*     id: windows */
		    /*     anchors.centerIn: parent */
		    /*     spacing: 2 */

		    /*     Repeater { */
		    /* 	model: Niri.windows */
		    /* 	Rectangle { */
		    /* 	    visible: model.workspaceId == workspaceDelegate.id */
		    /* 	    width: windowDelegate.implicitWidth */
		    /* 	    height: windowDelegate.implicitHeight */
		    /* 	    color: "transparent" */
		    /* 	    IconImage { */

		    /* 		id: windowDelegate */
		    /* 		anchors.centerIn: parent */
		    /* 		source: model.iconPath ? "file://" + model.iconPath : "" */
		    /* 		implicitSize: 12 */

		    /* 		MouseArea { */
		    /* 		    anchors.fill: parent */
		    /* 		    cursorShape: Qt.PointingHandCursor */
		    /* 		    onClicked: Niri.focusWindow(model.id) */
		    /* 		} */
		    /* 	    } */
		    /* 	} */
		    /*     } */
		    /* } */
		}
            }
	}
    }
}

