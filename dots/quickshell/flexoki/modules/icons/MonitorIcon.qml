import QtQuick
import QtQuick.Shapes
import qs.modules.common

Item {
    id: root

    implicitWidth: 40
    implicitHeight: 20
    anchors.centerIn: parent

    Rectangle {
	width: 24
	height: 16
	anchors {
	    left: parent.left
	    leftMargin: 5
	}

	color: "transparent"
	border.width: 2
	border.color: Theme.paper
	radius: 2
    }
    
    Shape {
	preferredRendererType: Shape.CurveRenderer

	ShapePath {
	    fillColor: "transparent"
	    strokeColor: Theme.paper
	    strokeWidth: 4
	    startX: (width - 6) / 2; startY: 18
	    PathLine { relativeX: 0;  relativeY: 1 }
	}

	ShapePath {
	    fillColor: "transparent"
	    strokeColor: Theme.paper
	    strokeWidth: 2
	    capStyle: ShapePath.RoundCap
	    joinStyle: ShapePath.RoundJoin

	    startX: 11; startY: 20
	    PathLine { relativeX: 12;  relativeY: 0 }
	}
    }
}
