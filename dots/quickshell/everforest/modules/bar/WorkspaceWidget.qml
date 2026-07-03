import QtQuick
import QtQuick.Layouts
import Quickshell

import qs.services.niri
import qs.modules.common


Rectangle {
    id: root
    color: "transparent"
    height: 42
    
    RowLayout {
	Layout.fillWidth: true
	anchors.verticalCenter: parent.verticalCenter
	spacing: 8

	Repeater {
	    model: Niri.workspaces
	    Rectangle {
		id: workspaceDelegate

		required property Workspace modelData
		property var windowLayout: []
		property var floatingLayout: []

		function rebuildLayout() {
		    const cols = {}
		    for (let i = 0; i < windowCollector.count; i++) {
			const it = windowCollector.itemAt(i)
			if (it.isFloating) continue
			const col = it.columnIndex
			if (col < 0) continue
			if (!cols[col])
			    cols[col] = []
			cols[col].push(it.modelData)
		    }
		    windowLayout = Object.keys(cols)
			.map(Number)
			.sort((a, b) => a - b)
			.map(col => cols[col].sort(
			    (a, b) => a.layout.tileIndexInScrollingLayout - b.layout.tileIndexInScrollingLayout
			))
		}

		function rebuildFloating() {
		    floatingLayout = Niri.windows.filter(w => w.isFloating && w.workspaceId === modelData.id)
		}

		Item {
		    visible: false
		    width: 0; height: 0
		    Repeater {
			id: windowCollector
			model: workspaceDelegate.modelData.windows
			Item {
			    visible: false
			    width: 0; height: 0
			    required property NiriWindow modelData
			    property int tileIndex: modelData.layout.tileIndexInScrollingLayout
			    property int columnIndex: modelData.layout.columnIndexInScrollingLayout
			    property real tileWidth: modelData.layout.tileWidth
			    property bool isFloating: modelData.isFloating

			    Connections {
				target: modelData
				function onLayoutChanged() { Qt.callLater(rebuildLayout) }
			    }
			}
			onItemAdded: Qt.callLater(rebuildLayout)
			onItemRemoved: Qt.callLater(rebuildLayout)
		    }
		}

		visible: modelData.isFocused || modelData.activeWindowId >= 0
		Layout.preferredWidth: Math.max(windowRow.implicitWidth + 12, 26)
		height: 24
		color: Theme.bg3
		radius: 4

		RowLayout {
		    id: windowRow

		    anchors.fill: parent
		    anchors.margins: 6
		    spacing: 2
		    Repeater {
			model: workspaceDelegate.windowLayout

			ColumnLayout {
			    required property var modelData
			    spacing: 2

			    Repeater {
				model: modelData
				Rectangle {
				    required property var modelData

				    Layout.fillHeight: true
				    Layout.preferredWidth: (modelData.layout.tileWidth + 48) / 1920 * 20
				    radius: 2
				    color: (modelData.windowId == workspaceDelegate.modelData.activeWindowId
					    && workspaceDelegate.modelData.isFocused)
					? Theme.grey2 : Theme.grey0

				    MouseArea {
					anchors.fill: parent
					cursorShape: Qt.PointingHandCursor
				    }
				}
			    }
			}
		    }
		}
	    }
	}
    }
}

