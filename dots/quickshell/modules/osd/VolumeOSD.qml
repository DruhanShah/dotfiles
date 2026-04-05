import QtQuick
import QtQuick.Layouts
import Quickshell
import Quickshell.Wayland
import qs.services
import qs.modules.common
import qs.modules.icons

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
                color: Theme.base850

                RowLayout {
                    anchors {
                        fill: parent
                        leftMargin: 12
                        rightMargin: 12
                    }
		    spacing: 12

		    VolumeIcon {
			volume: Audio.volume
			muted: Audio.sinkMuted
		    }

                    Rectangle {
                        Layout.fillWidth: true

                        implicitHeight: 8
                        radius: 4
                        color: Theme.base700

                        Rectangle {
                            anchors {
                                left: parent.left
                                top: parent.top
                                bottom: parent.bottom
                            }

                            implicitWidth: parent.width * (Audio.volume < 1.0 ? Audio.volume : 1.0)
                            radius: parent.radius
                            color: Audio.sinkMuted ? Theme.redBright : Theme.blueBright
                        }
                    }
                }
            }
        }
    }
}
