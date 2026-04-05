pragma ComponentBehavior: Bound

import QtQuick
import QtQuick.Controls
import Quickshell
import Quickshell.Widgets
import Quickshell.Services.Notifications

import qs.services
import qs.modules.common

Rectangle {
    id: root

    property bool onlyVisible: true
    required property Notifs.Notif modelData

    Component.onCompleted: {
        root.modelData.dismiss = () => {
            root.dismiss();
        };

        if (!onlyVisible)
            root.modelData.visible = false;

        appearAnimation.running = true;
    }
    // initially offscreen and invisible
    y: -height
    opacity: 0

    width: 300
    color: Theme.base850
    radius: 8
    border.color: {
        switch (modelData.urgency || NotificationUrgency.Low) {
        case NotificationUrgency.Critical:
            return Theme.red;
        case NotificationUrgency.Normal:
            return Theme.base850;
        case NotificationUrgency.Low:
            return Theme.base700;
        }
    }
    border.width: 2

    height: contentRow.height + 16

    ParallelAnimation {
        id: appearAnimation
        running: false

        NumberAnimation {
            target: root
            to: 0
            property: "y"
            duration: 200
            easing.type: Easing.InOutQuad
        }
        NumberAnimation {
            target: root
            to: 1
            property: "opacity"
            duration: 200
            easing.type: Easing.BezierSpline
        }
    }

    ParallelAnimation {
        id: discardAnimation
        running: false
        property var doAfter: () => {}

        NumberAnimation {
            target: root
            to: root.y + root.height / 2
            property: "y"
            duration: 200
            easing.type: Easing.InOutQuad
        }
        NumberAnimation {
            target: root
            to: 0
            property: "opacity"
            duration: 200
            easing.type: Easing.BezierSpline
        }
        onFinished: () => {
            doAfter();
        }
    }

    function dismiss() {
        discardAnimation.doAfter = () => {
            root.modelData.notification.dismiss();
        };
        discardAnimation.running = true;
    }

    Rectangle {
        id: closeButton
	color: "transparent"
	implicitHeight: Theme.fontSize
	implicitWidth: Theme.fontSize

        anchors {
            top: root.top
            right: root.right
            topMargin: 10
            rightMargin: 16
        }

	Text {
	    anchors.centerIn: closeButton
	    text: ""
	    color: Theme.paper
	    font.pixelSize: Theme.fontSize
	    font.family: Theme.fontSymbol
	}

	MouseArea {
	    anchors.fill: parent
	    hoverEnabled: true
	    cursorShape: Qt.PointingHandCursor
	    acceptedButtons: Qt.LeftButton | Qt.RightButton | Qt.MiddleButton

	    onClicked: root.dismiss();
	}
    }

    Row {
        id: contentRow
        anchors.centerIn: parent
        spacing: 10
        width: parent.width - 16

        Rectangle {
            id: iconBackground

            anchors.verticalCenter: parent.verticalCenter
            implicitHeight: 60
            implicitWidth: 60
            color: "transparent"

            MouseArea {
                anchors.fill: parent
                hoverEnabled: true
                cursorShape: Qt.PointingHandCursor
                acceptedButtons: Qt.LeftButton | Qt.RightButton | Qt.MiddleButton

                onClicked: {
                    root.dismiss();
                }
            }

            Loader {
                id: image
                active: root.modelData.hasImage
                visible: image.active
                asynchronous: true
                anchors.fill: parent

                Image {
                    anchors.fill: parent
                    source: Qt.resolvedUrl(root.modelData.image)
                    fillMode: Image.PreserveAspectCrop
                    cache: false
                    asynchronous: true
                }
            }

            Loader {
                id: appIcon
                active: root.modelData.hasAppIcon && !image.active
                visible: appIcon.active
                asynchronous: true
                anchors.fill: parent

                IconImage {
                    anchors.fill: parent
                    smooth: true
                    implicitSize: 60
                    source: Quickshell.iconPath(root.modelData.appIcon)
                    asynchronous: true
                }
            }

            Loader {
                id: fallbackIcon
                active: !appIcon.active && !image.active
                visible: fallbackIcon.active
                asynchronous: true
                anchors.fill: parent

                Text {
                    anchors.centerIn: parent
                    text: "󰂚"
                    font.family: Theme.fontSymbol
                    font.pixelSize: 60
                    color: Theme.paper
                }
            }
        }

        Column {
            id: textColumn
            property bool collapsed: true
            property int maxLength: 40
            property string bodyText: {
                if (!collapsed)
                    return root.modelData.body;
                let text = root.modelData.body;
                return text.length > textColumn.maxLength ? text.substring(0, textColumn.maxLength) + "..." : text;
            }

            width: contentRow.width - iconBackground.width - 25
            spacing: 2

            Text {
                text: root.modelData.summary
                width: parent.width
                color: Theme.paper
                font.family: Theme.fontSans
                font.pixelSize: 16
                wrapMode: Text.Wrap
                visible: text !== ""
            }

            Text {
                text: textColumn.bodyText
                width: parent.width
                color: Theme.base100
                font.family: Theme.fontSans
                font.pixelSize: Theme.fontSize
                wrapMode: Text.Wrap
                visible: text !== ""

                MouseArea {
                    anchors.fill: parent
                    hoverEnabled: true
                    cursorShape: Qt.PointingHandCursor
                    acceptedButtons: Qt.LeftButton | Qt.RightButton | Qt.MiddleButton

                    onClicked: {
                        textColumn.collapsed = !textColumn.collapsed;
                        if (textColumn.collapsed)
                            root.modelData.timer.restart();
                        else
                            root.modelData.timer.stop();
                    }
                }
            }
        }
    }
}
