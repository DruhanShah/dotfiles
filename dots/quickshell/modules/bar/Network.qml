import QtQuick
import QtQuick.Layouts
import QtQuick.Shapes
import Quickshell

import qs.modules.common
import qs.modules.icons
import qs.widgets.bar


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
	wifiConnected: true
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
		Layout.fillWidth: true
		model: [
		    { name: "Wi-Fi", first: true, last: false },
		    { name: "Wired", first: false, last: false },
		    { name: "VPN", first: false, last: true }
		]
	    }
	}
    }
}
