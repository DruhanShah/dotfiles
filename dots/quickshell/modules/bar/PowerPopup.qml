import QtQuick
import QtQuick.Layouts
import QtQuick.Shapes
import Quickshell
import Quickshell.Services.UPower
import Quickshell.Wayland
import qs.modules.common

Popup {
    id: root
    contentWidth: 240
    contentHeight: content.implicitHeight

    function deviceLabel(device) {
	switch (device.type) {
	case UPowerDeviceType.LinePower:  return "AC Adapter";
	case UPowerDeviceType.Battery:    return "Battery";
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

    ColumnLayout {
	id: content
	width: parent.width
	spacing: 32

	Repeater {
	    model: UPower.devices

	    ColumnLayout {
		required property UPowerDevice modelData

		visible: modelData.ready && modelData.percentage > 0
		spacing: 6
		Layout.fillWidth: true

		RowLayout {
		    Layout.fillWidth: true
		    spacing: 24

		    Text {
			text: root.deviceLabel(modelData)
			color: Theme.paper
			font.pixelSize: 13
			Layout.fillWidth: true
			elide: Text.ElideRight
		    }

		    Text {
			text: Math.round(modelData.percentage * 100) + "%"
			color: modelData.percentage < 0.20 ? Theme.redBright : Theme.paper
			font.pixelSize: 13
			font.bold: true
		    }
		}

		Text {
		    visible: text !== ""
		    text: {
			if (modelData.timeToFull > 0)
			    return root.formatTime(modelData.timeToFull) + " until full";
			if (modelData.timeToEmpty > 0)
			    return root.formatTime(modelData.timeToEmpty) + " remaining";
			return "";
		    }
		    color: Theme.paper
		    opacity: 0.55
		    font.pixelSize: 11
		}

		Rectangle {
		    Layout.fillWidth: true
		    implicitHeight: 4
		    radius: 2
		    color: Theme.base600

		    Rectangle {
			width: parent.width * modelData.percentage
			height: parent.height
			radius: parent.radius
			color: {
			    if (modelData.type == UPowerDeviceType.Battery
				&& !UPower.onBattery) return Theme.greenBright;
			    if (modelData.percentage < 0.20) return Theme.redBright;
			    return Theme.base300;
			}
		    }
		}
	    }
	}
    }
}
