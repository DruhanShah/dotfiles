import QtQuick
import QtQuick.Layouts
import Quickshell

Rectangle {
    SystemClock {
        id: clock
        precision: SystemClock.Seconds
    }
    Text {
        id: timeBlock
        anchors {
            verticalCenter: parent.verticalCenter
        }
        text: Qt.formatDateTime(clock.date, "hh:mm   ddd, MMM dd")
        color: "#fffcf0"
        font.family: "Inter"
        font.pixelSize: 14
        Component.onCompleted: {
            parent.width = timeBlock.contentWidth
        }
    }
}
