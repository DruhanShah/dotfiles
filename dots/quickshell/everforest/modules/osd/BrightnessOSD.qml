import QtQuick
import QtQuick.Layouts
import QtQuick.Shapes
import Quickshell
import Quickshell.Wayland

import qs.services
import qs.modules.common
import qs.modules.icons
import qs.widgets

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
                color: Theme.bg0

                RowLayout {
                    anchors {
                        fill: parent
                        leftMargin: 12
                        rightMargin: 12
                    }
		    spacing: 12

		    BrightnessIcon {
			brightness: Brightness.brightnessPercent()
		    }

		    OSDSlider {
			value: Brightness.brightnessPercent()
			barColor: Theme.purple
		    }
                }
            }
        }
    }
}
