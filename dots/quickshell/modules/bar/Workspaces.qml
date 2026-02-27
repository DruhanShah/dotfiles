import QtQuick
import QtQuick.Layouts
import Quickshell
import qs.services

Rectangle {
    id: workspaceLayout
    anchors {
	verticalCenter: parent.verticalCenter
	left: parent.left
	right: parent.right
    }

    RowLayout {
        anchors {
            verticalCenter: parent.verticalCenter
        }
        spacing: 5

        Repeater {
            model: Niri.workspaces

            Rectangle {
                visible: model.isActive || model.activeWindowId > 0
                implicitWidth: model.isActive ? 36: 24
                implicitHeight: 20
                radius: 4
                color: model.isActive ? "#B7B5AC" : "#878580"
                MouseArea {
                    anchors.fill: parent
                    cursorShape: Qt.PointingHandCursor
                    onClicked: Niri.focusWorkspaceById(model.id)
                }
            }
        }
    }
}

