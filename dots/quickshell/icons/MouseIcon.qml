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

	ShapePath {
	    fillColor: Theme.paper
	    strokeColor: Theme.paper
	    strokeWidth: 2
	    startX: width / 2 - 3; startY: 6

	    PathAngleArc {
		centerX: width / 2 - 3
		centerY: 6
		radiusX: 8
		radiusY: 8
		startAngle: 180
		sweepAngle: 180
	    }
	    PathLine { relativeX: 0; relativeY: 8 }
	    PathAngleArc {
		centerX: width / 2 - 3
		centerY: 14
		radiusX: 8
		radiusY: 8
		startAngle: 0
		sweepAngle: 180
	    }
	    PathLine { relativeX: 0; relativeY: -8 }
	}

	ShapePath {
	    fillColor: "transparent"
	    strokeColor: Theme.base850
	    strokeWidth: 2
	    startX: width / 2 - 3; startY: -2

	    PathLine { relativeX: 0; relativeY: 10 }
	    PathMove { x: 0; relativeY: 0 }
	    PathLine { relativeX: width; relativeY: 0 }
	}

	ShapePath {
	    fillColor: "transparent"
	    strokeColor: Theme.base850
	    strokeWidth: 4
	    startX: width / 2 - 3; startY: 1

	    PathLine { relativeX: 0; relativeY: 2 }
	}
    }
}
