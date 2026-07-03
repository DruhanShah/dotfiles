import QtQuick
import QtQuick.Layouts
import QtQuick.Shapes
import Quickshell
import Quickshell.Services.UPower
import qs.modules.common
import qs.modules.icons
import qs.widgets

Rectangle {
    id: root
    signal requestedDetail(var component)
    
    width: 32
    height: 24
    color: "transparent"

    BatteryIcon { 
        id: icon 
        anchors.centerIn: parent 
        percentage: UPower.displayDevice.percentage 
        charging: !UPower.onBattery
    }
    
    MouseArea { 
        anchors.fill: parent 
        cursorShape: Qt.PointingHandCursor 
        onClicked: root.requestedDetail(batteryDetail)
    }

    Component {
        id: batteryDetail
        
        ColumnLayout {
            id: content
            width: 320
            spacing: 12

            function deviceLabel(device) {
                switch (device.type) {
                    case UPowerDeviceType.LinePower:  return "AC Adapter";
                    case UPowerDeviceType.Battery:    return "Computer";
                    case UPowerDeviceType.Mouse:      return "Mouse";
                    case UPowerDeviceType.Keyboard:   return "Keyboard";
                    case UPowerDeviceType.Phone:      return "Phone";
                    case UPowerDeviceType.Headphones: return "Headphones";
                    case UPowerDeviceType.Headset:    return "Headphones";
                    default:                          return "Some Device";
                }
            }

            function formatTime(seconds) {
                if (seconds <= 0) return "";
                const h = Math.floor(seconds / 3600);
                const m = Math.floor((seconds % 3600) / 60);
                if (h > 0) return h + "h " + m + "m";
                return m + "m";
            }

	    Rectangle {
		Layout.fillWidth: true
		Layout.preferredHeight: 32
		color: "transparent"

		Text {
		    anchors.left: parent.left
		    anchors.bottom: parent.bottom
		    text: "Battery"
		    color: Theme.fg
		    font.pixelSize: Theme.fontSize + 4
		    font.bold: true
		}
	    }

	    Item {}

            Repeater { 
                model: UPower.devices 
                
                ColumnLayout {
                    required property UPowerDevice modelData
                    visible: modelData.ready && modelData.percentage > 0
                    spacing: 6
                    Layout.fillWidth: true

		    Item {}
                    
                    RowLayout { 
                        Layout.fillWidth: true 
                        spacing: 12 
                        
                        Text {
                            text: content.deviceLabel(modelData)
                            color: Theme.fg
                            font.pixelSize: 13
                            Layout.fillWidth: true
                            elide: Text.ElideRight 
                        }
                        
                        Text { 
                            visible: text !== "" 
                            text: {
                                if (modelData.timeToFull > 0)
				    return content.formatTime(modelData.timeToFull) + " until full";
                                if (modelData.timeToEmpty > 0)
				    return content.formatTime(modelData.timeToEmpty) + " remaining";
                                return ""; 
                            }
                            color: Theme.fg 
                            opacity: 0.55 
                            font.pixelSize: 11
                        }

                        Text {
                            text: Math.round(modelData.percentage * 100) + "%"
                            color: modelData.percentage < 0.20 ? Theme.red : Theme.fg
                            font.pixelSize: 13
                            font.bold: true
                        }
                    }
                    
                    Rectangle { 
                        Layout.fillWidth: true 
                        implicitHeight: 4 
                        radius: 2 
                        color: Theme.bg2 
                        
                        Rectangle {
                            width: parent.width * modelData.percentage
                            height: parent.height
                            radius: parent.radius
                            color: { 
                                if (modelData.type == UPowerDeviceType.Battery && !UPower.onBattery)
				    return Theme.green; 
                                if (modelData.percentage < 0.20)
				    return Theme.red; 
                                return Theme.bg5;
                            }
                        }
                    }

		    Item { implicitHeight: 8 }
                }
            }
        }
    }
}
