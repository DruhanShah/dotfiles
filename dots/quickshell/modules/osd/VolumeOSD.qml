import QtQuick
import QtQuick.Layouts
import Quickshell
import Quickshell.Wayland
import qs.services
import qs.modules.common

Scope {
    id: root

    LazyLoader {
        active: Audio.sinkChanged

        PanelWindow {
	    anchors {
		top: true
		right: true
	    }
	    margins {
		top: 12
		right: 12
	    }
            exclusiveZone: 0
            aboveWindows: WlrLayer.Overlay

            implicitWidth: 240
            implicitHeight: 60
            color: "transparent"

            mask: Region {}

            Rectangle {
                anchors.fill: parent
                radius: 12
                color: Theme.base100
		border.color: Theme.base300
		border.width: 2

                RowLayout {
                    anchors {
                        fill: parent
                        leftMargin: 12
                        rightMargin: 12
                    }
		    spacing: 12

                    Text {
                        text: qsTr(Audio.sinkMuted ? "󰝟" :
				   Audio.volume < 0.3 ? "󰕿" :
				   Audio.volume < 0.7 ? "󰖀" : "󰕾")
			width: 32
                        font.pixelSize: 24
                        font.family: Theme.fontSymbol
                        color: Theme.base800
                    }

                    Rectangle {
                        Layout.fillWidth: true

                        implicitHeight: 8
                        radius: 4
                        color: Theme.base150

                        Rectangle {
                            anchors {
                                left: parent.left
                                top: parent.top
                                bottom: parent.bottom
                            }

                            implicitWidth: parent.width * (Audio.volume < 1.0 ? Audio.volume : 1.0)
                            radius: parent.radius
                            color: Theme.base700
                        }
                    }
                }
            }
        }
    }
}
