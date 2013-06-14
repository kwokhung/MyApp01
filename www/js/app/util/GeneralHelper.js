define([
    "dojo/_base/declare",
    "app/util/Global"
], function (declare, Global) {
    var app = Global.getInstance().app;

    return declare(null, {
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
