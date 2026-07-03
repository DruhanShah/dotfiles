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

            startX: root.width / 2 + 6
	    startY: root.height / 2 - 2
	    PathLine { relativeX: 0; relativeY: 12 }
	    PathLine { relativeX: -16; relativeY: 0 }
	    PathLine { relativeX: 0; relativeY: -12 }
	    PathLine { relativeX: 16; relativeY: 0 }
	    PathLine { relativeX: -2; relativeY: 0 }
	    PathLine { relativeX: 0; relativeY: -2 }
	    PathAngleArc {
		centerX: root.width / 2 - 2
		centerY: root.height / 2 - 6
		radiusX: 6
		radiusY: 6
		startAngle: 0
		sweepAngle: -180
	    }
	    PathLine { relativeX: 0; relativeY: 2 }
        }
    }
}
