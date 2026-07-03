import QtQuick
import QtQuick.Shapes
import QtQuick.Layouts
import Quickshell
import qs.modules.common
import qs.modules.icons
import qs.widgets

Rectangle {
    id: root
    signal requestedDetail(var component)
    
    height: 32
    color: "transparent"
    implicitWidth: timeBlock.implicitWidth

    SystemClock { 
        id: clock 
        precision: SystemClock.Seconds 
    }

    Text { 
        id: timeBlock 
        anchors.verticalCenter: parent.verticalCenter 
        text: Qt.formatDateTime(clock.date, "hh:mm  ddd, MMM dd") 
        color: Theme.fg 
        font.family: Theme.fontSans 
        font.pixelSize: Theme.fontSize 
    }

    MouseArea {
        anchors.fill: parent
        cursorShape: Qt.PointingHandCursor
        onClicked: root.requestedDetail(calendarDetail)
    }

    Component {
        id: calendarDetail
        
        ColumnLayout {
            id: content
            width: 300
            spacing: 12
            
            readonly property date _today: clock.date 
            readonly property var _monthNames: [
		"January", "February", "March", "April", "May", "June",
		"July", "August", "September", "October", "November", "December"
	    ]
            readonly property var _dayNames: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] 
            property int _month: _today.getMonth() 
            property int _year:  _today.getFullYear() 
            
            function _firstWeekdayOf(year, month) { return (new Date(year, month, 1).getDay() + 6) % 7 }
            function _daysInMonth(year, month) { return new Date(year, month + 1, 0).getDate() }
            function _isToday(day) {
		return day === _today.getDate()
		    && _month === _today.getMonth()
		    && _year === _today.getFullYear()
	    }
            function _prevMonth() {
		if (_month === 0) {
		    _month = 11
		    _year -= 1
		} else _month -= 1
	    }
            function _nextMonth() {
		if (_month === 11) {
		    _month = 0
		    _year += 1
		} else _month += 1
	    }

	    Item {}

            RowLayout { 
                Layout.fillWidth: true
		Layout.leftMargin: 12; Layout.rightMargin: 12
                
                Shape {
                    preferredRendererType: Shape.CurveRenderer
                    Layout.preferredWidth: 12; Layout.preferredHeight: 24
                    ShapePath { 
                        fillColor: Theme.grey2
			strokeColor: Theme.grey2
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
			onClicked: _prevMonth()
		    }
                } 
                
                Text {
                    text: _monthNames[_month] + "  " + _year
                    color: Theme.fg
                    font.pixelSize: 18
                    font.bold: true
                    Layout.fillWidth: true
                    horizontalAlignment: Text.AlignHCenter
                    verticalAlignment: Text.AlignVCenter
                }
                
                Shape {
                    preferredRendererType: Shape.CurveRenderer
                    Layout.preferredWidth: 12; Layout.preferredHeight: 24
                    ShapePath { 
                        fillColor: Theme.grey2
			strokeColor: Theme.grey2
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
			onClicked: _nextMonth()
		    }
                }
            }
            
            Item { implicitHeight: 8 }
            
            Grid { 
                id: grid 
                columns: 7 
                columnSpacing: 1 
                rowSpacing: 2 
                Layout.fillWidth: true 
                
                Repeater {
                    model: _dayNames
                    Text { 
                        width: Math.floor(content.width / 7) 
                        height: 24 
                        text: modelData 
                        color: Theme.grey2 
                        font.pixelSize: Theme.fontSize 
                        horizontalAlignment: Text.AlignHCenter 
                        verticalAlignment: Text.AlignVCenter
                    }
                } 
                
                Repeater {
                    model: _firstWeekdayOf(_year, _month)
                    Item {
			width: Math.floor(content.width / 7)
			height: 28
		    }
                } 
                
                Repeater {
                    model: _daysInMonth(_year, _month)
                    Item { 
                        width: Math.floor(content.width / 7) 
                        height: 28 
                        readonly property int day: modelData + 1 
                        readonly property bool today: _isToday(day) 
                        
                        Rectangle {
                            anchors.centerIn: parent
                            width: 24; height: 24
                            radius: 12
                            color: today ? Theme.bg_purple : "transparent" 
                            
                            Text {
                                anchors.centerIn: parent
                                text: day
                                color: today ? Theme.purple : Theme.fg
                                font.pixelSize: 12
                                font.bold: today
                            }
                        }
                    }
                }
            }

	    Item {}
        }
    }
}
