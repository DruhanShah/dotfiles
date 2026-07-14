import QtQuick
import Quickshell
import qs.services.niri

QtObject {
    required property string name

    required property string make
    required property string model
    required property string serial
    required property int physicalWidth
    required property int physicalHeight

    // Available modes for the output.
    required property list<OutputMode> modes

    required property int currentMode
    required property bool isCustomMode
    required property bool vrrSupported
    required property bool vrrEnabled

    // TODO: Implement logical output.

    function toShellScreen(): ShellScreen {
	return Quickshell.screens.find(s => s.name == name)
    }

    readonly property bool hasFullscreenWindowFocused: {
	const workspace = Niri.workspaces.find(workspace => {
	    return workspace.isActive && workspace.output == name
	})
	if (workspace) {
	    return Niri.windows.find(window => {
		const result = window.isFocused
		      && window.layout.windowWidth == modes[currentMode].width
		      && window.layout.windowHeight == modes[currentMode].height
		return result
	    }) ? true : false
	}
	return false
    }
}
