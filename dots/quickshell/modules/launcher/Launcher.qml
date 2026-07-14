import Quickshell
import Quickshell.Io
import Quickshell.Wayland
import QtQuick
import QtQuick.Controls
import QtQuick.Layouts
import QtQuick.Effects
import QtQuick.Shapes

import qs.services
import qs.widgets

Scope {
    id: root

    IpcHandler {
        target: "launcher"
        function toggle(): void {
            launcherPanel.visible = !launcherPanel.visible;
            if (launcherPanel.visible) {
                searchInput.text = "";
                tabBar.currentIndex = 0; // Default to Apps tab
                searchInput.forceActiveFocus();
            }
        }
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

        Rectangle {
            anchors.fill: parent
            anchors.topMargin: 42
            color: Theme.base300
            opacity: 0.3

            MouseArea { 
                anchors.fill: parent;
                onClicked: launcherPanel.visible = false 
            }
        }

        RectangularShadow {
            anchors.fill: launcherBase
            color: Theme.base900
            opacity: 0.5
            offset { x: 0; y: 22 }
            blur: 50
            spread: 4
            radius: launcherBase.radius
        }

        Rectangle {
            id: launcherBase

            anchors {
                horizontalCenter: parent.horizontalCenter
                verticalCenter: parent.verticalCenter
            }
            
            width: 1080
            height: 480
            radius: 12
            color: Theme.base800
            border.color: Theme.base700
            border.width: 1
            clip: true

            ColumnLayout {
                id: launcherContent
                anchors {
                    fill: parent
                    topMargin: 24
                }
                spacing: 24

                Tabs {
                    id: tabBar
                    Layout.alignment: Qt.AlignHCenter
                    Layout.fillWidth: false
                    Layout.preferredWidth: 640
                    
                    // Note: Characters tab remains commented out as in original
                    model: ["Apps", "Clipboard", "Calculator" /*, "Characters"*/]
                }

                Rectangle {
                    Layout.alignment: Qt.AlignHCenter
                    Layout.preferredWidth: 640
                    height: 52
                    radius: 26
                    color: Theme.base850
                    border.color: Theme.base600
                    border.width: 1

                    RowLayout {
                        anchors.fill: parent
                        anchors.leftMargin: 26
                        anchors.rightMargin: 26
                        spacing: 12

			Item {
			    implicitWidth: 24
			    implicitHeight: 24

			    Shape {
				anchors.fill: parent
				preferredRendererType: Shape.CurveRenderer
				
				ShapePath {
				    strokeColor: Theme.base500
				    strokeWidth: 2
				    fillColor: "transparent"
				    capStyle: ShapePath.RoundCap
				    joinStyle: ShapePath.RoundJoin

				    startX: 9 + 8 / Math.sqrt(2)
				    startY: 9 + 8 / Math.sqrt(2)
				    PathAngleArc {
					centerX: 9
					centerY: 9
					radiusX: 8
					radiusY: 8
					startAngle: 45
					sweepAngle: 360
				    }
				    PathLine { relativeX: 8; relativeY: 8 }
				}
			    }
			}

                        TextInput {
                            id: searchInput
                            Layout.fillWidth: true
                            Layout.alignment: Qt.AlignVCenter
                            color: Theme.paper
                            font.pixelSize: Theme.fontSize + 8
                            font.family: Theme.fontSans
                            clip: true
                            focus: true

                            Keys.onEscapePressed: launcherPanel.visible = false

                            Keys.onPressed: event => {
                                // Keyboard shortcuts route by index now
                                if (event.key === Qt.Key_C && event.modifiers === Qt.ControlModifier) {
                                    event.accepted = true;
                                    tabBar.currentIndex = 1;
                                } else if (event.key === Qt.Key_A && event.modifiers === Qt.ControlModifier) {
                                    event.accepted = true;
                                    tabBar.currentIndex = 0;
                                } else if (event.key === Qt.Key_Q && event.modifiers === Qt.ControlModifier) {
                                    event.accepted = true;
                                    tabBar.currentIndex = 2;
                                } /* else if (event.key === Qt.Key_S && event.modifiers === Qt.ControlModifier) {
                                    event.accepted = true;
                                    tabBar.currentIndex = 3;
                                } */

                                if (event.key === Qt.Key_Left ||
                                    (event.key === Qt.Key_P && event.modifiers === Qt.ControlModifier)) {
                                    event.accepted = true;
                                    activePanelLoader.item?.moveUp?.();
                                } else if (event.key === Qt.Key_Right
                                           || (event.key === Qt.Key_N && event.modifiers === Qt.ControlModifier)) {
                                    event.accepted = true;
                                    activePanelLoader.item?.moveDown?.();
                                } else if (event.key === Qt.Key_Return || event.key === Qt.Key_Enter) {
                                    event.accepted = true;
                                    activePanelLoader.item?.confirm?.();
                                }
                            }
                        }

                        Text {
                            text: ""
                            color: searchInput.text !== "" ? Theme.base500 : "transparent"
                            font.pixelSize: Theme.fontSize
                            font.family: Theme.fontSymbol

                            MouseArea {
                                anchors.fill: parent
                                cursorShape: Qt.PointingHandCursor
                                onClicked: searchInput.text = ""
                                visible: searchInput.text !== ""
                            }
                        }
                    }
                }

                Loader {
                    id: activePanelLoader
                    Layout.fillWidth: true
                    Layout.fillHeight: true
                    Layout.topMargin: 4

                    sourceComponent: {
                        switch (tabBar.currentIndex) {
                            case 0: return appLauncherComp;
                            case 1: return clipboardComp;
                            case 2: return calculatorComp;
                            /* case 3: return characterComp; */
                            default: return null;
                        }
                    }

                    onItemChanged: {
                        if (item) item.searchQuery = Qt.binding(() => searchInput.text);
                    }
                }
            }
        }
    }

    Component {
        id: appLauncherComp
        AppLauncher {
            onLaunchRequested: launcherPanel.visible = false
        }
    }

    Component {
        id: clipboardComp
        ClipboardManager {
            onCloseRequested: launcherPanel.visible = false
        }
    }

    Component {
        id: calculatorComp
        Calculator {
            onCloseRequested: launcherPanel.visible = false
        }
    }

    /* Component { */
    /* id: characterComp */
    /* CharSelector { */
    /* onCloseRequested: launcherPanel.visible = false */
    /* } */
    /* } */
}
