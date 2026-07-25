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
        spacing: 0
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
		readonly property bool isCurrent: delegateWrapper.ListView.isCurrentItem
		readonly property bool isImage: modelData.preview.startsWith("[[ binary data")

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
                    anchors.fill: parent
                    anchors.margins: 16
                    spacing: 8

                    RowLayout {
			Layout.fillWidth: true
			Layout.alignment: Qt.AlignTop
			spacing: 8

			Text {
                            text: delegateRoot.isImage ? "" : ""
                            color: Theme.paper
                            font.pixelSize: 14
                            font.family: Theme.fontSymbol
			}

			Text {
                            text: delegateRoot.isImage ? "Image Clipping" : "Text Clipping"
                            color: Theme.paper
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
                            color: Theme.paper
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
}
