define([
    "dojo/_base/declare"
], function (declare) {
    var Global = declare(null, {
        app: {
            isInitialized: false,
            generalHelper: null,
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
