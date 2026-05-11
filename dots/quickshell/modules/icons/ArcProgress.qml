import QtQuick
import QtQuick.Shapes
import qs.modules.common

Item {
    property real  progress:   1.0
    property real  size:       120
    property real  trackWidth: 7
    property color arcColor:   Theme.blue

    width: size; height: size

    readonly property real _r: size / 2 - trackWidth / 2

    Shape {
        anchors.fill: parent

        ShapePath {
	    strokeColor: Theme.base150
	    strokeWidth: trackWidth
	    fillColor: "transparent"
	    capStyle: ShapePath.RoundCap

            PathAngleArc {
		centerX: size/2; centerY: size/2
		radiusX: _r; radiusY: _r
		startAngle: -90; sweepAngle: 360
	    }
        }

        ShapePath {
            strokeColor: arcColor
	    strokeWidth: trackWidth
	    fillColor: "transparent"
	    capStyle: ShapePath.RoundCap

            PathAngleArc {
		centerX: size/2; centerY: size/2
		radiusX: _r; radiusY: _r
		startAngle: -90; sweepAngle: 360 * progress
	    }
        }
    }
}
