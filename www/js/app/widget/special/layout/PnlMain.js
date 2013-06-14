define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/on",
    "dijit/registry",
    "dojox/mobile/ContentPane",
    "app/util/app"
], function (declare, lang, on, registry, ContentPane, app) {
    return declare("app.widget.special.layout.PnlMain", [ContentPane], {
        postCreate: function () {
            this.inherited(arguments);

            on(this, "load", lang.hitch(this, function (e) {
                if (e != null) {
                    e.preventDefault();
                }

                if (app.device != null) {
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
                        if (app.navigator != null) {
                            app.navigator.notification.alert("This is My Application 01.", null, "About", "OK");
                        }
                        else {
                            alert("This is My Application 01.");
                        }
                    });

                    /*on(document, "searchbutton", function () {
                        alert("Search");
                    });*/

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
                        }, function () {
                            alert("Error getting contacts.");
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
                            alert("Error getting location." + "\n\n" + "Error Code: " + error.code + "\n" + "Error Message: " + error.message);
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
                            alert("Error getting acceleration.");
                        }, {
                            frequency: 1000
                        });
                    }

                    if (typeof app.navigator.camera != "undefined") {
                        app.navigator.camera.getPicture(function (imageData) {
                            document.getElementById("imgPhoto").src = "data:image/jpeg;base64," + imageData;
                        }, function () {
                            alert("Error getting picture.");
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
