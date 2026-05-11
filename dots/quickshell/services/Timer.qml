pragma Singleton

import QtQuick
import Quickshell
import Quickshell.Io

Scope {
    id: root

    property string activeTab:    "timer"
    property bool   popupVisible: false

    // Timer
    property int  timerTotal:     300
    property int  timerRemaining: 300
    property bool timerRunning:   false
    property bool timerDone:      false

    readonly property string timerDisplay: _fmt(timerRemaining)

    function timerStart() { timerDone = false; timerRunning = true }
    function timerPause() { timerRunning = false }
    function timerReset() { timerRunning = false; timerDone = false; timerRemaining = timerTotal }
    function timerSet(secs) { timerTotal = secs; timerRemaining = secs; timerDone = false; timerRunning = false }

    Timer {
        interval: 1000; running: root.timerRunning; repeat: true
        onTriggered: {
            if (root.timerRemaining > 0) { root.timerRemaining-- }
            else { root.timerRunning = false; root.timerDone = true }
        }
    }

    // Stopwatch
    property int  swElapsed: 0   // centiseconds
    property bool swRunning: false
    property var  swLaps:    []

    readonly property string swDisplay: _fmtCs(swElapsed)

    function swStart() { swRunning = true }
    function swPause() { swRunning = false }
    function swReset() { swRunning = false; swElapsed = 0; swLaps = [] }
    function swLap() {
        var prev = swLaps.length > 0 ? swLaps[swLaps.length - 1].elapsed : 0
        swLaps = swLaps.concat([{
            elapsed: swElapsed,
            display: _fmtCs(swElapsed),
            split:   _fmtCs(swElapsed - prev)
        }])
    }

    Timer {
        interval: 10; running: root.swRunning; repeat: true
        onTriggered: root.swElapsed++
    }

    // Presets
    property var presets: []

    function presetAdd(label, secs) {
        presets = presets.concat([{ label: label, seconds: secs }])
        _save()
    }

    function presetRemove(i) {
        var a = presets.slice(); a.splice(i, 1); presets = a; _save()
    }

    FileView {
        id: store
        path: Quickshell.configDir + "/timer_presets.json"
        watchChanges: true
        onFileChanged: _load()
    }

    function _load() {
        try {
            var d = JSON.parse(store.text())
            if (d && Array.isArray(d.presets)) root.presets = d.presets
        } catch(_) {}
    }

    function _save() { store.setText(JSON.stringify({ presets: presets }, null, 2)) }

    Component.onCompleted: {
        _load()
        if (!presets.length) {
            presets = [
                { label: "5 min",  seconds: 300  },
                { label: "10 min", seconds: 600  },
                { label: "25 min", seconds: 1500 },
                { label: "45 min", seconds: 2700 },
            ]
            _save()
        }
    }

    function _z(n)   { return n < 10 ? "0" + n : "" + n }
    function _fmt(s) {
        var h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60
        return h > 0 ? _z(h)+":"+_z(m)+":"+_z(sec) : _z(m)+":"+_z(sec)
    }
    function _fmtCs(cs) {
        var s = Math.floor(cs / 100), c = cs % 100
        var h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), sec = s % 60
        return (h > 0 ? _z(h)+":"+_z(m)+":"+_z(sec) : _z(m)+":"+_z(sec)) + "."+_z(c)
    }
}
