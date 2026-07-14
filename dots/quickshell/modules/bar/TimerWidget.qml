import QtQuick
import QtQuick.Layouts
import Quickshell

import qs.icons
import qs.widgets
import qs.services

Rectangle {
    id: root
    signal clicked()
    height: 42
    color: "transparent"

    onClicked: _popup.toggle()

    readonly property bool _swLive: Timekeeping.stopwatchElapsed > 0 || Timekeeping.stopwatchRunning

    TimerIcon {
        timeRemaining: Timekeeping.timerRemaining / Timekeeping.timerTotal
        timerActive: Timekeeping.timerRunning

        MouseArea {
            anchors.fill: parent
            cursorShape: Qt.PointingHandCursor
            onClicked: root.clicked()
        }
    }

    Popup {
        id: _popup
        contentWidth: 300
        contentHeight: _content.implicitHeight
        anchorItem: root

        ColumnLayout {
            id: _content
            width: parent.width
            spacing: 16

            Tabs {
                id: tabs
                model: ["Timer", "Stopwatch"]
            }

            StackLayout {
                id: tabStack
                currentIndex: tabs.currentIndex
                Layout.fillWidth: true
		Layout.preferredHeight: children[currentIndex] ? children[currentIndex].implicitHeight : 0

                ColumnLayout {
                    Layout.fillWidth: true
                    spacing: 12

                    Rectangle {
                        Layout.fillWidth: true
                        implicitHeight: 72
                        radius: 8
                        color: {
                            if (Timekeeping.timerFinished) {
                                const c = Qt.color(Theme.redBright)
                                return Qt.rgba(c.r, c.g, c.b, 0.10)
                            }
                            return Theme.base800
                        }

                        Behavior on color {
                            ColorAnimation {
                                duration: 300
                            }
                        }

                        Text {
                            id: _timerDisplay
                            anchors.centerIn: parent
                            text: Timekeeping.formatSeconds(Timekeeping.timerRemaining)
                            color: Timekeeping.timerFinished ? Theme.redBright : Theme.paper
                            font.family: Theme.fontMono
                            font.pixelSize: 30
                            font.bold: true

                            Behavior on color {
                                ColorAnimation {
                                    duration: 300
                                }
                            }
                        }

                        SequentialAnimation {
                            running: Timekeeping.timerFinished
                            loops: Animation.Infinite
                            onStopped: _timerDisplay.opacity = 1.0
                            NumberAnimation {
                                target: _timerDisplay
                                property: "opacity"
                                to: 0.2
                                duration: 500
                                easing.type: Easing.InOutSine
                            }
                            NumberAnimation {
                                target: _timerDisplay
                                property: "opacity"
                                to: 1.0
                                duration: 500
                                easing.type: Easing.InOutSine
                            }
                        }
                    }

                    RowLayout {
                        Layout.fillWidth: true
                        spacing: 8

                        IconButton {
                            type: Timekeeping.timerRunning ? "Pause" : "Start"
                            enabled: Timekeeping.timerTotal > 0 && !Timekeeping.timerFinished
                            onClicked: () => Timekeeping.timerRunning
                                ? Timekeeping.pauseTimer()
                                : Timekeeping.startTimer()
                        }

                        IconButton {
                            type: "Reset"
                            enabled: Timekeeping.timerTotal > 0
                            onClicked: () => Timekeeping.resetTimer()
                        }
                    }

                    Rectangle {
                        Layout.fillWidth: true
                        implicitHeight: 1
                        color: "transparent"
                    }

                    Text {
                        text: "Presets"
                        color: Theme.paper
                        font.pixelSize: 18
                        font.bold: true
                        Layout.fillWidth: true
                    }


                    ColumnLayout {
                        Layout.fillWidth: true
                        spacing: 6

                        Repeater {
                            model: Timekeeping.presets

                            Rectangle {
                                required property var modelData

                                readonly property bool _sel: Timekeeping.timerTotal === modelData.seconds
                                    && !Timekeeping.timerFinished

                                height: 32
                                Layout.fillWidth: true
                                radius: 6
                                color: _sel ? Theme.base500 : Theme.base800
                                border.color: Theme.base700
                                border.width: 1

                                Behavior on color {
                                    ColorAnimation {
                                        duration: 100
                                    }
                                }

                                Text {
                                    id: _chipLabel
                                    anchors {
                                        left: parent.left
                                        verticalCenter: parent.verticalCenter
                                        leftMargin: 12
                                    }
                                    text: modelData.label
                                    color: _sel ? Theme.black : Theme.paper
                                    font.family: Theme.fontSans
                                    font.pixelSize: Theme.fontSize - 2
                                }

                                Text {
                                    id: _chipDuration
                                    anchors {
                                        right: parent.right
                                        verticalCenter: parent.verticalCenter
                                        rightMargin: 12
                                    }
                                    text: Timekeeping.formatSeconds(modelData.seconds)
                                    color: _sel ? Theme.black : Theme.paper
                                    font.family: Theme.fontMono
                                    font.pixelSize: Theme.fontSize
                                }

                                MouseArea {
                                    anchors.fill: parent
                                    cursorShape: Qt.PointingHandCursor
                                    onClicked: Timekeeping.setTimer(modelData.seconds)
                                }
                            }
                        }

                        Button {
                            text: "Unselect Preset"
                            active: Timekeeping.timerTotal > 0
                            danger: true

                            Layout.topMargin: 8

                            MouseArea {
                                anchors.fill: parent
                                cursorShape: Qt.PointingHandCursor
                                onClicked: Timekeeping.clearTimer()
                            }
                        }
                    }
                }

                ColumnLayout {
                    Layout.fillWidth: true
                    spacing: 12

                    Rectangle {
                        Layout.fillWidth: true
                        implicitHeight: 72
                        radius: 8
                        color: Theme.base800

                        Text {
                            anchors.centerIn: parent
                            text: Timekeeping.formatMs(Timekeeping.stopwatchElapsed)
                            color: Theme.paper
                            font.family: Theme.fontMono
                            font.pixelSize: 28
                            font.bold: true
                        }
                    }

                    RowLayout {
                        Layout.fillWidth: true
                        spacing: 8

                        IconButton {
                            type: Timekeeping.stopwatchRunning ? "Pause" : "Start"
                            enabled: true
                            onClicked: () => Timekeeping.stopwatchRunning
                                ? Timekeeping.pauseStopwatch()
                                : Timekeeping.startStopwatch()
                        }

                        IconButton {
                            type: "Reset"
                            enabled: Timekeeping.stopwatchElapsed > 0 || Timekeeping.stopwatchRunning
                            onClicked: () => Timekeeping.resetStopwatch()
                        }
                    }
                }
            }
        }
    }
}
