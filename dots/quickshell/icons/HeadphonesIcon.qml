import QtQuick
import QtQuick.Shapes

import qs.services

Item {
    id: root

    implicitWidth: 40
    implicitHeight: 20
    anchors.centerIn: parent

    Shape {
	preferredRendererType: Shape.CurveRenderer
	anchors.centerIn: parent
	width: 14
	height: 20
	scale: 0.9
	visible: root.enabled

        ShapePath {
            fillColor: Theme.paper
            strokeColor: Theme.paper
            strokeWidth: 5
            capStyle: ShapePath.RoundCap
            joinStyle: ShapePath.RoundJoin
            startX: 8; startY: 20
            PathLine { x: 8;  y: 4 }
	    PathAngleArc {
		centerX: 12; centerY: 5
		radiusX: 4; radiusY: 4
		startAngle: 0
		sweepAngle: 360
	    }
        }

        ShapePath {
            fillColor: Theme.base800
            strokeColor: Theme.base800
            strokeWidth: 3
            capStyle: ShapePath.RoundCap
            joinStyle: ShapePath.RoundJoin
            startX: 15; startY: 4
            PathLine { x: 15;  y: 6 }
        }

        ShapePath {
            fillColor: Theme.paper
            strokeColor: Theme.paper
            strokeWidth: 5
            capStyle: ShapePath.RoundCap
            joinStyle: ShapePath.RoundJoin
            startX: 0; startY: 20
            PathLine { x: 0;  y: 4 }
	    PathAngleArc {
		centerX: -4; centerY: 5
		radiusX: 4; radiusY: 4
		startAngle: 0
		sweepAngle: 360
	    }
        }

        ShapePath {
            fillColor: Theme.base800
            strokeColor: Theme.base800
            strokeWidth: 3
            capStyle: ShapePath.RoundCap
            joinStyle: ShapePath.RoundJoin
            startX: -7; startY: 4
            PathLine { x: -7;  y: 6 }
        }
    }
}
