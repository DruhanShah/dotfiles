import QtQuick
import QtQuick.Layouts
import Quickshell.Services.Notifications
import qs.modules.common

Rectangle {
    id: root

    required property Notification notification

    signal dismissRequested()

    implicitWidth: 360
    implicitHeight: contentLayout.implicitHeight + 24

    color: Theme.base150
    border.color: urgencyBorderColor()
    border.width: 1
    radius: 10

    function urgencyBorderColor() {
        switch (notification.urgency) {
            case NotificationUrgency.Critical: return Theme.red;
            case NotificationUrgency.Normal:   return Theme.base500;
            case NotificationUrgency.Low:      return Theme.base300;
            default:                           return Theme.base500;
        }
    }

    Timer {
        id: dismissTimer
        interval: notification.urgency === NotificationUrgency.Critical ? 0 : 5000
        running: interval > 0
        onTriggered: root.dismissRequested()
    }

    MouseArea {
        anchors.fill: parent
        hoverEnabled: true
        onEntered: dismissTimer.restart()
        onExited: dismissTimer.restart()
        onClicked: root.dismissRequested()
    }

    property real targetX: 0
    x: targetX
    opacity: 1

    function animateOut(onDone) {
        slideOut.onFinished.connect(onDone);
        slideOut.start();
    }

    NumberAnimation {
        id: slideOut
        target: root
        property: "x"
        to: root.implicitWidth + 20
        duration: 200
        easing.type: Easing.InQuad
    }

    Component.onCompleted: {
        x = implicitWidth + 20;
        slideInAnim.start();
    }
    NumberAnimation {
        id: slideInAnim
        target: root
        property: "x"
        to: 0
        duration: 250
        easing.type: Easing.OutQuad
    }

    ColumnLayout {
        id: contentLayout
        anchors {
            left: parent.left; right: parent.right
            top: parent.top
            margins: 12
        }
        spacing: 4

        RowLayout {
            spacing: 8

            Image {
                visible: notification.image !== ""
                source: notification.image
                sourceSize: Qt.size(32, 32)
                width: 32; height: 32
                Layout.alignment: Qt.AlignTop
            }

            ColumnLayout {
                spacing: 2
                Layout.fillWidth: true

                RowLayout {
                    Layout.fillWidth: true
                    Text {
                        text: notification.summary
                        color: Theme.black
                        font.bold: true
                        font.pixelSize: 13
                        elide: Text.ElideRight
                        Layout.fillWidth: true
                    }
                    Text {
                        text: "✕"
                        color: Theme.base600
                        font.pixelSize: 11
                        MouseArea {
                            anchors.fill: parent
                            onClicked: root.dismissRequested()
                        }
                    }
                }

                Text {
                    text: notification.appName
                    color: Theme.base600
                    font.pixelSize: 11
                }

                Text {
                    visible: notification.body !== ""
                    text: notification.body
                    color: Theme.base800
                    font.pixelSize: 12
                    wrapMode: Text.WordWrap
                    textFormat: Text.StyledText
                    Layout.fillWidth: true
                }
            }
        }

        RowLayout {
            visible: notification.actions.count > 0
            spacing: 6
            Layout.topMargin: 4

            Repeater {
                model: notification.actions
                delegate: Rectangle {
                    color: Theme.base200
                    radius: 6
                    implicitWidth: actionLabel.implicitWidth + 16
                    implicitHeight: 24
                    Text {
                        id: actionLabel
                        anchors.centerIn: parent
                        text: modelData.text
                        color: Theme.base800
                        font.pixelSize: 12
                    }
                    MouseArea {
                        anchors.fill: parent
                        onClicked: modelData.invoke()
                    }
                }
            }
        }
    }
}
