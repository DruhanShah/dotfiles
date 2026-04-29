import QtQuick
import QtQuick.Layouts
import QtQuick.Shapes
import Quickshell

import qs.modules.common
import qs.modules.icons
import qs.widgets


Rectangle {
    id: root
    signal clicked()
    width: 32
    height: 42
    color: "transparent"

    onClicked: networkPopup.toggle()

    MouseArea {
	anchors.fill: parent
	cursorShape: Qt.PointingHandCursor
	onClicked: root.clicked()
    }
    
    NetIcon {
	id: icon
	anchors.centerIn: parent
	wifiConnected: false
	wifiStrength: 0.5
	ethConnected: false
    }

    Popup {
	id: networkPopup
	contentWidth: 240
	contentHeight: content.implicitHeight
	anchorItem: root

	ColumnLayout {
	    id: content
	    width: parent.width
	    spacing: 24

	    Tabs {
		id: tabs
		activeTab: wifiTab
		content: [
		    Tab {
			id: wifiTab
			parentBar: tabs
			title: "Wi-Fi"
			isFirst: true
		    },
		    Tab {
			id: ethTab
			parentBar: tabs
			title: "Ethernet"
		    },
		    Tab {
			id: vpnTab
			parentBar: tabs
			title: "VPN"
			isLast: true
		    }
		]
	    }
	}
    }
}
