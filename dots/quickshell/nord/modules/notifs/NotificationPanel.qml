pragma ComponentBehavior: Bound

import QtQuick
import Quickshell
import Quickshell.Wayland

import qs.services

LazyLoader {
    active: Notifs.visible.length > 0 && !Notifs.ncActive

    PanelWindow {
        id: popupTray
        implicitWidth: 360
        color: "transparent"
        focusable: false

        WlrLayershell.namespace: "quickshell:notificationPopups"
        WlrLayershell.layer: WlrLayer.Overlay
        WlrLayershell.exclusiveZone: 0

        anchors.top: true
        anchors.bottom: true
        margins.top: 16
        margins.bottom: 16

        property int spacing: 16

        Column {
            id: notificationColumn
            anchors.right: parent.right
            spacing: popupTray.spacing
            width: parent.width

            Repeater {
                model: ScriptModel {
                    values: [...Notifs.visible].reverse()
                }

                delegate: NotificationPopup {}
            }
        }
    }
}
