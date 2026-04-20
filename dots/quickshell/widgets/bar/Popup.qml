import QtQuick
import QtQuick.Shapes
import Quickshell
import qs.modules.common

PopupWindow {
    id: root

    required property Item anchorItem

    property int contentWidth: 280
    property int contentHeight: 0
    readonly property bool isOpen: _open

    readonly property int _pad_x: 24
    readonly property int _pad_y: 24
    readonly property int _r:   8

    implicitWidth:  contentWidth  + 2*_pad_x
    implicitHeight: contentHeight + 2*_pad_y

    color: "transparent"

    anchor {
	item: anchorItem
	edges: Edges.Bottom
        gravity: Edges.Bottom
    }

    property bool _open: false
    visible: false

    function open() {
        if (BarState.activePopup && BarState.activePopup !== root)
            BarState.activePopup.close()
        BarState.activePopup = root
        _open = true
        visible = true
        _anim.from  = -implicitHeight
        _anim.to    = 0
        _anim.start()
    }

    function close() {
        _open = false
        BarState.activePopup = null
        _anim.from = 0
        _anim.to   = -implicitHeight
        _anim.start()
    }

    function toggle() {
        if (_open) close()
        else open()
    }

    Item {
        anchors.fill: parent
        clip: true

        Item {
            id: _wrapper
            width:  parent.width
            height: parent.height

            Rectangle {
                anchors.fill:        parent
                color:               Theme.base850
                topLeftRadius:       0
                topRightRadius:      0
                bottomLeftRadius:    _r
                bottomRightRadius:   _r
            }

            Item {
                id: _contentArea
                anchors {
		    fill: parent
                    topMargin:   _pad_y - 8
                    leftMargin:  _pad_x
                    rightMargin: _pad_x
                    bottomMargin: _pad_y
                }
            }
        }
    }

    NumberAnimation {
        id: _anim
        target: _wrapper
        property: "y"
        duration: 200
        easing.type: Easing.InOutQuad
        onFinished: if (!_open) root.visible = false
    }

    default property alias content: _contentArea.data
}
