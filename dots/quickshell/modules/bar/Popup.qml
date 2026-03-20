import QtQuick
import QtQuick.Shapes
import Quickshell
import qs.modules.common
import qs.modules.bar

PopupWindow {
    id: root

    required property Item anchorItem

    property int contentWidth: 280
    property int contentHeight: 0
    readonly property bool isOpen: _open

    readonly property int _pad: 24
    readonly property int _r:   8

    implicitWidth:  contentWidth  + 2*_pad + 2*_r
    implicitHeight: contentHeight + 2*_pad + _r

    color: "transparent"

    anchor {
        item:    anchorItem
        edges:   Edges.Bottom
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
        _wrapper.y = -implicitHeight
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
                anchors {
                    fill:        parent
                    topMargin:   _r
                    leftMargin:  _r
                    rightMargin: _r
                }
                color:               Theme.base850
                topLeftRadius:       0
                topRightRadius:      0
                bottomLeftRadius:    _r
                bottomRightRadius:   _r
            }

            Shape {
                width:  parent.width
                height: _r
                preferredRendererType: Shape.CurveRenderer

                ShapePath {
                    strokeWidth: 0
                    fillColor:   Theme.base850

                    startX: 0; startY: 0
                    PathLine {
			x: root.implicitWidth
			y: 0
		    }
                    PathArc {
                        x:         root.implicitWidth - _r
                        y:         _r
                        radiusX:   _r
                        radiusY:   _r
                        direction: PathArc.Counterclockwise
                    }
                    PathLine {
			x: _r
			y: _r
		    }
                    PathArc {
                        x:         0
                        y:         0
                        radiusX:   _r
                        radiusY:   _r
                        direction: PathArc.Counterclockwise
                    }
                }
            }

            Item {
                id: _contentArea
                anchors {
                    top:         parent.top
                    left:        parent.left
                    right:       parent.right
                    bottom:      parent.bottom
                    topMargin:   _pad
                    leftMargin:  _pad + _r
                    rightMargin: _pad + _r
                    bottomMargin: _pad
                }
            }
        }
    }

    NumberAnimation {
        id: _anim
        target:   _wrapper
        property: "y"
        duration: 200
        easing.type: Easing.InOutQuad
        onFinished: if (!_open) root.visible = false
    }

    default property alias content: _contentArea.data
}
