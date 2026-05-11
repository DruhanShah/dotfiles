import Quickshell
import Quickshell.Io
import Quickshell.Wayland
import Quickshell.Widgets
import QtQuick
import QtQuick.Controls
import QtQuick.Layouts

import qs.modules.common
import qs.widgets

Scope {
    id: root

    IpcHandler {
	target: "launcher"

	function toggle(): void {
	    launcherPanel.visible = !launcherPanel.visible
	    if (launcherPanel.visible) {
		searchInput.text = ""
		selectedIndex = 0
		searchInput.forceActiveFocus()
	    }
	}
    }

    property int selectedIndex: 0

    ScriptModel {
	id: filteredApps
	objectProp: "id"
	values: {
	    const all = [...DesktopEntries.applications.values];
	    const q = searchInput.text.trim().toLowerCase();
	    if (q === "") return all.sort((a, b) => a.name.localeCompare(b.name));
	    return all.filter(d =>
		(d.name && d.name.toLowerCase().includes(q)) ||
		    (d.genericName && d.genericName.toLowerCase().includes(q)) ||
		    (d.keywords && d.keywords.some(k => k.toLowerCase().includes(q))) ||
		    (d.categories && d.categories.some(c => c.toLowerCase().includes(q)))
	    ).sort((a, b) => {
		const an = a.name.toLowerCase();
		const bn = b.name.toLowerCase();
		const aStarts = an.startsWith(q);
		const bStarts = bn.startsWith(q);
		if (aStarts && !bStarts) return -1;
		if (!aStarts && bStarts) return 1;
		return an.localeCompare(bn);
	    });
	}
    }

    function launchApp(entry) {
	entry.execute();
	launcherPanel.visible = false;
    }

    PanelWindow {
	id: launcherPanel
	visible: false
	focusable: true
	color: "transparent"

	WlrLayershell.layer: WlrLayer.Overlay
	WlrLayershell.keyboardFocus: WlrKeyboardFocus.Exclusive
	WlrLayershell.namespace: "quickshell-launcher"

	exclusionMode: ExclusionMode.Ignore

	anchors {
	    top: true
	    bottom: true
	    left: true
	    right: true
	}

	MouseArea {
	    anchors.fill: parent
	    onClicked: launcherPanel.visible = false

	    Rectangle {
		anchors.fill: parent
		color: "transparent"
	    }
	}

	Rectangle {
	    id: launcherBox
	    anchors.centerIn: parent
	    width: 640
	    height: 480
	    radius: 16
	    color: Theme.base850
	    border.width: 0

	    ColumnLayout {
		anchors.fill: parent
		anchors.margins: 8
		spacing: 12

		Rectangle {
		    Layout.fillWidth: true
		    height: 52
		    radius: 10
		    color: Theme.base850
		    border.color: searchInput.activeFocus ? Theme.base700 : Theme.base850
		    border.width: 0

		    Behavior on border.color {
			ColorAnimation { duration: 150 }
		    }

		    RowLayout {
			anchors.fill: parent
			anchors.leftMargin: 16
			anchors.rightMargin: 16
			spacing: 12

			TextInput {
			    id: searchInput
			    Layout.fillWidth: true
			    Layout.alignment: Qt.AlignVCenter
			    color: Theme.paper
			    font.pixelSize: Theme.fontSize + 8
			    font.family: Theme.fontSans
			    clip: true
			    focus: true
			    Accessible.role: Accessible.EditableText
			    Accessible.name: "Search applications"

			    onTextChanged: root.selectedIndex = 0

			    Keys.onEscapePressed: launcherPanel.visible = false

			    Keys.onPressed: event => {
				if (event.key === Qt.Key_Down) {
				    event.accepted = true;
				    root.selectedIndex = Math.min(root.selectedIndex + 1, resultsList.count - 1);
				    resultsList.positionViewAtIndex(root.selectedIndex, ListView.Contain);
				} else if (event.key === Qt.Key_Up) {
				    event.accepted = true;
				    root.selectedIndex = Math.max(root.selectedIndex - 1, 0);
				    resultsList.positionViewAtIndex(root.selectedIndex, ListView.Contain);
				} else if (event.key === Qt.Key_Return || event.key === Qt.Key_Enter) {
				    event.accepted = true;
				    if (resultsList.count > 0) {
					const entry = filteredApps.values[root.selectedIndex];
					if (entry) root.launchApp(entry);
				    }
				} else if (event.key === Qt.Key_Tab) {
				    event.accepted = true;
				    root.selectedIndex = Math.min(root.selectedIndex + 1, resultsList.count - 1);
				    resultsList.positionViewAtIndex(root.selectedIndex, ListView.Contain);
				}
			    }
			}
		    }
		}

		// Tabs for choices
		Tabs {
		    id: tabs
		    activeTab: launcherTab
		    content: [
			Tab {
			    id: launcherTab
			    parentBar: tabs
			    title: "Apps"
			    isFirst: true
			},
			Tab {
			    id: calculatorTab
			    parentBar: tabs
			    title: "Calculator"
			},
			Tab {
			    id: characterTab
			    parentBar: tabs
			    title: "Character selection"
			    isLast: true
			},
		    ]
		}

		// App list
		ListView {
		    id: resultsList
		    Layout.fillWidth: true
		    Layout.fillHeight: true
		    visible: launcherTab.active
		    model: filteredApps
		    clip: true
		    spacing: 2
		    boundsBehavior: Flickable.StopAtBounds
		    currentIndex: root.selectedIndex
		    highlightMoveDuration: 150
		    highlightMoveVelocity: -1

		    highlight: Rectangle {
			radius: 8
			color: Theme.base700
		    }

		    delegate: Rectangle {
			id: delegateRoot
			required property var modelData
			required property int index

			Accessible.role: Accessible.Button
			Accessible.name: (modelData.name ?? "Application") + (modelData.genericName ? " - " + modelData.genericName : "")

			width: resultsList.width
			height: 48
			radius: 8
			color: hoverArea.containsMouse && root.selectedIndex !== index ? Theme.base800 : "transparent"

			Behavior on color {
			    ColorAnimation { duration: 50 }
			}

			RowLayout {
			    anchors.fill: parent
			    anchors.leftMargin: 12
			    anchors.rightMargin: 12
			    spacing: 12

			    // App icon
			    Item {
				width: 32
				height: 32
				Layout.alignment: Qt.AlignVCenter

				IconImage {
				    anchors.fill: parent
				    source: Quickshell.iconPath(delegateRoot.modelData.icon ?? "", true)
				    visible: (delegateRoot.modelData.icon ?? "") !== ""
				}

				// Fallback icon
				Text {
				    anchors.centerIn: parent
				    text: ""
				    color: Theme.blueBright
				    font.pixelSize: 20
				    font.family: Theme.fontSans
				    visible: (delegateRoot.modelData.icon ?? "") === ""
				}
			    }

			    // App info
			    ColumnLayout {
				Layout.fillWidth: true
				Layout.alignment: Qt.AlignVCenter
				spacing: 2

				Text {
				    text: delegateRoot.modelData.name ?? ""
				    color: root.selectedIndex === delegateRoot.index ? Theme.paper : Theme.base50
				    font.pixelSize: Theme.fontSize
				    font.family: Theme.fontSans
				    font.bold: root.selectedIndex === delegateRoot.index
				    elide: Text.ElideRight
				    Layout.fillWidth: true
				}

				Text {
				    text: delegateRoot.modelData.genericName ?? delegateRoot.modelData.comment ?? ""
				    color: Theme.base500
				    font.pixelSize: Theme.fontSize - 3
				    font.family: Theme.fontSans
				    elide: Text.ElideRight
				    Layout.fillWidth: true
				    visible: text !== ""
				}
			    }
			}

			MouseArea {
			    id: hoverArea
			    anchors.fill: parent
			    hoverEnabled: true
			    cursorShape: Qt.PointingHandCursor
			    onClicked: root.launchApp(delegateRoot.modelData)
			    onEntered: root.selectedIndex = delegateRoot.index
			}
		    }

		    // Empty state
		    Text {
			anchors.centerIn: parent
			text: "  No applications found"
			color: Theme.base500
			font.pixelSize: 14
			font.family: Theme.fontSans
			visible: resultsList.count === 0 && searchInput.text !== ""
		    }
		}
	    }
	}
    }
}
