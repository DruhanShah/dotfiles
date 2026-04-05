import QtQuick
import QtQuick.Layouts
import Quickshell
import qs.modules.common
import qs.modules.bar

LazyLoader {
    active: true
    PanelWindow {
        id: bar
        anchors {
            top: true
            left: true
            right: true
        }
        implicitHeight: 42
        color: Theme.base850

        RowLayout {
            anchors {
                verticalCenter: parent.verticalCenter
                left: parent.left
                leftMargin: 16
            }
            spacing: 8

            Workspaces {}
        }

        RowLayout {
            anchors {
                verticalCenter: parent.verticalCenter
                right: parent.right
                rightMargin: 16
            }
            spacing: 8

            Bluetooth {}
            Battery {}
	    Rectangle { implicitWidth: 12 }
            Time {}
        }
    }
}
