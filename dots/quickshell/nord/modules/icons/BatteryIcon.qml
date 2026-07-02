import QtQuick
import QtQuick.Shapes
import qs.modules.common

Item {
    id: root

    property real percentage: 1.0
    property bool charging: false

    implicitWidth: 30
    implicitHeight: 16
    anchors.centerIn: parent

    readonly property color _fillColor: {
        if (charging) return Theme.greenBright
        if (percentage < 0.20) return Theme.redBright
        return Theme.base100
    }
    
    Rectangle {
	anchors.left: parent.left
	width: root.width - 2
	height: root.height
	color: "transparent"
	radius: 4
	border.width: 2
	border.color: Theme.base300
    }
    
    Shape {
        anchors.fill: parent
        preferredRendererType: Shape.CurveRenderer

        ShapePath {
            strokeColor: Theme.base300
            strokeWidth: 0
            fillColor: Theme.base300

            startX: root.width - 5
	    startY: root.height / 2 - 3
	    PathAngleArc {
		centerX: root.width - 2
		centerY: root.height / 2
		radiusX: 4
		radiusY: 4
		startAngle: -60
		sweepAngle: 120
	    }
        }
    }

    Rectangle {
        x: 4
        y: 4
        width: Math.max(0, (root.width - 10) * root.percentage)
        height: root.height - 8
        radius: 1
        color: root._fillColor
    }
}
