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
	    topMargin: 144
        }

        color: Theme.fg
	opacity: 0.8
        font.family: Theme.fontSerif
	font.weight: 800
        font.pointSize: 128
	renderType: Text.NativeRendering

        text: Qt.formatDateTime(clock.date, "hh:mm")
    }

    Text {
        id: date

        anchors {
            horizontalCenter: parent.horizontalCenter
            bottom: time.top
        }

        color: Theme.fg
	opacity: 0.8
        font.family: Theme.fontSerif
	font.bold: true
        font.pointSize: 48
	renderType: Text.NativeRendering

        text: Qt.formatDateTime(clock.date, "dddd, MMM dd")
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
            color: Theme.fg
        }

	TextField {
	    id: passwordBox
	    leftInset: -5

            background: Rectangle {
                implicitWidth: 240
		implicitHeight: 42
                radius: 20
                color: Theme.fg
		opacity: 0.85
                border.color: Theme.bg3
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

            placeholderTextColor: Theme.bg0
            passwordCharacter: '⏺'
            color: Theme.bg0

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
