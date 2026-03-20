import QtQuick
import Quickshell
import Quickshell.Services.Notifications

Singleton {
    id: root

    property bool doNotDisturb: false
    property int unreadCount: 0

    property var history: []

    function clearHistory() {
        history = [];
        unreadCount = 0;
    }

    function dismissAll() {
        const tracked = server.trackedNotifications;
        for (let i = tracked.count - 1; i >= 0; i--)
            tracked.get(i).dismiss();
    }

    NotificationServer {
        id: server

        actionsSupported: true
        bodySupported: true
        bodyMarkupSupported: true
        imageSupported: true
        inlineReplySupported: true
        persistenceSupported: true
        keepOnReload: false

        onNotification: function(notif) {
            notif.tracked = true;

            const entry = {
                appName:   notif.appName,
                summary:   notif.summary,
                body:      notif.body,
                image:     notif.image,
                urgency:   notif.urgency,
                timestamp: Date.now(),
                id:        notif.id,
            };
            root.history = [...root.history, entry];
            root.unreadCount++;

            if (root.doNotDisturb) {
                notif.expire();
            }
        }
    }

    property var trackedNotifications: server.trackedNotifications
}
