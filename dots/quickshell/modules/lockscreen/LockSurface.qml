import QtQuick
import QtQuick.Layouts
import QtQuick.Controls.Fusion
import Quickshell

import qs.modules.common
import qs.services

Rectangle {
    id: root
    required property LockContext context
    color: "transparent"
    anchors.fill: parent

    SystemClock {
	id: clock
	precision: SystemClock.Minutes
    }

    Image {
        id: background
        anchors.fill: parent
        source: "file:///home/druhan/dotfiles/dots/wallpapers/ship-sepia.jpg"
    }

    Text {
        id: time

        anchors {
            horizontalCenter: parent.horizontalCenter
            top: parent.top
            topMargin: 120
        }

        color: Theme.paper
	opacity: 0.8
        font.family: Theme.fontSerif
	font.bold: true
        font.pointSize: 108

        text: Qt.formatDateTime(clock.date, "hh:mm")
    }

    Text {
        id: date

        anchors {
            horizontalCenter: parent.horizontalCenter
            bottom: time.top
        }

        color: Theme.paper
	opacity: 0.8
        font.family: Theme.fontSerif
	font.bold: true
        font.pointSize: 32

        text: Qt.formatDateTime(clock.date, "ddd, MMM dd")
    }

    ColumnLayout {
        anchors {
            horizontalCenter: parent.horizontalCenter
            bottom: parent.bottom
	    bottomMargin: 128
        }

        Text {
            text: root.context.pamMessage
            font.family: Theme.fontSans
            color: Theme.black
        }

	TextField {
	    id: passwordBox
	    leftInset: -5

            background: Rectangle {
                implicitWidth: 240
		implicitHeight: 42
                radius: 20
                color: Theme.base100
		opacity: 0.6
                border.color: Theme.base600
                border.width: passwordBox.enabled ? 1 : 0

                Behavior on border.width {
                    NumberAnimation {
                        duration: 200
                        easing.type: Easing.InOutQuad
                    }
                }
            }

	    cursorDelegate: Rectangle {
		width: 0
		color: "transparent"
	    }

            focus: true
            enabled: !root.context.unlockInProgress
            echoMode: TextInput.Password
            inputMethodHints: Qt.ImhSensitiveData
            placeholderText: "Password"
            font.family: Theme.fontMono
	    horizontalAlignment: TextInput.AlignHCenter

            placeholderTextColor: Theme.base700
            passwordCharacter: '⏺'
            color: Theme.paper

            onTextChanged: root.context.currentText = this.text
            onAccepted: root.context.tryUnlock()

            Connections {
                target: root.context

                function onCurrentTextChanged() {
                    passwordBox.text = root.context.currentText;
                }
            }
        }

    }
}
