import QtQuick
import QtQuick.Shapes

import qs.services

Item {
    id: root

    implicitWidth: 30
    implicitHeight: 16
    anchors.centerIn: parent

    Shape {
        anchors.fill: parent
        preferredRendererType: Shape.CurveRenderer

        ShapePath {
            strokeColor: Theme.base300
            strokeWidth: 3
	    capStyle: ShapePath.RoundCap
            fillColor: "transparent"

            startX: root.width / 2
	    startY: root.height / 2
	    PathAngleArc {
		centerX: root.width / 2
		centerY: root.height / 2
		radiusX: 8
		radiusY: 8
		startAngle: -45
		sweepAngle: 270
	    }
        }

        ShapePath {
            strokeColor: Theme.base300
            strokeWidth: 3
	    capStyle: ShapePath.RoundCap
            fillColor: "transparent"

            startX: root.width / 2
	    startY: root.height / 2
	    PathLine {
		relativeX: 0
		relativeY: -8
	    }
        }
    }
}
