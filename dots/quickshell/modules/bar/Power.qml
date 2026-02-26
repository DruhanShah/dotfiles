import QtQuick
import QtQuick.Layouts
import Quickshell
import Quickshell.Services.UPower

Rectangle {
    Text {
        id: powerDisplay
        anchors {
            verticalCenter: parent.verticalCenter
        }
        text: Number(UPower.displayDevice.percentage * 100).toFixed(1)
        color: "#e6e4d9"
        font.family: "Inter"
        font.pixelSize: 14
        Component.onCompleted: {
            parent.width = powerDisplay.contentWidth
        }
    }
}
