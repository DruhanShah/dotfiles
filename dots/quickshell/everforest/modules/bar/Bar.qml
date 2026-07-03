import QtQuick
import QtQuick.Layouts
import Quickshell
import qs.modules.common

LazyLoader {
    active: true

    Variants {
        model: Quickshell.screens
        delegate: PanelWindow {
            id: bar
            required property var modelData
            screen: modelData

            // 1. Span the screen width to catch empty-space clicks
            anchors {
                top: true
                left: true
                right: true
            }

            exclusiveZone: 54
            color: "transparent"

            property int islandState: 0 // 0 = Collapsed, 1 = Hovered, 2 = Expanded
            property Component activeDetail: null
            
            property int windowHeight: 70
            height: windowHeight

            function openDetail(component) {
                activeDetail = component
                islandState = 2
                windowHeight = detailLoader.implicitHeight + 32
                bar.requestActivate()
            }

            function closeDetail() {
                activeDetail = null
                islandState = hoverArea.containsMouse ? 1 : 0
                shrinkTimer.start()
            }

            Timer {
                id: shrinkTimer
                interval: 250
                onTriggered: bar.windowHeight = 70
            }

            // Dismissal area
            MouseArea {
                anchors.fill: parent
                acceptedButtons: Qt.LeftButton
                onClicked: {
                    if (bar.islandState === 2) bar.closeDetail()
                }
            }

            Rectangle {
                id: islandRect
                anchors.top: parent.top
                anchors.topMargin: 12
                anchors.horizontalCenter: parent.horizontalCenter
                
                color: Theme.bg_dim
                radius: 16
		border.color: Theme.grey2
		border.width: 1

                width: contentContainer.implicitWidth + 32
                height: contentContainer.implicitHeight + 16
                
                Behavior on width { NumberAnimation { duration: 250; easing.type: Easing.OutExpo } }
                Behavior on height { NumberAnimation { duration: 250; easing.type: Easing.OutExpo } }

                MouseArea {
		    id: hoverArea
                    anchors.fill: parent
                    hoverEnabled: true
                    
                    onHoveredChanged: {
                        if (bar.islandState === 0 && containsMouse) bar.islandState = 1
                        else if (bar.islandState === 1 && !containsMouse) bar.islandState = 0
                    }
                }

                Item {
                    id: contentContainer
                    anchors.centerIn: parent
                    
                    implicitWidth: bar.islandState === 2 ? detailLoader.implicitWidth : widgetRow.implicitWidth
                    implicitHeight: bar.islandState === 2 ? detailLoader.implicitHeight : widgetRow.implicitHeight
                    
                    // Minimized / Hovered State
                    RowLayout {
                        id: widgetRow
                        anchors.centerIn: parent
                        visible: bar.islandState !== 2
                        spacing: 12

                        RowLayout {
                            visible: bar.islandState >= 1
                            spacing: 12

			    PowerWidget {}

			    Rectangle {}
                        }
			
                        DateTimeWidget { onRequestedDetail: (comp) => bar.openDetail(comp) }

                        RowLayout {
                            visible: bar.islandState >= 1
                            spacing: 12

			    Rectangle {}
                            
                            BatteryWidget { onRequestedDetail: (comp) => bar.openDetail(comp) }
                        }
                    }

                    // Expanded State
                    Loader {
                        id: detailLoader
                        anchors.centerIn: parent
                        visible: bar.islandState === 2
                        sourceComponent: bar.activeDetail
                    }
                }
            }
        }
    }
}
