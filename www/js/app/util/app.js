define([
    "app/util/Global",
    "app/util/GeneralHelper",
    "app/util/UiHelper",
    "app/util/NwHelper",
    "app/util/ServiceHelper",
    "dojo/domReady!"
], function (Global, GeneralHelper, UiHelper, NwHelper, ServiceHelper) {
    var app = Global.getInstance().app;

    if (!app.isInitialized) {
        app.generalHelper = new GeneralHelper();
        app.uiHelper = new UiHelper();
        app.nwHelper = new NwHelper();
        app.serviceHelper = new ServiceHelper();

        app.generalHelper.switchBundle("en");

        app.isInitialized = true;
    }

    return app;
});
