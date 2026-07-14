import QtQuick
import QtQuick.VectorImage
import QtQuick.VectorImage.Helpers
import QtQuick.Shapes

import qs.services

Item {
    implicitWidth: 512
    implicitHeight: 512
    component AnimationsInfo : QtObject
    {
        property bool paused: false
        property int loops: 1
        signal restart()
    }
    property AnimationsInfo animations : AnimationsInfo {}
    transform: [
        Scale { xScale: width / 512; yScale: height / 512 }
    ]
    id: _qt_node0
    Item {
        id: _qt_node1
        Shape {
            objectName: "hl3"
            id: _qt_node2
	    preferredRendererType: Shape.CurveRenderer
            ShapePath {
                id: _qt_shapePath_0
                objectName: "svg_path:hl3"
                strokeColor: "transparent"
                fillColor: Theme.base100
                fillRule: ShapePath.WindingFill
                PathSvg { path: "M 156.5 261 L 127.5 311 L 161.5 370 L 113.5 452 L 128.25 477.25 L 157 477.25 L 190.5 420 L 223.5 477.25 L 281 477.25 L 156.5 261 " }
            }
        }
    }
    Item {
        id: _qt_node3
        transform: TransformGroup {
            id: _qt_node3_transform_base_group
            Matrix4x4 { matrix: PlanarTransform.fromAffineMatrix(0.5, 0.866025, -0.866025, 0.5, 349.703, -93.7025)}
        }
        Shape {
            objectName: "hl3"
            id: _qt_node4
	    preferredRendererType: Shape.CurveRenderer
            ShapePath {
                id: _qt_shapePath_1
                objectName: "svg_path:hl3"
                strokeColor: "transparent"
                fillColor: Theme.base300
                fillRule: ShapePath.WindingFill
                PathSvg { path: "M 156.5 261 L 127.5 311 L 161.5 370 L 113.5 452 L 128.25 477.25 L 157 477.25 L 190.5 420 L 223.5 477.25 L 281 477.25 L 156.5 261 " }
            }
        }
    }
    Item {
        id: _qt_node5
        transform: TransformGroup {
            id: _qt_node5_transform_base_group
            Matrix4x4 { matrix: PlanarTransform.fromAffineMatrix(-0.5, 0.866025, -0.866025, -0.5, 605.703, 162.297)}
        }
        Shape {
            objectName: "hl3"
            id: _qt_node6
	    preferredRendererType: Shape.CurveRenderer
            ShapePath {
                id: _qt_shapePath_2
                objectName: "svg_path:hl3"
                strokeColor: "transparent"
                fillColor: Theme.base100
                fillRule: ShapePath.WindingFill
                PathSvg { path: "M 156.5 261 L 127.5 311 L 161.5 370 L 113.5 452 L 128.25 477.25 L 157 477.25 L 190.5 420 L 223.5 477.25 L 281 477.25 L 156.5 261 " }
            }
        }
    }
    Item {
        id: _qt_node7
        transform: TransformGroup {
            id: _qt_node7_transform_base_group
            Matrix4x4 { matrix: PlanarTransform.fromAffineMatrix(-1, 0, 0, -1, 512, 512)}
        }
        Shape {
            objectName: "hl3"
            id: _qt_node8
	    preferredRendererType: Shape.CurveRenderer
            ShapePath {
                id: _qt_shapePath_3
                objectName: "svg_path:hl3"
                strokeColor: "transparent"
                fillColor: Theme.base300
                fillRule: ShapePath.WindingFill
                PathSvg { path: "M 156.5 261 L 127.5 311 L 161.5 370 L 113.5 452 L 128.25 477.25 L 157 477.25 L 190.5 420 L 223.5 477.25 L 281 477.25 L 156.5 261 " }
            }
        }
    }
    Item {
        id: _qt_node9
        transform: TransformGroup {
            id: _qt_node9_transform_base_group
            Matrix4x4 { matrix: PlanarTransform.fromAffineMatrix(-0.5, -0.866025, 0.866025, -0.5, 162.297, 605.703)}
        }
        Shape {
            objectName: "hl3"
            id: _qt_node10
	    preferredRendererType: Shape.CurveRenderer
            ShapePath {
                id: _qt_shapePath_4
                objectName: "svg_path:hl3"
                strokeColor: "transparent"
                fillColor: Theme.base100
                fillRule: ShapePath.WindingFill
                PathSvg { path: "M 156.5 261 L 127.5 311 L 161.5 370 L 113.5 452 L 128.25 477.25 L 157 477.25 L 190.5 420 L 223.5 477.25 L 281 477.25 L 156.5 261 " }
            }
        }
    }
    Item {
        id: _qt_node11
        transform: TransformGroup {
            id: _qt_node11_transform_base_group
            Matrix4x4 { matrix: PlanarTransform.fromAffineMatrix(0.5, -0.866025, 0.866025, 0.5, -93.7025, 349.703)}
        }
        Shape {
            objectName: "hl3"
            id: _qt_node12
	    preferredRendererType: Shape.CurveRenderer
            ShapePath {
                id: _qt_shapePath_5
                objectName: "svg_path:hl3"
                strokeColor: "transparent"
                fillColor: Theme.base300
                fillRule: ShapePath.WindingFill
                PathSvg { path: "M 156.5 261 L 127.5 311 L 161.5 370 L 113.5 452 L 128.25 477.25 L 157 477.25 L 190.5 420 L 223.5 477.25 L 281 477.25 L 156.5 261 " }
            }
        }
    }
}
