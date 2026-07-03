import QtQuick
import QtQuick.Layouts
import QtQuick.Shapes

import qs.modules.common

Rectangle {
    id: root

    property string type: ""
    property bool enabled: true

    signal clicked()

    Layout.fillWidth: true
    height: 52
    radius: 12
    color: Theme.bg_dim
    border.color: Theme.bg2
    border.width: 1

    Behavior on color {
	ColorAnimation {
	    duration: 100
	}
    }

    Shape {
	preferredRendererType: Shape.CurveRenderer
	anchors.centerIn: parent
	visible: root.type == "Start"

	ShapePath {
	    fillColor: root.enabled ? Theme.fg : Theme.bg2
	    strokeColor: root.enabled ? Theme.fg : Theme.bg2
	    strokeWidth: 5
	    capStyle: ShapePath.RoundCap
	    joinStyle: ShapePath.RoundJoin

	    startX: 4; startY: 2
	    PathLine { relativeX: 12; relativeY: 6 }
	    PathLine { relativeX: -12; relativeY: 6 }
	    PathLine { relativeX: 0; relativeY: -12 }
	}
    }

    Shape {
	preferredRendererType: Shape.CurveRenderer
	anchors.centerIn: parent
	visible: root.type == "Pause"

	ShapePath {
	    fillColor: root.enabled ? Theme.fg : Theme.bg2
	    strokeColor: root.enabled ? Theme.fg : Theme.bg2
	    strokeWidth: 5
	    capStyle: ShapePath.RoundCap
	    joinStyle: ShapePath.RoundJoin

	    PathMove { x: -4; y: 4 }
	    PathLine { relativeX: 0; relativeY: 12 }
	    PathMove { x: 4; y: 4 }
	    PathLine { relativeX: 0; relativeY: 12 }
	}
    }

    Shape {
	preferredRendererType: Shape.CurveRenderer
	anchors.centerIn: parent
	visible: root.type == "Reset"

	ShapePath {
	    fillColor: "transparent"
	    strokeColor: root.enabled ? Theme.fg : Theme.bg2
	    strokeWidth: 3
	    capStyle: ShapePath.RoundCap
	    joinStyle: ShapePath.RoundJoin

	    PathAngleArc {
		centerX: 10; centerY: 12
		radiusX: 8; radiusY: 8
		startAngle: 180
		sweepAngle: -290
	    }
	    PathLine { relativeX: 3; relativeY: 3 }
	    PathMove { relativeX: -3; relativeY: -3 }
	    PathLine { relativeX: 3; relativeY: -3 }
	}
    }

    MouseArea {
	anchors.fill: parent
	cursorShape: root.enabled ? Qt.PointingHandCursor : Qt.ArrowCursor
	onClicked: {
	    if (!root.enabled) return;
	    root.clicked();
	}
    }
}
