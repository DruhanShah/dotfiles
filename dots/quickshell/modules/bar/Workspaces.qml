import QtQuick
import QtQuick.Layouts
import Quickshell

Rectangle {
    anchors.left: parent.left
    color: "#829181"
    height: 30
    width: 240
    radius: 4

    Rectangle {
        id: workspaceLayout
        anchors {
            verticalCenter: parent.verticalCenter
            left: parent.left
            right: parent.right
            leftMargin: 10
            rightMargin: 10
        }

        RowLayout {
            anchors {
                verticalCenter: parent.verticalCenter
            }
            spacing: 5

            Repeater {
                model: niri.workspaces

                Rectangle {
                    visible: index < 11
                    width: model.isActive ? 20: 20
                    height: 20
                    radius: 4
                    color: model.isActive ? "#a6b0a0" : "#939f91"
                    MouseArea {
                        anchors.fill: parent
                        cursorShape: Qt.PointingHandCursor
                        onClicked: niri.focusWorkspaceById(model.id)
                    }
                }
            }
        }
    }
}
