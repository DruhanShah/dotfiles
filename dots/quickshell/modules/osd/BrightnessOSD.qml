import QtQuick
import QtQuick.Layouts
import QtQuick.Shapes
import Quickshell
import Quickshell.Wayland
import qs.services
import qs.modules.common

Scope {
    id: root

    LazyLoader {
        active: Brightness.brightnessChanged

        PanelWindow {
	    anchors {
		top: true
		right: true
	    }
	    margins {
		top: 20
		right: 20
	    }
            exclusiveZone: 0
            aboveWindows: WlrLayer.Overlay

            implicitWidth: 200
            implicitHeight: 40
            color: "transparent"

            mask: Region {}

            Rectangle {
                anchors.fill: parent
                radius: 8
                color: Theme.base100

                RowLayout {
                    anchors {
                        fill: parent
                        leftMargin: 12
                        rightMargin: 12
                    }
		    spacing: 12

                    Text {
                        text: Brightness.brightnessPercent() < 0.5 ? "󰃞" : "󰃠"
			width: 32
                        font.pixelSize: 20
                        font.family: Theme.fontSymbol
                        color: Theme.black
                    }

                    Rectangle {
                        Layout.fillWidth: true

                        implicitHeight: 8
                        radius: 4
                        color: Theme.base300

                        Rectangle {
                            anchors {
                                left: parent.left
                                top: parent.top
                                bottom: parent.bottom
                            }

                            implicitWidth: parent.width * Brightness.brightnessPercent()
                            radius: parent.radius
                            color: Theme.base700
                        }
                    }
                }
            }
        }
    }
}
