define([
    "app/util/Global",
    "app/util/GeneralHelper",
    "dojo/domReady!"
], function (Global, GeneralHelper) {
    var app = Global.getInstance().app;

    if (!app.isInitialized) {
        app.generalHelper = new GeneralHelper();

        app.isInitialized = true;
    }

    return app;
});
