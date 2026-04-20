import QtQuick
import QtQuick.Shapes

import qs.modules.common

Item {
    implicitWidth: 30
    implicitHeight: 16

    Shape {
        anchors.fill: parent

        ShapePath {
            strokeColor: Theme.paper
            strokeWidth: 2
            fillColor: "transparent"
            capStyle: ShapePath.RoundCap
            joinStyle: ShapePath.RoundJoin

            PathMove { x: 15; y: 0 }
            PathLine { x: 15; y: 6 }

            PathMove { x: 7;  y: 6 }
            PathLine { x: 23; y: 6 }

            PathMove { x: 9;  y: 6 }
            PathLine { x: 9;  y: 10 }

            PathMove { x: 15; y: 6 }
            PathLine { x: 15; y: 10 }

            PathMove { x: 21; y: 6 }
            PathLine { x: 21; y: 10 }

            PathMove { x: 7;  y: 10 }
            PathLine { x: 7;  y: 13 }
            PathQuad { x: 10; y: 16; controlX: 7;  controlY: 16 }
            PathLine { x: 20; y: 16 }
            PathQuad { x: 23; y: 13; controlX: 23; controlY: 16 }
            PathLine { x: 23; y: 10 }
            PathLine { x: 7;  y: 10 }
        }
    }
}
