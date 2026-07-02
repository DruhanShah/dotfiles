pragma Singleton
import QtQuick
import Quickshell
import Quickshell.Io

Singleton {
    id: root
    property int uptime: 0
    property string uptimeString: {
	let seconds = root.uptime
	const days = Math.floor(seconds / 86400)
	const daysString = days > 0 ? `${days}d ` : ""
	seconds = seconds % 86400
	const hours = Math.floor(seconds / 3600)
	const hoursString = hours > 0 ? `${hours}h ` : ""
	seconds = seconds % 3600
	const minutes = Math.floor(seconds / 60)
	const minutesString = minutes > 0 ? `${minutes}m ` : ""
	seconds = Math.floor(seconds % 60)
	const secondsString = seconds > 0 ? `${seconds}s` : ""
	return `${daysString}${hoursString}${minutesString}${secondsString}`
    }

    FileView {
	id: procUptime
	path: "file:///proc/uptime"
	onLoaded: root.uptime = Number(text().split(" ")[0])
    }

    Timer {
	running: true
	interval: 1000
	repeat: true
	onTriggered: procUptime.reload()
    }

    function shutdown() {
	Quickshell.execDetached({
	    command: ["systemctl", "poweroff"]
	})
    }

    function reboot() {
	console.log("Rebooting...");
	Quickshell.execDetached({
	    command: ["systemctl", "reboot"]
	})
    }

    function logout() {
	Quickshell.execDetached({
	    command: ["loginctl", "kill-user", "druhan"]
	})
    }

    function lock() {
	console.log("Locking has not been implemented yet.");
    }
}
