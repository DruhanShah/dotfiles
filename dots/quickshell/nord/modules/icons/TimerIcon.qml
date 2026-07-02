import QtQuick
import QtQuick.Shapes
import qs.modules.common

Item {
    id: root

    implicitWidth: 40
    implicitHeight: 20
    anchors.centerIn: parent

    property real timeRemaining: 0.65
    property bool timerActive: false

    Shape {
	preferredRendererType: Shape.CurveRenderer
	anchors.centerIn: parent
	width: 14
	height: 20
	visible: root.enabled

        ShapePath {
            fillColor: "transparent"
            strokeColor: Theme.paper
            strokeWidth: 2
            capStyle: ShapePath.RoundCap
            joinStyle: ShapePath.RoundJoin
	    PathAngleArc {
		centerX: -4; centerY: 11
		radiusX: 8; radiusY: 8
		startAngle: 0
		sweepAngle: 360
	    }
	    PathMove { x: -4; y: 1 }
	    PathLine { relativeX: 0; relativeY: -1 }
	    PathMove { x: -6; y: 0 }
	    PathLine { relativeX: 4; relativeY: 0 }
        }
	
        ShapePath {
            fillColor: root.timerActive ? "transparent" : Theme.base100
            strokeWidth: 0
            capStyle: ShapePath.RoundCap
            joinStyle: ShapePath.RoundJoin
	    startX: -4; startY: 11

	    PathAngleArc {
		centerX: -4; centerY: 11
		radiusX: 2; radiusY: 2
		startAngle: 0
		sweepAngle: 360
	    }
        }

        ShapePath {
            fillColor: root.timerActive ? Theme.base100 : Theme.base500
            strokeWidth: 0
            capStyle: ShapePath.RoundCap
            joinStyle: ShapePath.RoundJoin
	    startX: -4; startY: 11

	    PathLine { relativeX: 0; relativeY: -5 }
	    PathAngleArc {
		centerX: -4; centerY: 11
		radiusX: 6; radiusY: 6
		startAngle: - 90
		sweepAngle: - root.timeRemaining * 360
	    }
	    PathLine { x: -4;  y: 11 }
        }
    }
}
