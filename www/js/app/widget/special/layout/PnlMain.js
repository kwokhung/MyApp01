define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/on",
    "dojo/string",
    "dijit/registry",
    "dojox/mobile/ContentPane",
    "app/util/app"
], function (declare, lang, on, string, registry, ContentPane, app) {
    return declare("app.widget.special.layout.PnlMain", [ContentPane], {
        postCreate: function () {
            this.inherited(arguments);

            on(this, "load", lang.hitch(this, function (e) {
                if (e != null) {
                    e.preventDefault();
                }

                app.serviceHelper.requestGetService(
                    string.substitute("${serviceUrl}?service=${service}&languageDisplay=${languageDisplay}", {
                        serviceUrl: "https://www.guococom.com/GuocoCommoditiesServer/serviceportal.aspx",
                        service: "marketoutlook",
                        languageDisplay: app.language
                    }),
                    null,
                    function (response) {
                        app.generalHelper.alert("analysis", response.analysis);
                    }
                );

                if (app.device != null) {
                    on(document, "menubutton", function () {
                        app.generalHelper.alert("About", "This is My Application 01.");
                    });

                    registry.byId("txtPlatform").set("value", app.device.platform);
                    registry.byId("txtVersion").set("value", app.device.version);
                }

                if (app.navigator != null) {
                    if (typeof app.navigator.network != "undefined") {
                        var connectionStates = {};
                        connectionStates[Connection.UNKNOWN] = "Unknown connection";
                        connectionStates[Connection.ETHERNET] = "Ethernet connection";
                        connectionStates[Connection.WIFI] = "WiFi connection";
                        connectionStates[Connection.CELL_2G] = "Cell 2G connection";
                        connectionStates[Connection.CELL_3G] = "Cell 3G connection";
                        connectionStates[Connection.CELL_4G] = "Cell 4G connection";
                        connectionStates[Connection.NONE] = "No network connection";

                        registry.byId("txtConnection").set("value", connectionStates[app.navigator.network.connection.type]);
                    }

                    if (typeof app.navigator.contacts != "undefined") {
                        app.navigator.contacts.find(["displayName", "phoneNumbers"], function (contacts) {
                            registry.byId("txtName").set("value", contacts[0].displayName);
                            registry.byId("txtPhone").set("value", contacts[0].phoneNumbers[0].value);
                        }, function (error) {
                            app.generalHelper.alert("Error getting contacts.", "Error Code: " + error.code);
                        }, {
                            filter: "\u6731\u570b\u96c4",
                            multiple: true
                        });
                    }

                    if (typeof app.navigator.geolocation != "undefined") {
                        app.navigator.geolocation.getCurrentPosition(function (position) {
                            registry.byId("txtLatitude").set("value", position.coords.latitude);
                            registry.byId("txtLongitude").set("value", position.coords.longitude);
                        }, function (error) {
                            app.generalHelper.alert("Error getting location.", "Error Code: " + error.code + "\n" + "Error Message: " + error.message);
                        }, {
                            enableHighAccuracy: false
                        });
                    }

                    if (typeof app.navigator.accelerometer != "undefined") {
                        app.navigator.accelerometer.watchAcceleration(function (acceleration) {
                            registry.byId("txtX").set("value", acceleration.x);
                            registry.byId("txtY").set("value", acceleration.y);
                            registry.byId("txtZ").set("value", acceleration.z);
                        }, function () {
                            app.generalHelper.alert("Error getting acceleration.", "");
                        }, {
                            frequency: 1000
                        });
                    }

                    if (typeof app.navigator.camera != "undefined") {
                        app.navigator.camera.getPicture(function (imageData) {
                            document.getElementById("imgPhoto").src = "data:image/jpeg;base64," + imageData;
                        }, function (message) {
                            app.generalHelper.alert("Error getting picture.", "Error Message: " + message);
                        }, {
                            quality: 50,
                            destinationType: Camera.DestinationType.DATA_URL/*FILE_URI*//*NATIVE_URI*/,
                            sourceType: Camera.PictureSourceType./*PHOTOLIBRARY*/CAMERA/*SAVEDPHOTOALBUM*/,
                            encodingType: Camera.EncodingType.JPEG/*PNG*/
                        });
                    }
                }
            }));
        }
    });
});
