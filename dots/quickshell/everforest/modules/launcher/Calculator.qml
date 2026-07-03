import Quickshell
import QtQuick
import QtQuick.Layouts
import QtQuick.Shapes
import QtQuick.Effects

import qs.modules.common
import qs.services

Item {
    id: calculatorRoot

    property string searchQuery: ""

    signal closeRequested()
    
    onSearchQueryChanged: {
        Qalculate.calculate(searchQuery);
    }

    RowLayout {
        anchors.horizontalCenter: parent.horizontalCenter
        spacing: 24
        
        opacity: Qalculate.isValid ? 1.0 : 0.0
        visible: opacity > 0

        Behavior on opacity { NumberAnimation { duration: 250; easing: Easing.OutQuint } }

        Rectangle {
	    id: inputBlock
            width: 240
            height: 240
            radius: 12
            
            color: Theme.bg_dim
            border.color: Theme.bg2
            border.width: 1

	    RectangularShadow {
		anchors.fill: inputBlock
		radius: 12
		color: Theme.bg_dim
		spread: 4
		blur: 50
		offset.x: 0
		offset.y: 0
		opacity: 0.5
	    }

            Text {
                anchors.fill: parent
                anchors.margins: 24
                text: Qalculate.parsedInput
                color: Theme.fg
                font.pixelSize: Theme.fontSize + 2
                font.family: Theme.fontMono
                font.weight: Font.Light
                wrapMode: Text.WrapAnywhere
                horizontalAlignment: Text.AlignHCenter
                verticalAlignment: Text.AlignVCenter
                fontSizeMode: Text.Fit
                minimumPixelSize: 12
            }
        }

	Shape {
	    id: separator
	    implicitWidth: 56
	    implicitHeight: 24
	    preferredRendererType: Shape.CurveRenderer

	    ShapePath {
		strokeWidth: 4
		strokeColor: Theme.fg
		fillColor: Theme.fg
		capStyle: ShapePath.RoundCap
		joinStyle: ShapePath.RoundJoin

		startX: 0
		startY: 8
		PathLine { relativeX: 24; relativeY: 0 }
		PathLine { relativeX: 0; relativeY: -8 }
		PathLine { relativeX: 16; relativeY: 12 }
		PathLine { relativeX: -16; relativeY: 12 }
		PathLine { relativeX: 0; relativeY: -8 }
		PathLine { relativeX: -24; relativeY: 0 }
		PathLine { x: 0; y: 8 }
	    }
	}

        Rectangle {
            id: resultBlock
            width: 240
            height: 240
            radius: 12
            
            color: Theme.bg0
            border.color: Theme.bg5
            border.width: 1
            
            transform: Scale {
                origin.x: resultBlock.width / 2
                origin.y: resultBlock.height / 2
                xScale: 1.05
                yScale: 1.05
            }

            Behavior on border.color { ColorAnimation { duration: 150 } }

	    RectangularShadow {
		anchors.fill: parent
		radius: 12
		color: Theme.bg_dim
		spread: 4
		blur: 50
		offset.x: 0
		offset.y: 0
		opacity: 0.5
	    }

            Text {
                anchors.fill: parent
                anchors.margins: 24
                text: Qalculate.resultText
                color: Theme.fg
                font.pixelSize: Theme.fontSize + 8
                font.family: Theme.fontSans
                font.weight: Font.DemiBold
                wrapMode: Text.WrapAnywhere
                horizontalAlignment: Text.AlignHCenter
                verticalAlignment: Text.AlignVCenter
                fontSizeMode: Text.Fit
                minimumPixelSize: 16
            }

            MouseArea {
                anchors.fill: parent
                cursorShape: Qt.PointingHandCursor
                onClicked: {
                    Qalculate.copyResult();
                    
                    resultBlock.border.color = Theme.fg;
                    Qt.callLater(() => {
                        resultBlock.border.color = Theme.bg5;
                    });
                }
            }
        }
    }
}
