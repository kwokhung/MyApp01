define([
    "dojo/_base/declare",
    "dojo/_base/kernel",
    "app/util/Global"
], function (declare, kernel, Global) {
    var app = Global.getInstance().app;

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
        switchBundle: function (locale) {
            kernel.locale = locale;

            require([
                "dojo/i18n!app/nls/Bundle"
            ], function (bundle) {
                app.bundle = bundle;
            });
        }
    });
});
