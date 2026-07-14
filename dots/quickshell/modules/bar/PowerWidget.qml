import QtQuick
import QtQuick.Layouts
import QtQuick.Shapes
import Quickshell

import qs.icons
import qs.widgets
import qs.services


Rectangle {
    id: root
    signal clicked()
    width: 36
    height: 42
    color: "transparent"

    onClicked: powerPopup.toggle()

    MouseArea {
	anchors.fill: parent
	cursorShape: Qt.PointingHandCursor
	onClicked: root.clicked()
    }
    
    NixOSIcon {
	id: osIcon
	width: 32
	height: 32
	anchors.centerIn: parent
    }

    Popup {
	id: powerPopup
	contentWidth: 240
	contentHeight: content.implicitHeight
	anchorItem: root

	ColumnLayout {
	    id: content
	    width: parent.width
	    spacing: 24

	    Rectangle {
		id: uptimeBox
		Layout.fillWidth: true
		implicitHeight: uptimeLayout.height + 12
		color: "transparent"
		radius: 4

		Rectangle {
		    id: uptimeLayout
		    width: parent.width
		    anchors {
			left: parent.left
			top: parent.top
			topMargin: 8
		    }

		    Text {
			id: uptimeText
			text: Power.uptimeString
			color: Theme.base200
			font.family: Theme.fontSans
			font.pixelSize: Theme.fontSize
			anchors {
			    verticalCenter: parent.verticalCenter
			    right: uptimeLayout.right
			}
		    }
		    
		    Text {
			id: uptimeSubtext
			text: "Uptime"
			color: Theme.paper
			font.family: Theme.fontSans
			font.bold: true
			font.pixelSize: Theme.fontSize + 4
			anchors {
			    verticalCenter: parent.verticalCenter
			    left: uptimeLayout.left
			}
		    }
		}
	    }

	    Rectangle {
		id: powermenuBox
		Layout.fillWidth: true
		height: powermenuLayout.height
		color: "transparent"
		radius: 4

		ColumnLayout {
		    id: powermenuLayout
		    spacing: 8
		    Layout.fillWidth: true
		    Layout.alignment: Qt.AlignVCenter | Qt.AlignHCenter

		    PowermenuButton {
			icon: LockIcon {}
			text: "Lock"
			click: () => {
			    powerPopup.close()
			    Power.lock()
			}
		    }

		    PowermenuButton {
			icon: LogoutIcon {}
			text: "Logout"
			click: () => {
			    powerPopup.close()
			    Power.logout()
			}
		    }

		    PowermenuButton {
			icon: RebootIcon {}
			text: "Reboot"
			click: () => {
			    powerPopup.close()
			    Power.reboot()
			}
		    }
		    
		    PowermenuButton {
			icon: ShutdownIcon {}
			text: "Shutdown"
			click: () => {
			    powerPopup.close()
			    Power.shutdown()
			}
		    }

		}
	    }
	}
    }
}
