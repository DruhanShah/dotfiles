import Quickshell
import QtQuick
import QtQuick.Layouts
import QtQuick.Effects

import qs.services

Item {
    id: clipboardManager

    property string searchQuery: ""
    property int selectedIndex: 0
    
    property var currentEntry: filteredModel.values[selectedIndex]
    property bool currentIsImage: currentEntry ? currentEntry.preview.startsWith("[[ binary data") : false

    signal closeRequested()

    Connections {
        target: Clipboard
        function onCopyFinished() {
            clipboardManager.closeRequested();
        }
    }

    onCurrentEntryChanged: {
	if (currentEntry && currentEntry.preview.startsWith("[[ binary data")) {
	    Clipboard.loadPreviewImage(currentEntry.id);
	}
    }

    function moveUp() {
        resultsList.decrementCurrentIndex();
        clipboardManager.selectedIndex = resultsList.currentIndex;
    }

    function moveDown() {
        resultsList.incrementCurrentIndex();
        clipboardManager.selectedIndex = resultsList.currentIndex;
    }

    function confirm() {
        const entry = filteredModel.values[selectedIndex];
        if (!entry) return;
        
        if (Clipboard.cliphistAvailable) {
            Clipboard.copy(entry.id);
        } else {
            clipboardManager.closeRequested();
        }
    }

    onSearchQueryChanged: {
        resultsList.currentIndex = 0;
        selectedIndex = resultsList.currentIndex;
    }

    ScriptModel {
        id: filteredModel
        objectProp: "id"
        values: {
            const src = Clipboard.rawEntries;
            const q = clipboardManager.searchQuery.trim().toLowerCase();
            
            if (q === "") return src;
            return src.filter(e => e.preview.toLowerCase().includes(q));
        }
    }

    ListView {
        id: resultsList
        anchors.fill: parent
        model: filteredModel
        clip: false
        spacing: 16
        boundsBehavior: Flickable.StopAtBounds
        currentIndex: clipboardManager.selectedIndex
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
            readonly property bool isImage: modelData.preview.startsWith("[[ binary data")

            width: 240
            height: 240
            radius: 12
            
            color: isCurrent ? Theme.base850 : Theme.base700
            border.color: isCurrent ? Theme.base500 : Theme.base600
            border.width: 1
            z: isCurrent ? 1 : 0.5

	    RectangularShadow {
		anchors.fill: parent
		radius: 12
		color: Theme.base900
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
                anchors.fill: parent
                anchors.margins: 16
                spacing: 8

                RowLayout {
                    Layout.fillWidth: true
                    Layout.alignment: Qt.AlignTop
                    spacing: 8

                    Text {
                        text: delegateRoot.isImage ? "" : ""
                        color: delegateRoot.isCurrent ? Theme.paper : Theme.base400
                        font.pixelSize: 14
                        font.family: Theme.fontSymbol
                    }

                    Text {
                        text: delegateRoot.isImage ? "Image Clipping" : "Text Clipping"
                        color: delegateRoot.isCurrent ? Theme.paper : Theme.base400
                        font.pixelSize: 12
                        font.family: Theme.fontSans
                        font.weight: Font.DemiBold
                        Layout.fillWidth: true
                    }
                }

                Item {
                    Layout.fillWidth: true
                    Layout.fillHeight: true
                    clip: true

                    Text {
                        anchors.fill: parent
                        visible: !delegateRoot.isImage
                        text: delegateRoot.modelData.preview
                        color: delegateRoot.isCurrent ? Theme.paper : Theme.base50
                        font.pixelSize: Theme.fontSize
                        font.family: Theme.fontMono
                        font.weight: Font.Light
                        opacity: delegateRoot.isCurrent ? 1.0 : 0.7
                        wrapMode: Text.WrapAnywhere
                        elide: Text.ElideRight
                    }

                    Image {
                        anchors.fill: parent
                        visible: delegateRoot.isImage && delegateRoot.isCurrent
                        source: (delegateRoot.isImage && delegateRoot.isCurrent) ? Clipboard.activePreviewPath : ""
                        fillMode: Image.PreserveAspectFit
                    }

                    Text {
                        anchors.centerIn: parent
                        visible: delegateRoot.isImage && !delegateRoot.isCurrent
                        text: "Preview Hidden"
                        color: Theme.base400
                        font.pixelSize: Theme.fontSize
                        font.family: Theme.fontSans
                    }
                }
            }

            MouseArea {
                anchors.fill: parent
                cursorShape: Qt.PointingHandCursor
                onClicked: {
                    if (clipboardManager.selectedIndex === delegateRoot.index) {
                        clipboardManager.confirm();
                    } else {
                        clipboardManager.selectedIndex = delegateRoot.index;
                    }
                }
            }
        }
    }
}
