define([
    "dojo/_base/declare"
], function (declare) {
    var Global = declare(null, {
        app: {
            isInitialized: false,
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
