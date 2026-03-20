import QtQuick
import QtQuick.Shapes
import Quickshell
import Quickshell.Bluetooth
import qs.modules.icons

Rectangle {
    id: root
    signal clicked()
    width: icon.implicitWidth
    height: 42
    color: "transparent"

    readonly property bool enabled: Bluetooth.defaultAdapter
                                    ? Bluetooth.defaultAdapter.enabled
                                    : false

    MouseArea {
        anchors.fill: root
        cursorShape: Qt.PointingHandCursor
        onClicked: root.clicked()
    }

    HeadphonesIcon { id: icon }
}
