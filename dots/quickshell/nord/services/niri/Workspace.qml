import QtQuick
import qs.services.niri

QtObject {
    required property int workspaceId

    required property int idx
    required property string name
    required property string output

    required property bool isUrgent
    required property bool isActive // One per output
    required property bool isFocused // Always only one
    required property int activeWindowId // -1 if workspace is empty

    property list<NiriWindow> windows: []

    function focus() {
	Niri.focusWorkspace(workspaceId)
    }
}
