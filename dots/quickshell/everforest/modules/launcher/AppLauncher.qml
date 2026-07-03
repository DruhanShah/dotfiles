import Quickshell
import Quickshell.Widgets
import QtQuick
import QtQuick.Controls
import QtQuick.Layouts
import QtQuick.Effects

import qs.modules.common

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
        spacing: 16
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
            id: delegateRoot
            required property var modelData
            required property int index
            readonly property bool isCurrent: ListView.isCurrentItem

            Accessible.role: Accessible.Button
            Accessible.name: (modelData.name ?? "Application") +
                (modelData.genericName ? " – " + modelData.genericName : "")

            width: 240
            height: 240
            radius: 12
            
            color: isCurrent ? Theme.bg0 : Theme.bg2
            border.color: isCurrent ? Theme.grey2 : Theme.grey1
            border.width: 1
            z: isCurrent ? 1 : 0.5

	    RectangularShadow {
		anchors.fill: parent
		radius: 12
		color: Theme.bg_dim
		spread: 4
		blur: 50
		offset.x: 0
		offset.y: 0
		opacity: 0.5
	    }

            transform: [
                Scale {
                    origin.x: width / 2
                    origin.y: height / 2
                    xScale: delegateRoot.isCurrent ? 1.1 : 1
                    yScale: delegateRoot.isCurrent ? 1.1 : 1
                    Behavior on xScale { NumberAnimation { duration: 250; easing: Easing.OutQuint } }
                    Behavior on yScale { NumberAnimation { duration: 250; easing: Easing.OutQuint } }
                }
            ]

            Behavior on color { ColorAnimation { duration: 150 } }
            Behavior on border.color { ColorAnimation { duration: 150 } }

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
                    color: Theme.fg
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
