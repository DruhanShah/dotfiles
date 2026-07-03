import QtQuick
import QtQuick.Controls
import QtQuick.Layouts

import qs.modules.common

Item {
    id: charSelector

    property string searchQuery: ""

    signal closeRequested()

    function moveUp() {
        currentIndex = Math.max(currentIndex - columnCount, 0);
    }
    function moveDown() {
        currentIndex = Math.min(currentIndex + columnCount, filteredChars.length - 1);
    }
    function confirm() {
        if (filteredChars.length > 0) _copy(filteredChars[currentIndex].char);
    }

    property int currentIndex: 0
    property int columnCount:  8

    onSearchQueryChanged: currentIndex = 0

    readonly property var charData: [
        // Math / symbols
        { char: "±",  name: "plus-minus",         group: "Math"    },
        { char: "×",  name: "multiply",            group: "Math"    },
        { char: "÷",  name: "divide",              group: "Math"    },
        { char: "≠",  name: "not equal",           group: "Math"    },
        { char: "≈",  name: "approximately equal", group: "Math"    },
        { char: "≤",  name: "less or equal",       group: "Math"    },
        { char: "≥",  name: "greater or equal",    group: "Math"    },
        { char: "∞",  name: "infinity",            group: "Math"    },
        { char: "√",  name: "square root",         group: "Math"    },
        { char: "∑",  name: "sum sigma",           group: "Math"    },
        { char: "∏",  name: "product pi",          group: "Math"    },
        { char: "∂",  name: "partial derivative",  group: "Math"    },
        { char: "∇",  name: "nabla gradient",      group: "Math"    },
        { char: "∫",  name: "integral",            group: "Math"    },
        { char: "∈",  name: "element of set",      group: "Math"    },
        { char: "∉",  name: "not element of",      group: "Math"    },
        { char: "⊂",  name: "subset of",           group: "Math"    },
        { char: "∩",  name: "intersection",        group: "Math"    },
        { char: "∪",  name: "union",               group: "Math"    },
        { char: "∅",  name: "empty set",           group: "Math"    },
        // Greek letters
        { char: "α",  name: "alpha",               group: "Greek"   },
        { char: "β",  name: "beta",                group: "Greek"   },
        { char: "γ",  name: "gamma",               group: "Greek"   },
        { char: "δ",  name: "delta",               group: "Greek"   },
        { char: "ε",  name: "epsilon",             group: "Greek"   },
        { char: "θ",  name: "theta",               group: "Greek"   },
        { char: "λ",  name: "lambda",              group: "Greek"   },
        { char: "μ",  name: "mu",                  group: "Greek"   },
        { char: "π",  name: "pi",                  group: "Greek"   },
        { char: "σ",  name: "sigma",               group: "Greek"   },
        { char: "τ",  name: "tau",                 group: "Greek"   },
        { char: "φ",  name: "phi",                 group: "Greek"   },
        { char: "ψ",  name: "psi",                 group: "Greek"   },
        { char: "ω",  name: "omega",               group: "Greek"   },
        { char: "Δ",  name: "Delta uppercase",     group: "Greek"   },
        { char: "Γ",  name: "Gamma uppercase",     group: "Greek"   },
        { char: "Λ",  name: "Lambda uppercase",    group: "Greek"   },
        { char: "Σ",  name: "Sigma uppercase",     group: "Greek"   },
        { char: "Φ",  name: "Phi uppercase",       group: "Greek"   },
        { char: "Ω",  name: "Omega uppercase",     group: "Greek"   },
        // Punctuation / typography
        { char: "—",  name: "em dash",             group: "Punct"   },
        { char: "–",  name: "en dash",             group: "Punct"   },
        { char: "…",  name: "ellipsis",            group: "Punct"   },
        { char: "'",  name: "left single quote",   group: "Punct"   },
        { char: "'",  name: "right single quote",  group: "Punct"   },
        { char: "\u201C", name: "left double quote",  group: "Punct" },
        { char: "\u201D", name: "right double quote", group: "Punct" },
        { char: "«",  name: "left guillemet",      group: "Punct"   },
        { char: "»",  name: "right guillemet",     group: "Punct"   },
        { char: "•",  name: "bullet",              group: "Punct"   },
        { char: "·",  name: "middle dot",          group: "Punct"   },
        { char: "†",  name: "dagger",              group: "Punct"   },
        { char: "‡",  name: "double dagger",       group: "Punct"   },
        { char: "™",  name: "trademark",           group: "Punct"   },
        { char: "©",  name: "copyright",           group: "Punct"   },
        { char: "®",  name: "registered",          group: "Punct"   },
        // Arrows
        { char: "←",  name: "left arrow",          group: "Arrows"  },
        { char: "→",  name: "right arrow",         group: "Arrows"  },
        { char: "↑",  name: "up arrow",            group: "Arrows"  },
        { char: "↓",  name: "down arrow",          group: "Arrows"  },
        { char: "↔",  name: "left right arrow",    group: "Arrows"  },
        { char: "⇐",  name: "double left arrow",   group: "Arrows"  },
        { char: "⇒",  name: "double right arrow",  group: "Arrows"  },
        { char: "⇔",  name: "double both arrow",   group: "Arrows"  },
        // Box drawing
        { char: "─",  name: "box horizontal",      group: "Box"     },
        { char: "│",  name: "box vertical",        group: "Box"     },
        { char: "┌",  name: "box top-left",        group: "Box"     },
        { char: "┐",  name: "box top-right",       group: "Box"     },
        { char: "└",  name: "box bottom-left",     group: "Box"     },
        { char: "┘",  name: "box bottom-right",    group: "Box"     },
        { char: "├",  name: "box tee right",       group: "Box"     },
        { char: "┤",  name: "box tee left",        group: "Box"     },
        { char: "┬",  name: "box tee down",        group: "Box"     },
        { char: "┴",  name: "box tee up",          group: "Box"     },
        { char: "┼",  name: "box cross",           group: "Box"     },
    ]

    property var filteredChars: {
        const q = charSelector.searchQuery.trim().toLowerCase();
        if (q === "") return charData;
        return charData.filter(c =>
            c.char.includes(q) ||
            c.name.toLowerCase().includes(q) ||
            c.group.toLowerCase().includes(q)
        );
    }

    function _copy(ch) {
        Quickshell.execDetached(["sh", "-c", "printf '%s' \"$1\" | wl-copy", "--", ch]);
        charSelector.closeRequested();
    }

    ScrollView {
        anchors.fill: parent
        clip:         true
        ScrollBar.vertical.policy: ScrollBar.AsNeeded

        Flow {
            id: charFlow
            width: charSelector.width
            spacing: 4

            Repeater {
                id: charRepeater
                model: charSelector.filteredChars

                Rectangle {
                    id: charCell

                    required property var modelData
                    required property int index

                    width:  (charSelector.width - (charSelector.columnCount - 1) * 4)
                                / charSelector.columnCount
                    height: width
                    radius: 8
                    color:  cellMouse.containsMouse || charSelector.currentIndex === index
                                ? Theme.base700 : "transparent"

                    Behavior on color { ColorAnimation { duration: 50 } }

                    Text {
                        anchors.centerIn: parent
                        text:             modelData.char
                        color:            charSelector.currentIndex === index
                                              ? Theme.paper : Theme.base50
                        font.pixelSize:   Theme.fontSize + 4
                        font.family:      Theme.fontSans
                    }

                    ToolTip.visible:  cellMouse.containsMouse
                    ToolTip.text:     modelData.name + "  " + modelData.char
                    ToolTip.delay:    600

                    MouseArea {
                        id: cellMouse
                        anchors.fill: parent
                        hoverEnabled: true
                        cursorShape:  Qt.PointingHandCursor
                        onEntered:    charSelector.currentIndex = index
                        onClicked:    charSelector._copy(modelData.char)
                    }
                }
            }

            Text {
                visible:        charSelector.filteredChars.length === 0
                text:           "No characters found"
                color:          Theme.base500
                font.pixelSize: 14
                font.family:    Theme.fontSans
                width:          charSelector.width
                horizontalAlignment: Text.AlignHCenter
                topPadding:     32
            }
        }
    }
}
