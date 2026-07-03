import QtQuick
import QtQuick.Layouts
import qs.modules.common

Rectangle {
    id: root
    height: 42
    Layout.fillWidth: true
    color: Theme.bg_dim
    radius: 21

    // Expose model and currentIndex so parent can control/read them
    property alias model: listView.model
    property alias currentIndex: listView.currentIndex

    ListView {
        id: listView
        anchors.fill: parent
        anchors.margins: 5
        orientation: ListView.Horizontal
        spacing: 2
        interactive: false

        highlightFollowsCurrentItem: true
        highlightMoveDuration: 150
        highlightResizeDuration: 150
        highlightMoveVelocity: -1
        
        highlight: Rectangle {
            color: Theme.fg
            radius: 16
        }

        delegate: Tab {
            title: modelData
            isActive: ListView.isCurrentItem
            onClicked: listView.currentIndex = index
        }
    }
}
