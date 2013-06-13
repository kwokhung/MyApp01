define([
    "dojo/_base/declare",
    "dojo/on",
    "dijit/registry",
    "dojox/mobile/ContentPane",
    "app/util/app"
], function (declare, on, registry, ContentPane, app) {
    return declare("app.widget.special.layout.PnlMain", [ContentPane], {
        postCreate: function () {
            this.inherited(arguments);
            alert("PnlMain Begin");
            console.debug(app);
            console.debug(app.device);
            console.debug(app.navigator);

            if (app.device != null) {
                alert("Device");
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
                alert("Navigator");
                var connectionStates = {};
                connectionStates[Connection.UNKNOWN] = 'Unknown connection';
                connectionStates[Connection.ETHERNET] = 'Ethernet connection';
                connectionStates[Connection.WIFI] = 'WiFi connection';
                connectionStates[Connection.CELL_2G] = 'Cell 2G connection';
                connectionStates[Connection.CELL_3G] = 'Cell 3G connection';
                connectionStates[Connection.CELL_4G] = 'Cell 4G connection';
                connectionStates[Connection.NONE] = 'No network connection';

                registry.byId("txtConnection").set("value", connectionStates[app.navigator.network.connection.type]);

                app.navigator.contacts.find(["displayName", "phoneNumbers"], function (contacts) {
                    registry.byId("txtName").set("value", contacts[0].displayName);
                    registry.byId("txtPhone").set("value", contacts[0].phoneNumbers[0].value);
                }, function () {
                    alert("Error getting contacts.");
                }, {
                    filter: "\u6731\u570b\u96c4",
                    multiple: true
                });

                app.navigator.geolocation.getCurrentPosition(function (position) {
                    registry.byId("txtLatitude").set("value", position.coords.latitude);
                    registry.byId("txtLongitude").set("value", position.coords.longitude);
                }, function () {
                    alert("Error getting location.");
                });

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

            alert("PnlMain End");
        }
    });
});
