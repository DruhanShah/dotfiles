import Quickshell
import Quickshell.Widgets
import QtQuick
import QtQuick.Controls
import QtQuick.Layouts
import QtQuick.Effects

import qs.services

Item {
    id: appLauncher

    property string searchQuery: ""
    property int selectedIndex: 0

    signal launchRequested()

    function moveUp() {
        resultsList.decrementCurrentIndex();
        appLauncher.selectedIndex = resultsList.currentIndex;
    }

    function moveDown() {
        resultsList.incrementCurrentIndex();
        appLauncher.selectedIndex = resultsList.currentIndex;
    }

    function confirm() {
        const entry = filteredApps.values[selectedIndex];
        if (entry) {
            entry.execute();
            appLauncher.launchRequested();
        }
    }

    onSearchQueryChanged: {
        resultsList.currentIndex = 0;
        selectedIndex = resultsList.currentIndex;
    }

    ScriptModel {
        id: filteredApps
        objectProp: "id"
        values: {
            const all = [...DesktopEntries.applications.values];
            const q = appLauncher.searchQuery.trim().toLowerCase();
            
            if (q === "") {
                return all.sort((a, b) => a.name.localeCompare(b.name));
            }

            return all.filter(d =>
                (d.name && d.name.toLowerCase().includes(q)) ||
                (d.genericName && d.genericName.toLowerCase().includes(q)) ||
                (d.keywords && d.keywords.some(k => k.toLowerCase().includes(q))) ||
                (d.categories && d.categories.some(c => c.toLowerCase().includes(q)))
            ).sort((a, b) => {
                const an = a.name.toLowerCase();
                const bn = b.name.toLowerCase();
                const aS = an.startsWith(q);
                const bS = bn.startsWith(q);
                
                if (aS && !bS) return -1;
                if (!aS && bS) return 1;
                return an.localeCompare(bn);
            });
        }
    }

    ListView {
        id: resultsList
        anchors.fill: parent
        model: filteredApps
        clip: false
        spacing: 0
        boundsBehavior: Flickable.StopAtBounds
        currentIndex: appLauncher.selectedIndex
        highlightFollowsCurrentItem: true
        highlightMoveDuration: 250
        highlightMoveVelocity: -1
        highlightRangeMode: ListView.StrictlyEnforceRange
        preferredHighlightBegin: parent.width / 2 - 120
        preferredHighlightEnd: parent.width / 2 + 120
        orientation: ListView.Horizontal

        highlight: Rectangle { color: "transparent" }

	delegate: Rectangle {
	    id: delegateWrapper
	    required property var modelData
	    required property int index

	    width: childrenRect.width
	    height: childrenRect.height
	    color: "transparent"

	    transform: [
		Scale {
		    origin.x: width / 2
		    origin.y: height / 2
		    xScale: (1 - Math.abs(resultsList.currentIndex - index) * 0.2)
		    yScale: (1 - Math.abs(resultsList.currentIndex - index) * 0.2)
		    Behavior on xScale { NumberAnimation { duration: 250; easing: Easing.InOutQuad } }
		    Behavior on yScale { NumberAnimation { duration: 250; easing: Easing.InOutQuad } }
		}
	    ]

	    RectangularShadow {
		anchors.fill: delegateRoot
		color: Theme.base900
		opacity: 0.3
		blur: 50
		spread: 4
		z: 0
	    }
	    
	    Rectangle {
		id: delegateRoot
		property var modelData: delegateWrapper.modelData
		property int index: delegateWrapper.index
		property bool isCurrent: delegateWrapper.ListView.isCurrentItem

		Accessible.role: Accessible.Button
		Accessible.name: (modelData.name ?? "Application") +
                    (modelData.genericName ? " – " + modelData.genericName : "")

		width: 250
		height: 250
		radius: 12
		
		color: Theme.base850
		border.color: isCurrent ? Theme.base500 : Theme.base600
		border.width: 1
		z: isCurrent ? 1 : 0.5

		opacity: (1 - Math.abs(resultsList.currentIndex - index) * 0.45)

		Behavior on color { ColorAnimation { duration: 250 } }
		Behavior on border.color { ColorAnimation { duration: 250 } }
		Behavior on opacity { NumberAnimation { duration: 250 } }

		ColumnLayout {
                    anchors.centerIn: parent
                    spacing: 24

                    Item {
			width: 64
			height: 64
			Layout.alignment: Qt.AlignHCenter

			IconImage {
                            anchors.fill: parent
                            source: Quickshell.iconPath(delegateRoot.modelData.icon ?? "", true)
                            visible: (delegateRoot.modelData.icon ?? "") !== ""
			}
                    }

                    Text {
			text: delegateRoot.modelData.name ?? ""
			color: appLauncher.selectedIndex === delegateRoot.index ? Theme.paper : Theme.base50
			font.pixelSize: Theme.fontSize - 1
			font.family: Theme.fontSans
			font.weight: appLauncher.selectedIndex === delegateRoot.index ? Font.Medium : Font.Normal
			elide: Text.ElideRight
			Layout.maximumWidth: 200
			Layout.alignment: Qt.AlignHCenter
                    }
		}

		MouseArea {
                    id: hoverArea
                    anchors.fill: parent
                    cursorShape: Qt.PointingHandCursor
                    onClicked: {
			if (appLauncher.selectedIndex === delegateRoot.index) {
                            delegateRoot.modelData.execute();
                            appLauncher.launchRequested();
			} else {
                            appLauncher.selectedIndex = delegateRoot.index;
			}
                    }
		}
            }   
	}
    }
}
