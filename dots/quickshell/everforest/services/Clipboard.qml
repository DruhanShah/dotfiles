pragma Singleton
import Quickshell
import Quickshell.Io
import QtQuick

Item {
    id: clipboardService

    property var rawEntries: []
    property bool cliphistAvailable: true
    property string activePreviewPath: ""

    signal copyFinished()

    Component.onCompleted: listProcess.running = true

    function copy(id) {
        if (copyProcess.running) return;
        copyProcess.entryId = id;
        copyProcess.running = true;
    }

    function loadPreviewImage(id) {
        extractImageProcess.entryId = id;
        extractImageProcess.running = true;
    }

    Process {
        id: listProcess
        command: ["cliphist", "list"]
        property var lines: []

        onRunningChanged: {
            if (running) listProcess.lines = [];
        }

        stdout: SplitParser {
            onRead: data => {
                if (!data.trim()) return;
                const tabIdx = data.indexOf("\t");
                if (tabIdx === -1) return;
                const id = data.slice(0, tabIdx).trim();
                const preview = data.slice(tabIdx + 1).trim();
                listProcess.lines.push({ id, preview, fullLine: data });
            }
        }

        onExited: (exitCode, exitStatus) => {
            if (exitCode !== 0) {
                clipboardService.cliphistAvailable = false;
                wlPasteProcess.running = true;
            } else {
                clipboardService.rawEntries = [...listProcess.lines];
            }
        }
    }

    Process {
        id: wlPasteProcess
        command: ["wl-paste", "--no-newline"]
        property string content: ""

        onRunningChanged: {
            if (running) wlPasteProcess.content = "";
        }

        stdout: SplitParser {
            onRead: data => {
                wlPasteProcess.content += (wlPasteProcess.content ? "\n" : "") + data;
            }
        }

        onExited: {
            const text = wlPasteProcess.content.trim();
            if (text) {
                clipboardService.rawEntries = [{ id: "paste-0", preview: text, fullLine: text }];
            }
        }
    }

    Process {
        id: copyProcess
        property string entryId: ""
        command: ["bash", "-c", "cliphist list | awk -F'\t' -v id=" + copyProcess.entryId + " '$1==id{print;exit}' | cliphist decode | wl-copy"]

        onExited: (exitCode, exitStatus) => {
            if (exitCode === 0) clipboardService.copyFinished();
        }
    }

    Process {
        id: extractImageProcess
        property string entryId: ""
        command: ["bash", "-c", "cliphist list | awk -F'\t' -v id=" + extractImageProcess.entryId + " '$1==id{print;exit}' | cliphist decode > /tmp/qs_clip_preview.png"]

        onExited: {
            clipboardService.activePreviewPath = "file:///tmp/qs_clip_preview.png?t=" + Date.now()
        }
    }
}
