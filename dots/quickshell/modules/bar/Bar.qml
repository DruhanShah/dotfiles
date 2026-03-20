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
            Loader { active: true; sourceComponent: Workspaces {} }
        }

        RowLayout {
            anchors {
                verticalCenter: parent.verticalCenter
                right: parent.right
                rightMargin: 16
            }
            spacing: 8

            Bluetooth { id: bluetoothWidget; onClicked: bluetoothPopup.toggle() }
            Power { id: powerWidget; onClicked: powerPopup.toggle() }
	    Rectangle { implicitWidth: 12 }
            Loader { active: true; sourceComponent: Time {} }
        }

	BluetoothPopup {
	    id: bluetoothPopup
	    anchorItem: bluetoothWidget
	}
	PowerPopup {
            id: powerPopup
            anchorItem: powerWidget
        }
    }
}
