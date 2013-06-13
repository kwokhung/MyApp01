var main = function () {
    require([
        "dojo/ready",
        "app/util/app"
    ],
    function (ready, app) {
        ready(function () {
            alert("main");
            console.debug(app);
            console.debug(app.test);
            app.test = "haha";

            if (typeof device != "undefined") {
                app.device = device;
            }

            if (typeof navigator != "undefined") {
                app.navigator = navigator;
            }

            require([
                "dojox/mobile",
                "dojox/mobile/parser",
                "dojox/mobile/compat",
                "dojox/mobile/deviceTheme",
                "dojox/dgauges/components/default/CircularLinearGauge",
                "dojox/dgauges/components/default/HorizontalLinearGauge",
                "dojox/dgauges/components/classic/CircularLinearGauge",
                "dojox/dgauges/components/classic/HorizontalLinearGauge",
                "app/widget/special/layout/PnlMain"
            ]);

            ready(function () {
                require([
                    "dojo/on",
                    "dijit/registry",
                    "dojo/domReady!"
                ],
                function (on, registry) {
                });
            });
        });
    })
};