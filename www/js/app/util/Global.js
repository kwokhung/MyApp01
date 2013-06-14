define([
    "dojo/_base/declare",
    "dojo/i18n!app/nls/Bundle"
], function (declare, bundle) {
    var Global = declare(null, {
        app: {
            isInitialized: false,
            bundle: bundle,
            generalHelper: null,
            uiHelper: null,
            nwHelper: null,
            serviceHelper: null,
            device: null,
            navigator: null
        }
    });

    Global._instance = null;

    Global.getInstance = function () {
        return (Global._instance == null ? new Global() : Global._instance);
    };

    return Global;
});
