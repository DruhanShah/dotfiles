import QtQuick
import QtQuick.Layouts
import qs.modules.common
import qs.modules.icons
import qs.services
import qs.widgets

Item {
    id: chip
    implicitWidth:  chipRow.implicitWidth + 16
    implicitHeight: parent.height

    // Private components
    component _Btn: Rectangle {
        property string icon:   ""
        property bool   dimmed: false
        signal clicked()
        width: 32; height: 32; radius: 16
        color: ma.containsMouse ? Theme.base150 : "transparent"
        Behavior on color { ColorAnimation { duration: 100 } }
        Text {
            anchors.centerIn: parent; text: parent.icon
            font.family: Theme.fontSymbol; font.pixelSize: 15
            color: parent.dimmed ? Theme.base300 : Theme.base600
        }
        MouseArea { id: ma; anchors.fill: parent; hoverEnabled: true; cursorShape: Qt.PointingHandCursor; onClicked: parent.clicked() }
    }

    component _BigBtn: Rectangle {
        property bool running: false
        property bool useRed:  false
        signal clicked()
        width: 48; height: 48; radius: 24
        color: running ? (useRed ? Theme.red   : Theme.base600)
                       : (useRed ? Theme.green : Theme.blue)
        Behavior on color { ColorAnimation { duration: 150 } }
        Text {
            anchors.centerIn: parent; text: parent.running ? "󰏤" : "󰐊"
            font.family: Theme.fontSymbol; font.pixelSize: 18; color: Theme.paper
        }
        MouseArea { anchors.fill: parent; cursorShape: Qt.PointingHandCursor; onClicked: parent.clicked() }
    }

    component _TextBtn: Rectangle {
        property string label:  ""
        property bool   accent: false
        signal clicked()
        width: 68; height: 26; radius: 6
        color:        accent ? Theme.base900 : Theme.base150
        border.color: accent ? Theme.base900 : Theme.base200; border.width: 1
        Text {
            anchors.centerIn: parent; text: parent.label
            font.family: Theme.fontSans; font.pixelSize: Theme.fontSize - 3; font.weight: Font.Medium
            color: parent.accent ? Theme.paper : Theme.base700
        }
        MouseArea { anchors.fill: parent; cursorShape: Qt.PointingHandCursor; onClicked: parent.clicked() }
    }

    MouseArea {
        anchors.fill: parent
        cursorShape:  Qt.PointingHandCursor
        onClicked:    popup.toggle()

        Rectangle {
            anchors.fill: parent; radius: 6
            color: popup.isOpen ? Theme.base150 : "transparent"
            Behavior on color { ColorAnimation { duration: 120 } }

            RowLayout {
                id: chipRow
                anchors.centerIn: parent
                spacing: 6

                Text {
                    text:        Timer.activeTab === "stopwatch" ? "󱎫" : "󰔛"
                    font.family: Theme.fontSymbol; font.pixelSize: Theme.fontSize
                    color:       (Timer.timerRunning || Timer.swRunning)
                                 ? Theme.blue : Theme.base500
                    Behavior on color { ColorAnimation { duration: 200 } }
                }
                Text {
                    text:        Timer.activeTab === "stopwatch"
                                 ? Timer.swDisplay : Timer.timerDisplay
                    font.family: Theme.fontMono; font.pixelSize: Theme.fontSize - 1
                    color:       Timer.timerDone ? Theme.red : Theme.base800
                    Behavior on color { ColorAnimation { duration: 200 } }
                }
            }
        }
    }

    // ── Popup ─────────────────────────────────────────────────────────────────
    Popup {
        id: popup
        anchorItem:    chip
        contentWidth:  300
        contentHeight: popupCol.implicitHeight

        Column {
            id: popupCol
            width: parent.width
            spacing: 12

            // ── Tabs ──────────────────────────────────────────────────────────
            Tabs {
                id: tabs
                width: parent.width

                Tab {
                    title: "Timer"; isFirst: true; parentBar: tabs
                    onClicked: Timer.activeTab = "timer"
                    Component.onCompleted: { tabs.activeTab = this; active = true }
                }
                Tab {
                    title: "Stopwatch"; isLast: true; parentBar: tabs
                    onClicked: Timer.activeTab = "stopwatch"
                }
            }

            // ── Timer pane ────────────────────────────────────────────────────
            Column {
                visible: Timer.activeTab === "timer"
                width: parent.width; spacing: 14

                Item {
                    width: parent.width; height: 130

                    ArcProgress {
                        anchors.centerIn: parent
                        size: 120; trackWidth: 7
                        progress: Timer.timerTotal > 0
                                  ? Timer.timerRemaining / Timer.timerTotal : 1
                        arcColor: Timer.timerDone     ? Theme.red
                                  : Timer.timerRunning ? Theme.blue : Theme.green
                        Behavior on arcColor { ColorAnimation { duration: 300 } }
                    }

                    Column {
                        anchors.centerIn: parent; spacing: 2

                        Text {
                            anchors.horizontalCenter: parent.horizontalCenter
                            text: Timer.timerDisplay
                            font.family: Theme.fontMono; font.pixelSize: 26; font.weight: Font.Medium
                            color: Timer.timerDone ? Theme.red : Theme.base900
                            Behavior on color { ColorAnimation { duration: 200 } }
                            SequentialAnimation on opacity {
                                running: Timer.timerDone; loops: Animation.Infinite
                                NumberAnimation { to: 0.25; duration: 500 }
                                NumberAnimation { to: 1.0;  duration: 500 }
                            }
                        }
                        Text {
                            anchors.horizontalCenter: parent.horizontalCenter
                            text: Timer.timerDone     ? "Done!"
                                  : Timer.timerRunning ? "Running" : "Paused"
                            font.family: Theme.fontSans; font.pixelSize: Theme.fontSize - 3
                            color: Theme.base500
                        }
                    }
                }

                Row {
                    anchors.horizontalCenter: parent.horizontalCenter; spacing: 10
                    _Btn { icon: "󰑐"; onClicked: Timer.timerReset() }
                    _BigBtn {
                        running: Timer.timerRunning
                        onClicked: Timer.timerRunning
                                   ? Timer.timerPause() : Timer.timerStart()
                    }
                    _Btn { icon: "󰐕"; onClicked: addPreset.visible = !addPreset.visible }
                }

                Column {
                    width: parent.width; spacing: 8

                    Text {
                        text: "Presets"; font.family: Theme.fontSans
                        font.pixelSize: Theme.fontSize - 3; font.weight: Font.Medium; color: Theme.base500
                    }

                    Flow {
                        width: parent.width; spacing: 6

                        Repeater {
                            model: Timer.presets
                            delegate: Rectangle {
                                readonly property bool isActive: Timer.timerTotal === modelData.seconds
                                height: 24; width: chipLbl.implicitWidth + 28; radius: 12
                                color:        isActive ? Theme.base800 : Theme.base100
                                border.color: isActive ? Theme.base800 : Theme.base200; border.width: 1
                                Behavior on color { ColorAnimation { duration: 120 } }

                                Row {
                                    anchors.centerIn: parent; spacing: 5
                                    Text {
                                        id: chipLbl; text: modelData.label
                                        font.family: Theme.fontSans; font.pixelSize: Theme.fontSize - 3
                                        color: isActive ? Theme.paper : Theme.base700
                                    }
                                    Text {
                                        text: "✕"; font.pixelSize: 8
                                        color: isActive ? Qt.rgba(1,1,1,0.45) : Theme.base300
                                        anchors.verticalCenter: parent.verticalCenter
                                        MouseArea {
                                            anchors.fill: parent; anchors.margins: -4
                                            onClicked: Timer.presetRemove(index)
                                        }
                                    }
                                }
                                MouseArea {
                                    anchors { fill: parent; rightMargin: 16 }
                                    cursorShape: Qt.PointingHandCursor
                                    onClicked: { Timer.timerSet(modelData.seconds); Timer.timerStart() }
                                }
                            }
                        }
                    }

                    // Add-preset form
                    Rectangle {
                        id: addPreset
                        visible: false; width: parent.width
                        height: visible ? addCol.implicitHeight + 16 : 0
                        color: Theme.base100; radius: 8
                        border.color: Theme.base200; border.width: 1
                        clip: true
                        Behavior on height { NumberAnimation { duration: 160; easing.type: Easing.InOutQuad } }

                        Column {
                            id: addCol
                            anchors { left: parent.left; right: parent.right; top: parent.top; margins: 10 }
                            spacing: 8

                            Text {
                                text: "New preset"; font.family: Theme.fontSans
                                font.pixelSize: Theme.fontSize - 3; font.weight: Font.Medium; color: Theme.base600
                            }
                            Row {
                                spacing: 8
                                Spinner { id: hrs;  label: "h"; max: 23 }
                                Spinner { id: mins; label: "m" }
                                Spinner { id: secs; label: "s" }
                            }
                            Rectangle {
                                width: parent.width; height: 28; radius: 6; color: Theme.paper
                                border.color: Theme.base200; border.width: 1
                                TextInput {
                                    id: labelIn
                                    anchors { fill: parent; margins: 8 }
                                    font.family: Theme.fontSans; font.pixelSize: Theme.fontSize - 2
                                    color: Theme.base900; verticalAlignment: TextInput.AlignVCenter
                                    Text {
                                        visible: !parent.text && !parent.activeFocus
                                        text: "Label (auto if blank)"
                                        font.family: Theme.fontSans; font.pixelSize: Theme.fontSize - 2
                                        color: Theme.base300; anchors.verticalCenter: parent.verticalCenter
                                    }
                                }
                            }
                            Row {
                                spacing: 8
                                _TextBtn {
                                    label: "Save"; accent: true
                                    onClicked: {
                                        var total = hrs.value*3600 + mins.value*60 + secs.value
                                        if (total <= 0) return
                                        var lbl = labelIn.text.trim()
                                        if (!lbl) lbl = hrs.value  ? hrs.value+"h "+mins.value+"m"
                                                      : mins.value ? mins.value+" min"
                                                      : secs.value+"s"
                                        Timer.presetAdd(lbl, total)
                                        addPreset.visible = false
                                        labelIn.text = ""; hrs.value = 0; mins.value = 0; secs.value = 0
                                    }
                                }
                                _TextBtn { label: "Cancel"; onClicked: addPreset.visible = false }
                            }
                        }
                    }
                }
            }

            // ── Stopwatch pane ────────────────────────────────────────────────
            Column {
                visible: Timer.activeTab === "stopwatch"
                width: parent.width; spacing: 14

                Text {
                    anchors.horizontalCenter: parent.horizontalCenter
                    text: Timer.swDisplay
                    font.family: Theme.fontMono; font.pixelSize: 36; font.weight: Font.Light
                    color: Theme.base900; letterSpacing: 1
                }

                Row {
                    anchors.horizontalCenter: parent.horizontalCenter; spacing: 10
                    _Btn { icon: "󰑐"; onClicked: Timer.swReset() }
                    _BigBtn {
                        running: Timer.swRunning; useRed: true
                        onClicked: Timer.swRunning
                                   ? Timer.swPause() : Timer.swStart()
                    }
                    _Btn {
                        icon: "󰐑"; dimmed: !Timer.swRunning
                        onClicked: if (Timer.swRunning) Timer.swLap()
                    }
                }

                Column {
                    width: parent.width; spacing: 0
                    visible: Timer.swLaps.length > 0

                    Row {
                        width: parent.width; height: 20
                        Repeater {
                            model: ["#", "Elapsed", "Split"]
                            delegate: Text {
                                width:       index === 0 ? 24 : (parent.width - 24) / 2
                                text:        modelData
                                font.family: Theme.fontSans; font.pixelSize: Theme.fontSize - 4
                                color:       Theme.base400
                            }
                        }
                    }
                    Rectangle { width: parent.width; height: 1; color: Theme.base200 }

                    ListView {
                        width: parent.width
                        height: Math.min(Timer.swLaps.length * 24, 120)
                        clip: true; model: Timer.swLaps
                        verticalLayoutDirection: ListView.BottomToTop
                        delegate: Row {
                            width: ListView.view ? ListView.view.width : 276; height: 24
                            Text { width: 24;                       text: index+1;             font.family: Theme.fontMono; font.pixelSize: Theme.fontSize - 3; color: Theme.base400 }
                            Text { width: (parent.width - 24) / 2;  text: modelData.display;   font.family: Theme.fontMono; font.pixelSize: Theme.fontSize - 3; color: Theme.base800 }
                            Text { width: (parent.width - 24) / 2;  text: "+"+modelData.split; font.family: Theme.fontMono; font.pixelSize: Theme.fontSize - 3; color: Theme.blue }
                        }
                    }
                }
            }
        }
    }
}
