import QtQuick
import QtQuick.Shapes
import QtQuick.Layouts
import qs.modules.common

Item {
    id: root

    property real brightness: 1.0

    implicitWidth: 24
    implicitHeight: 16
    Layout.alignment: Qt.AlignVCenter | Qt.AlignLeft
    
    Shape {
        anchors.fill: parent
        preferredRendererType: Shape.CurveRenderer

        ShapePath {
            strokeColor: Theme.fg
            strokeWidth: 2
            capStyle: ShapePath.RoundCap
	    joinStyle: ShapePath.RoundJoin
	    fillColor: "transparent"

	    PathAngleArc {
		centerX: root.width / 2
		centerY: root.height / 2
		radiusX: 6
		radiusY: 6
		startAngle: 0
		sweepAngle: 360
	    }
        }

        ShapePath {
            strokeColor: Theme.fg
            strokeWidth: root.brightness > 0.3 ? 3 : 0
            capStyle: ShapePath.RoundCap
	    joinStyle: ShapePath.RoundJoin
	    fillColor: "transparent"

	    startX: root.width / 2 - 10
	    startY: root.height / 2
	    PathLine { x: root.width / 2 - 12; y: root.height / 2 }
        }

        ShapePath {
            strokeColor: Theme.fg
            strokeWidth: root.brightness > 0.3 ? 3 : 0
            capStyle: ShapePath.RoundCap
	    joinStyle: ShapePath.RoundJoin
	    fillColor: "transparent"

	    startX: root.width / 2 - 10 / Math.sqrt(2)
	    startY: root.height / 2 - 10 / Math.sqrt(2)
	    PathLine { x: root.width / 2 - 12 / Math.sqrt(2); y: root.height / 2 - 12 / Math.sqrt(2) }
        }

        ShapePath {
            strokeColor: Theme.fg
            strokeWidth: root.brightness > 0.3 ? 3 : 0
            capStyle: ShapePath.RoundCap
	    joinStyle: ShapePath.RoundJoin
	    fillColor: "transparent"

	    startX: root.width / 2
	    startY: root.height / 2 - 10
	    PathLine { x: root.width / 2; y: root.height / 2 - 12 }
        }

        ShapePath {
            strokeColor: Theme.fg
            strokeWidth: root.brightness > 0.3 ? 3 : 0
            capStyle: ShapePath.RoundCap
	    joinStyle: ShapePath.RoundJoin
	    fillColor: "transparent"

	    startX: root.width / 2 + 10 / Math.sqrt(2)
	    startY: root.height / 2 - 10 / Math.sqrt(2)
	    PathLine { x: root.width / 2 + 12 / Math.sqrt(2); y: root.height / 2 - 12 / Math.sqrt(2) }
        }

        ShapePath {
            strokeColor: Theme.fg
            strokeWidth: root.brightness > 0.3 ? 3 : 0
            capStyle: ShapePath.RoundCap
	    joinStyle: ShapePath.RoundJoin
	    fillColor: "transparent"

	    startX: root.width / 2 + 10
	    startY: root.height / 2
	    PathLine { x: root.width / 2 + 12; y: root.height / 2 }
        }

        ShapePath {
            strokeColor: Theme.fg
            strokeWidth: root.brightness > 0.3 ? 3 : 0
            capStyle: ShapePath.RoundCap
	    joinStyle: ShapePath.RoundJoin
	    fillColor: "transparent"

	    startX: root.width / 2 + 10 / Math.sqrt(2)
	    startY: root.height / 2 + 10 / Math.sqrt(2)
	    PathLine { x: root.width / 2 + 12 / Math.sqrt(2); y: root.height / 2 + 12 / Math.sqrt(2) }
        }

        ShapePath {
            strokeColor: Theme.fg
            strokeWidth: root.brightness > 0.3 ? 3 : 0
            capStyle: ShapePath.RoundCap
	    joinStyle: ShapePath.RoundJoin
	    fillColor: "transparent"

	    startX: root.width / 2
	    startY: root.height / 2 + 10
	    PathLine { x: root.width / 2; y: root.height / 2 + 12 }
        }

        ShapePath {
            strokeColor: Theme.fg
            strokeWidth: root.brightness > 0.3 ? 3 : 0
            capStyle: ShapePath.RoundCap
	    joinStyle: ShapePath.RoundJoin
	    fillColor: "transparent"

	    startX: root.width / 2 - 10 / Math.sqrt(2)
	    startY: root.height / 2 + 10 / Math.sqrt(2)
	    PathLine { x: root.width / 2 - 12 / Math.sqrt(2); y: root.height / 2 + 12 / Math.sqrt(2) }
        }
    }
}
