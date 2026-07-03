import QtQuick
import QtQuick.Shapes
import qs.modules.common

Item {
    id: root

    property bool enabled: false

    implicitWidth: 30
    implicitHeight: 16
    anchors.centerIn: parent

    Shape {
        anchors.fill: parent
        preferredRendererType: Shape.CurveRenderer

        ShapePath {
            strokeColor: root.enabled ? Theme.fg : Theme.grey2
	    strokeWidth: 2
	    capStyle: ShapePath.RoundCap
	    joinStyle: ShapePath.RoundJoin
            fillColor: "transparent"

	    startX: root.width / 2 - 4
	    startY: root.height / 2 - 4
	    PathLine { x: root.width / 2 + 4; y: root.height / 2 + 4 }
	    PathLine { x: root.width / 2; y: root.height / 2 + 8 }
	    PathLine { x: root.width / 2; y: root.height / 2 - 8 }
	    PathLine { x: root.width / 2 + 4; y: root.height / 2 - 4 }
	    PathLine { x: root.width / 2 - 4; y: root.height / 2 + 4 }
        }
    }
}
