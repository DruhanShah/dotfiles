import QtQuick

QtObject {
    // NaN if unavailable.
    required property int columnIndexInScrollingLayout

    required property int tileIndexInScrollingLayout
    required property real tileWidth
    required property real tileHeight

    required property int windowWidth
    required property int windowHeight

    required property int tilePosInWorkspaceViewX
    required property int tilePosInWorkspaceViewY

    required property int windowOffsetInTileX
    required property int windowOffsetInTileY
}
