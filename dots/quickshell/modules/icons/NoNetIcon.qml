import QtQuick
import QtQuick.Shapes

import qs.modules.common

Item {
    implicitWidth: 30
    implicitHeight: 16

    readonly property real cx: width / 2
    readonly property real cy: height - 2
    readonly property real r: Math.min(width, height) * 1.1

    Shape {
        anchors.fill: parent

        ShapePath {
            strokeColor: Theme.paper
            strokeWidth: 2
            fillColor: "transparent"
            capStyle: ShapePath.RoundCap

            PathAngleArc {
                centerX: cx
                centerY: cy
                radiusX: r
                radiusY: r
                startAngle: 180
                sweepAngle: 180
            }
        }

        ShapePath {
            strokeColor: Theme.red
            strokeWidth: 2
            fillColor: "transparent"
            capStyle: ShapePath.RoundCap

            PathMove { x: cx - 7; y: 3 }
            PathLine { x: cx + 7; y: 13 }
        }
    }

    Rectangle {
        width: 4
        height: 4
        radius: 2
        color: Theme.paper
        opacity: 0.4
        anchors.horizontalCenter: parent.horizontalCenter
        anchors.bottom: parent.bottom
    }
}
