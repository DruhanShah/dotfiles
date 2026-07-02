import QtQuick
import QtQuick.Layouts
import Quickshell

import qs.modules.common
import qs.modules.bar


LazyLoader {
    active: true

    Variants {
	model: Quickshell.screens
	delegate: PanelWindow {
	    required property var modelData
	    screen: modelData
	    
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
                    leftMargin: 8
		}
		spacing: 6

		PowerWidget {}
		Rectangle { implicitWidth: 0 }
		WorkspaceWidget {}
            }

            RowLayout {
		anchors {
                    verticalCenter: parent.verticalCenter
                    right: parent.right
                    rightMargin: 16
		}
		spacing: 8

		TimerWidget {}
		BluetoothWidget {}
		NetworkWidget {}
		BatteryWidget {}
		Rectangle { implicitWidth: 12 }
		DateTimeWidget {}
            }
	}
    }
}
