import QtQuick
import QtQuick.Layouts
import Quickshell

import qs.modules.common


Item {
    id: root
    width: parent.width
    height: 24
    Layout.fillWidth: true

    default property alias content: tabRow.children
    property var activeTab: null

    RowLayout {
	id: tabRow
	anchors.fill: parent
	anchors.margins: 0
	spacing: 2
    }
}
