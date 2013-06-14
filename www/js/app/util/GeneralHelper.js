define([
    "dojo/_base/declare",
    "dojo/_base/kernel",
    "app/util/app"
], function (declare, kernel, app) {
    return declare(null, {
        dumpObject: function (objectName, object) {
            try {
                console.log("%s: %o", objectName, object);
            }
            catch (ex) {
            }
        },
        alert: function (title, message) {
            if (app.navigator != null) {
                if (typeof app.navigator.notification != "undefined") {
                    app.navigator.notification.alert(message, null, title, "OK");
                }
                else {
                    alert(title + "\n\n" + message);
                }
            }
            else {
                alert(title + "\n\n" + message);
            }
        },
    });
});
