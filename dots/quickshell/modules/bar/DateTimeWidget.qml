import QtQuick
import QtQuick.Shapes
import QtQuick.Layouts
import Quickshell

import qs.services
import qs.icons
import qs.widgets


Rectangle {
    id: root
    signal clicked()
    height: 42
    color: "transparent"

    onClicked: calendar.toggle()

    SystemClock {
	id: clock
	precision: SystemClock.Seconds
    }

    Text {
	id: timeBlock
	anchors.verticalCenter: parent.verticalCenter
	text: Qt.formatDateTime(clock.date, "hh:mm  ddd, MMM dd")
	color: Theme.paper
	font.family: Theme.fontSans
	font.pixelSize: Theme.fontSize
	Component.onCompleted: root.implicitWidth = timeBlock.implicitWidth

	MouseArea {
	    anchors.fill: parent
	    cursorShape: Qt.PointingHandCursor
	    onClicked: root.clicked()
	}
    }

    Popup {
	id: calendar
	contentWidth: 300
	contentHeight: content.implicitHeight
	anchorItem: root
	last: true

	readonly property date _today: clock.date

	property int _month: _today.getMonth()
	property int _year:  _today.getFullYear()

	readonly property var _monthNames: [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
	]
	readonly property var _dayNames: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]

	function _firstWeekdayOf(year, month) {
            const d = new Date(year, month, 1).getDay()
            return (d + 6) % 7
	}

	function _daysInMonth(year, month) {
            return new Date(year, month + 1, 0).getDate()
	}

	function _isToday(day) {
            return day === _today.getDate()
		&& _month === _today.getMonth()
		&& _year === _today.getFullYear()
	}

	function _prevMonth() {
            if (_month === 0) { _month = 11; _year -= 1 }
            else _month -= 1
	}

	function _nextMonth() {
            if (_month === 11) { _month = 0; _year += 1 }
            else _month += 1
	}

	ColumnLayout {
            id: content
            width: parent.width
            spacing: 12

            RowLayout {
		Layout.fillWidth: true

		Shape {
		    preferredRendererType: Shape.CurveRenderer

		    ShapePath {
			fillColor: Theme.base300
			strokeColor: Theme.base300
			strokeWidth: 5
			capStyle: ShapePath.RoundCap
			joinStyle: ShapePath.RoundJoin
			startX: 0; startY: 12
			PathLine { x: 12;  y: 6 }
			PathLine { x: 12;  y: 18 }
			PathLine { x: 0;  y: 12 }
		    }

		    MouseArea {
			anchors.fill: parent
			cursorShape: Qt.PointingHandCursor
			onClicked: calendar._prevMonth()
		    }
		}

		Text {
                    text: calendar._monthNames[calendar._month] + "  " + calendar._year
                    color: Theme.paper
                    font.pixelSize: 18
                    font.bold: true
                    Layout.fillWidth: true
		    horizontalAlignment: Text.AlignHCenter
		    verticalAlignment: Text.AlignVCenter
		}

		Shape {
		    preferredRendererType: Shape.CurveRenderer

		    ShapePath {
			fillColor: Theme.base300
			strokeColor: Theme.base300
			strokeWidth: 5
			capStyle: ShapePath.RoundCap
			joinStyle: ShapePath.RoundJoin
			startX: 12; startY: 12
			PathLine { x: 0;  y: 6 }
			PathLine { x: 0;  y: 18 }
			PathLine { x: 12;  y: 12 }
		    }

		    MouseArea {
			anchors.fill: parent
			cursorShape: Qt.PointingHandCursor
			onClicked: calendar._nextMonth()
		    }
		}
            }

	    Item { implicitHeight: 8; }

	    Grid {
		id: grid
		columns: 7
		columnSpacing: 1
		rowSpacing: 2
		Layout.fillWidth: true

		Repeater {
		    model: calendar._dayNames
		    Text {
			width:  Math.floor(content.width / 7)
			height: 24
			text:   modelData
			color:  Theme.base300
			font.pixelSize: Theme.fontSize
			horizontalAlignment: Text.AlignHCenter
			verticalAlignment:   Text.AlignVCenter
		    }
		}

		Repeater {
		    model: calendar._firstWeekdayOf(calendar._year, calendar._month)
		    Item {
			width:  Math.floor(content.width / 7)
			height: 28
		    }
		}

		Repeater {
		    model: calendar._daysInMonth(calendar._year, calendar._month)

		    Item {
			width:  Math.floor(content.width / 7)
			height: 28

			readonly property int day: modelData + 1
			readonly property bool today: calendar._isToday(day)

			Rectangle {
			    anchors.centerIn: parent
			    width:  24
			    height: 24
			    radius: 12
			    color:  today ? Theme.base300 : "transparent"
			}

			Text {
			    anchors.centerIn: parent
			    text:  day
			    color: today ? Theme.base850 : Theme.paper
			    font.pixelSize: 12
			    font.bold: today
			}
		    }
		}
	    }

	}
    }
}
