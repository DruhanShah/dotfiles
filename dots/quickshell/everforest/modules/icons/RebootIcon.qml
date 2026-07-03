import QtQuick
import QtQuick.Shapes

import qs.modules.common

Item {
    id: root

    implicitWidth: 30
    implicitHeight: 16
    anchors.centerIn: parent

    Shape {
        anchors.fill: parent
        preferredRendererType: Shape.CurveRenderer

        ShapePath {
            strokeColor: Theme.grey2
            strokeWidth: 3
	    capStyle: ShapePath.RoundCap
	    joinStyle: ShapePath.RoundJoin
            fillColor: "transparent"

            startX: root.width / 2
	    startY: root.height / 2
	    PathAngleArc {
		centerX: root.width / 2
		centerY: root.height / 2
		radiusX: 8
		radiusY: 8
		startAngle: -30
		sweepAngle: 300
	    }
	    PathLine {
		relativeX: -4
		relativeY: -2
	    }
	    PathLine {
		relativeX: 4
		relativeY: 2
	    }
	    PathLine {
		relativeX: -2
		relativeY: 4
	    }
        }
    }
}
