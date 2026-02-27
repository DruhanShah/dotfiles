import QtQuick
import QtQuick.Layouts
import QtQuick.Shapes
import Quickshell
import Quickshell.Services.UPower
import qs.modules.common

Rectangle {
    width: 20
    
    Rectangle {
	id: batteryBorder
	width: 24
	height: 16
	color: "transparent"
	radius: 4
	border {
	    width: 1
	    color: Theme.paper
	}
	anchors {
	    verticalCenter: parent.verticalCenter
	}
    }

    Shape {
	ShapePath {
	    id: batteryCap
	    strokeWidth: 2
	    strokeColor: Theme.paper
	    capStyle: ShapePath.RoundCap

	    startX: 25
	    startY: -2
	    PathLine { x: 25; y: 2 }
	}
    }

    Rectangle {
	id: batteryValue
	
	property real w: Number(UPower.displayDevice.percentage * 20)
	property bool charging: !UPower.onBattery
	property bool critical: UPower.displayDevice.percentage < 0.20

	width: w
	height: 12
	color: charging ? Theme.greenBright : (critical ? Theme.redBright : Theme.paper)
	radius: 2
	anchors {
	    verticalCenter: parent.verticalCenter
	    left: parent.left
	    leftMargin: 2
	}
    }
}
