import QtQuick
import QtQuick.Shapes
import qs.modules.common

Item {
    id: root

    property real volume: 1.0
    property bool muted: false

    implicitWidth: 24
    implicitHeight: 16
    anchors.left: parent.left
    anchors.verticalCenter: parent.verticalCenter
    
    Shape {
        anchors.fill: parent
        preferredRendererType: Shape.CurveRenderer

        ShapePath {
            strokeColor: Theme.base100
            strokeWidth: 5
            capStyle: ShapePath.RoundCap
            joinStyle: ShapePath.RoundJoin
            fillColor: Theme.base100

            startX: 2
	    startY: root.height / 2 - 3
	    PathLine { x: 5; y: root.height / 2 - 3 }
	    PathLine { x: 10; y: root.height / 2 - 6 }
	    PathLine { x: 10; y: root.height / 2 + 6 }
	    PathLine { x: 5; y: root.height / 2 + 3 }
	    PathLine { x: 2; y: root.height / 2 + 3 }
	    PathLine { x: 2; y: root.height / 2 - 3 }
        }

	ShapePath {
	    strokeColor: Theme.base100
	    strokeWidth: root.volume > 0 && !root.muted ? 2 : 0
	    capStyle: ShapePath.RoundCap
	    joinStyle: ShapePath.RoundJoin
	    fillColor: "transparent"

	    PathAngleArc {
		centerX: 14
		centerY: root.height / 2
		radiusX: 4
		radiusY: 4
		startAngle: -60
		sweepAngle: 120
	    }
        }

	ShapePath {
	    strokeColor: Theme.base100
	    strokeWidth: root.volume > 0.4 && !root.muted ? 2 : 0
	    capStyle: ShapePath.RoundCap
	    joinStyle: ShapePath.RoundJoin
	    fillColor: "transparent"

	    PathAngleArc {
		centerX: 16
		centerY: root.height / 2
		radiusX: 6
		radiusY: 6
		startAngle: -60
		sweepAngle: 120
	    }
        }

	ShapePath {
	    strokeColor: Theme.base100
	    strokeWidth: root.volume >= 0.7 && !root.muted ? 2 : 0
	    capStyle: ShapePath.RoundCap
	    joinStyle: ShapePath.RoundJoin
	    fillColor: "transparent"

	    PathAngleArc {
		centerX: 18
		centerY: root.height / 2
		radiusX: 8
		radiusY: 8
		startAngle: -60
		sweepAngle: 120
	    }
        }

	ShapePath {
	    strokeColor: Theme.base100
	    strokeWidth: root.muted ? 2 : 0
	    capStyle: ShapePath.RoundCap
	    joinStyle: ShapePath.RoundJoin
	    fillColor: "transparent"

	    startX: 15
	    startY: root.height / 2 - 3
	    PathLine { x: 21; y: root.height / 2 + 3 }
	    PathLine { x: 18; y: root.height / 2 }
	    PathLine { x: 21; y: root.height / 2 - 3 }
	    PathLine { x: 15; y: root.height / 2 + 3 }
        }
    }
}
