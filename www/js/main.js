var main = function () {
    require([
        "dojo/ready",
        "dojox/mobile/ContentPane",
        "dojox/dgauges/components/default/CircularLinearGauge",
        "dojox/dgauges/components/default/HorizontalLinearGauge",
        "dojox/dgauges/components/classic/CircularLinearGauge",
        "dojox/dgauges/components/classic/HorizontalLinearGauge",
        "app/widget/special/layout/PnlMain"
    ],
    function (ready) {
        ready(function () {
            require([
                "dojox/mobile",
                "dojox/mobile/parser",
                "dojox/mobile/compat",
                "dojox/mobile/deviceTheme"
            ]);

            ready(function () {
                require([
                    "dojo/on",
                    "dijit/registry",
                    "app/util/app",
                    "dojo/domReady!"
                ],
                function (on, registry, app) {
                    if (typeof device != "undefined") {
                        app.device = device;
                    }

                    if (typeof navigator != "undefined") {
                        app.navigator = navigator;
                    }
                });
            });
        });
    })
};