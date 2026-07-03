import QtQuick
import QtQuick.Shapes

import qs.modules.common

Item {
    implicitWidth: 30
    implicitHeight: 16
    anchors.centerIn: parent

    Shape {
        anchors.fill: parent
	anchors.topMargin: -1
	anchors.leftMargin: -3
	preferredRendererType: Shape.CurveRenderer

        ShapePath {
            strokeColor: Theme.fg
            strokeWidth: 0
            fillColor: Theme.fg
            capStyle: ShapePath.RoundCap
            joinStyle: ShapePath.RoundJoin

	    startX: 4; startY: 2
	    PathLine { x: width - 4; y: 2 }
	    PathLine { x: width - 4; y: height - 2 }
	    PathLine { x: width/2 + 5; y: height - 2 }
	    PathLine { x: width/2 + 5; y: height + 2 }
	    PathLine { x: width/2 - 5; y: height + 2 }
	    PathLine { x: width/2 - 5; y: height - 2 }
	    PathLine { x: 4; y: height - 2 }
	    PathLine { x: 4; y: 2 }
        }

        ShapePath {
            strokeColor: Theme.bg0
            strokeWidth: 2
            fillColor: "transparent"
            capStyle: ShapePath.RoundCap
            joinStyle: ShapePath.RoundJoin

	    startX: 0; startY: 2
	    PathMove { relativeX: 7; y: 2 }
	    PathLine { relativeX: 0; relativeY: height / 2 - 4 }
	    PathMove { relativeX: 4; y: 2 }
	    PathLine { relativeX: 0; relativeY: height / 2 - 4 }
	    PathMove { relativeX: 4; y: 2 }
	    PathLine { relativeX: 0; relativeY: height / 2 - 4 }
	    PathMove { relativeX: 4; y: 2 }
	    PathLine { relativeX: 0; relativeY: height / 2 - 4 }
	    PathMove { relativeX: 4; y: 2 }
	    PathLine { relativeX: 0; relativeY: height / 2 - 4 }
        }
    }
}
