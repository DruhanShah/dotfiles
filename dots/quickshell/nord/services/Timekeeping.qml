pragma Singleton
import QtQuick
import Quickshell
import Quickshell.Io
import qs.modules.common

QtObject {
    id: root

    property var presets: []

    property int  timerTotal:     0
    property int  timerRemaining: 0
    property bool timerRunning:   false
    property bool timerFinished:  false

    property int  stopwatchElapsed: 0
    property bool stopwatchRunning: false

    property int _swStartTime:   0
    property int _swAccumulated: 0

    property FileView _presetsFile: FileView {
        path: Qt.resolvedUrl("./timer_presets.json").toString().replace("file://", "")
        watchChanges: true
        onTextChanged: {
            try {
                root.presets = JSON.parse(text())
            } catch (e) {
		console.log("Failed to parse timer presets, resetting to empty: ", e)
                root.presets = []
            }
        }
    }

    property Timer _timerTick: Timer {
        interval: 1000
        repeat:   true
        running:  root.timerRunning
        onTriggered: {
            root.timerRemaining -= 1
            if (root.timerRemaining <= 0) {
                root.timerRemaining = 0
                root.timerRunning   = false
                root.timerFinished  = true
            }
        }
    }

    property Timer _swTick: Timer {
        interval: 100
        repeat:   true
        running:  root.stopwatchRunning
        onTriggered: {
            root.stopwatchElapsed = Date.now() - root._swStartTime
        }
    }

    function formatSeconds(secs) {
        const h = Math.floor(secs / 3600)
        const m = Math.floor((secs % 3600) / 60)
        const s = secs % 60
        const p = n => String(n).padStart(2, '0')
        return p(h) + ":" + p(m) + ":" + p(s)
    }

    function formatMs(ms) {
        const total = Math.floor(ms / 1000)
        const h = Math.floor(total / 3600)
        const m = Math.floor((total % 3600) / 60)
        const s = total % 60
        const cs = Math.floor((ms % 1000) / 10)
        const p = n => String(n).padStart(2, '0')
        return p(h) + ":" + p(m) + ":" + p(s) + "." + p(cs)
    }

    function setTimer(seconds) {
        timerRunning   = false
        timerFinished  = false
        timerTotal     = seconds
        timerRemaining = seconds
    }

    function startTimer() {
        if (timerRemaining > 0 && !timerFinished) {
            timerRunning = true
        }
    }

    function pauseTimer() {
        timerRunning = false
    }

    function resetTimer() {
        timerRunning   = false
        timerFinished  = false
        timerRemaining = timerTotal
    }

    function clearTimer() {
        timerRunning   = false
        timerFinished  = false
        timerRemaining = 0
	timerTotal     = 0
    }

    function startStopwatch() {
        _swStartTime   = Date.now() - _swAccumulated
        stopwatchRunning = true
    }

    function pauseStopwatch() {
        _swAccumulated   = stopwatchElapsed
        stopwatchRunning = false
    }

    function resetStopwatch() {
        stopwatchRunning = false
        _swAccumulated   = 0
        stopwatchElapsed = 0
    }
}
