import QtQuick
import QtQuick.Layouts
import Quickshell
import qs.modules.common

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
        text: Qt.formatDateTime(clock.date, "hh:mm  ddd, MMM dd")
        color: Theme.paper
        font.family: Theme.fontSans
        font.pixelSize: Theme.fontSize
        Component.onCompleted: {
            parent.width = timeBlock.contentWidth
        }
    }
}
