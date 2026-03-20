import QtQuick
import QtQuick.Layouts
import Quickshell
import Quickshell.Wayland
import qs.services

PanelWindow {
    id: root

    anchors.top: true
    anchors.left: true
    implicitWidth: 380
    implicitHeight: popupColumn.implicitHeight + 20
    color: "transparent"
    WlrLayershell.layer: WlrLayer.Overlay
    WlrLayershell.keyboardFocus: WlrKeyboardFocus.None

    ColumnLayout {
        id: popupColumn
        anchors {
            top: parent.top; right: parent.left
            margins: 10
        }
        spacing: 8

        Repeater {
            model: Notifications.trackedNotifications

            delegate: NotificationPopup {
                required property var modelData
                notification: modelData
                onDismissRequested: {
                    animateOut(function() { modelData.dismiss(); });
                }
            }
        }
    }
}
