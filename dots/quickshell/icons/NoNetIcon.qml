import QtQuick
import QtQuick.Shapes

import qs.services

Item {
    id: root
    
    readonly property real cx: width / 2 - 4
    readonly property real cy: height - 5
    readonly property real r: 9

    implicitWidth: 30
    implicitHeight: 16
    anchors.centerIn: parent

    Shape {
        anchors.fill: parent
	preferredRendererType: Shape.CurveRenderer

        ShapePath {
            strokeColor: "transparent"
            strokeWidth: 0
            fillColor: Theme.base700
            capStyle: ShapePath.RoundCap
	    joinStyle: ShapePath.RoundJoin

	    startX: cx
	    startY: cy
	    PathLine {
		x: cx + r * Math.sin(Math.PI/180 * 75/2)
		y: cy - r * Math.cos(Math.PI/180 * 75/2) + 1
	    }
	    PathAngleArc {
                centerX: cx
                centerY: cy
                radiusX: r
                radiusY: r
                startAngle: -(90 - 75/2)
                sweepAngle: -75
            }
	    PathLine {
		x: cx
		y: cy
	    }
        }

        ShapePath {
            strokeColor: Theme.base600
            strokeWidth: 2
            fillColor: "transparent"
            capStyle: ShapePath.RoundCap
	    joinStyle: ShapePath.RoundJoin

	    startX: cx
	    startY: cy + 3 * 2 * Math.cos(Math.PI*75/360)
	    PathLine {
		x: cx + (r + 3 * (1 + 2*Math.cos(Math.PI*75/360))) * Math.sin(Math.PI * 75 / 360)
		y: cy - (r + 3 * (1 + 2*Math.cos(Math.PI*75/360))) * Math.cos(Math.PI * 75 / 360) + 3 * 2 * Math.cos(Math.PI*75/360)
	    }
	    PathAngleArc {
                centerX: cx
                centerY: cy + 3 * 2 * Math.cos(Math.PI*75/360)
                radiusX: (r + 3 * (1 + 2 * Math.cos(Math.PI*75/360)))
                radiusY: (r + 3 * (1 + 2 * Math.cos(Math.PI*75/360)))
                startAngle: -(90 - 75/2)
                sweepAngle: -75
            }
	    PathLine {
		x: cx
		y: cy + 3 * 2 * Math.cos(Math.PI*75/360)
	    }
        }
    }
}
