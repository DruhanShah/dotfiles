import QtQuick

QtObject {
    required property int windowId

    required property string title
    required property string appId
    required property int pid

    required property int workspaceId
    required property bool isFocused
    required property bool isFloating
    required property bool isUrgent

    required property WindowLayout layout

    required property real focusTimestamp
}
