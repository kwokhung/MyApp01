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
                        if (typeof device != "undefined") {
                            /*on(document, "pause", function () {
                                alert("Pause");
                            });

                            on(document, "resume", function () {
                                alert("Resume");
                            });

                            on(document, "online", function () {
                                alert("Online");
                            });

                            on(document, "offline", function () {
                                alert("Offline");
                            });

                            on(document, "backbutton", function () {
                                alert("Back");
                            });*/

                            on(document, "menubutton", function () {
                                alert("Menu");
                            });

                            /*on(document, "searchbutton", function () {
                                alert("Search");
                            });*/

                            registry.byId("txtPlatform").set("value", device.platform);
                            registry.byId("txtVersion").set("value", device.version);
                        }

                        if (typeof navigator != "undefined") {
                            var connectionStates = {};
                            connectionStates[Connection.UNKNOWN] = 'Unknown connection';
                            connectionStates[Connection.ETHERNET] = 'Ethernet connection';
                            connectionStates[Connection.WIFI] = 'WiFi connection';
                            connectionStates[Connection.CELL_2G] = 'Cell 2G connection';
                            connectionStates[Connection.CELL_3G] = 'Cell 3G connection';
                            connectionStates[Connection.CELL_4G] = 'Cell 4G connection';
                            connectionStates[Connection.NONE] = 'No network connection';

                            registry.byId("txtConnection").set("value", connectionStates[navigator.network.connection.type]);

                            var myContact = navigator.contacts.create({ "displayName": "\u6731\u570b\u96c4" });

                            if (myContact != null && myContact.phoneNumbers.length > 0) {
                                registry.byId("txtMyPhone").set("value", myContact.phoneNumbers[0]);
                            }

                            var options = new ContactFindOptions();
                            options.filter = "\u6731\u570b\u96c4";
                            options.multiple = true;

                            navigator.contacts.find(["displayName", "name"], function (contacts) {
                                alert('Found ' + contacts.length + ' contacts.');
                            }, function (contactError) {
                                alert('onError!');
                            }, options);
                        }
                    });
                });
            });
        });
    })
};