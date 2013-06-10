var main = function () {
    require([
        "dojo/ready",
        "dojox/mobile/ContentPane",
        "dojox/dgauges/components/default/CircularLinearGauge",
        "dojox/dgauges/components/default/HorizontalLinearGauge",
        "dojox/dgauges/components/classic/CircularLinearGauge",
        "dojox/dgauges/components/classic/HorizontalLinearGauge"
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
                    "dojo/domReady!"
                ],
                function (on, registry) {
                    on(registry.byId("blkMainContent"), "load", function () {
                        if (typeof (device) != "undefined") {
                            registry.byId("txtPlatform").set("value", device.platform);
                            registry.byId("txtVersion").set("value", device.version);

                            var states = {};
                            states[Connection.UNKNOWN] = 'Unknown connection';
                            states[Connection.ETHERNET] = 'Ethernet connection';
                            states[Connection.WIFI] = 'WiFi connection';
                            states[Connection.CELL_2G] = 'Cell 2G connection';
                            states[Connection.CELL_3G] = 'Cell 3G connection';
                            states[Connection.CELL_4G] = 'Cell 4G connection';
                            states[Connection.NONE] = 'No network connection';

                            registry.byId("txtConnection").set("value", states[navigator.network.connection.type]);
                        }
                    });
                });
            });
        });
    })
};