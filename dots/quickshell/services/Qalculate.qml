pragma Singleton
import Quickshell
import Quickshell.Io
import QtQuick

Item {
    id: calculatorService

    property string parsedInput: ""
    property string resultText: ""
    property bool isValid: resultText !== ""
    
    property string _pendingQuery: ""

    function calculate(query) {
        _pendingQuery = query;
        debounceTimer.restart();
    }

    function copyResult() {
        if (isValid) {
            copyProcess.textToCopy = resultText;
            copyProcess.running = true;
        }
    }

    Timer {
        id: debounceTimer
        interval: 150
        repeat: false
        onTriggered: {
            if (calculatorService._pendingQuery.trim() === "") {
                calculatorService.parsedInput = "";
                calculatorService.resultText = "";
            } else {
                calcProcess.running = true;
            }
        }
    }

    Process {
        id: calcProcess
        command: ["bash", "-c", "qalc '" + calculatorService._pendingQuery.replace(/'/g, "'\\''") + "' 2>/dev/null"]
        property string rawOutput: ""

        onRunningChanged: {
            if (running) rawOutput = "";
        }

        stdout: SplitParser {
            onRead: data => {
                calcProcess.rawOutput += data;
            }
        }

        onExited: (exitCode) => {
            const fullText = calcProcess.rawOutput.trim();
            
            let splitIndex = fullText.lastIndexOf(" = ");
            if (splitIndex === -1) {
                splitIndex = fullText.lastIndexOf(" ≈ ");
            }
            
            if (exitCode === 0 && splitIndex !== -1 && !fullText.toLowerCase().includes("error")) {
                calculatorService.parsedInput = fullText.substring(0, splitIndex).trim();
                calculatorService.resultText = fullText.substring(splitIndex + 3).trim();
            } else {
                calculatorService.parsedInput = "";
                calculatorService.resultText = "";
            }
        }
    }

    Process {
        id: copyProcess
        property string textToCopy: ""
        command: ["wl-copy", copyProcess.textToCopy]
    }
}
