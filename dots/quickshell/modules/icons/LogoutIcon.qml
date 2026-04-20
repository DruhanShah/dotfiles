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
            strokeColor: Theme.base300
            strokeWidth: 3
	    capStyle: ShapePath.RoundCap
	    joinStyle: ShapePath.RoundJoin
            fillColor: "transparent"

            startX: root.width / 2 + 2
	    startY: root.height / 2 - 5
	    PathLine { relativeX: 0; relativeY: -4 }
	    PathLine { relativeX: -10; relativeY: 0 }
	    PathLine { relativeX: 0; relativeY: 18 }
	    PathLine { relativeX: 10; relativeY: 0 }
	    PathLine { relativeX: 0; relativeY: -4 }
        }

        ShapePath {
            strokeColor: Theme.base300
            strokeWidth: 3
	    capStyle: ShapePath.RoundCap
	    joinStyle: ShapePath.RoundJoin
            fillColor: "transparent"

            startX: root.width / 2
	    startY: root.height / 2
	    PathLine { relativeX: 12; relativeY: 0 }
	    PathLine { relativeX: -4; relativeY: -4 }
	    PathLine { relativeX: 4; relativeY: 4 }
	    PathLine { relativeX: -4; relativeY: 4 }
        }
    }
}
