import QtQuick
import QtQuick.Layouts
import Quickshell
import Quickshell.Wayland

import qs.services
import qs.modules.common
import qs.modules.icons
import qs.widgets

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

		    OSDSlider {
			value: Audio.volume
			barColor: Audio.sinkMuted ? Theme.redBright : Theme.blueBright
		    }
                }
            }
        }
    }
}
