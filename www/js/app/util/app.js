define([
    "app/util/Global",
    "dojo/domReady!"
    ],
    function (Global) {
        var app = Global.getInstance().app;

        if (!app.isInitialized) {
            app.test = "hihi";
            app.isInitialized = true;
        }

        return app;
    });
