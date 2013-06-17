define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/dom-construct",
    "dojo/query",
    "dojo/Deferred",
    "dojox/mobile/ProgressIndicator",
    "dojox/mobile/Button",
    "dojox/mobile/SimpleDialog",
    "app/util/Global"
], function (declare, lang, domConstruct, query, Deferred, ProgressIndicator, Button, SimpleDialog, Global) {
    var app = Global.getInstance().app;

    return declare("app.util.special.mobile.SimpleDialog", [SimpleDialog], {
        progressIndicator: new ProgressIndicator({ center: false }),
        show: function () {
            this.inherited(arguments);

            this.progressIndicator.start();

            this._deferred = new Deferred(lang.hitch(this, function () {
                delete this._deferred;
            }));

            var promise = this._deferred.promise;

            this._deferred.resolve(true);
            delete this._deferred;

            return promise;
        },
        postCreate: function () {
            this.inherited(arguments);

            domConstruct.place(this.domNode, query("body", document)[0], "last");

            domConstruct.create("div", {
                "class": "mblSimpleDialogText",
                innerHTML: "Processing..."
            }, this.domNode);

            domConstruct.place(this.progressIndicator.domNode, query("td", domConstruct.create("div", {
                "class": "mblSimpleDialogText",
                innerHTML:
                    "<table style='width: 100%;' cellspacing='0'>" +
                        "<tbody valign='top'>" +
                            "<tr align='center'>" +
                                "<td>" +
                                "</td>" +
                            "</tr>" +
                        "</tbody>" +
                    "</table>"
            }, this.domNode))[0], "last");

            var cancelBtn = new Button({
                class: "mblSimpleDialogButton mblRedButton",
                innerHTML: "Cancel"
            });
            cancelBtn.placeAt(this.domNode);
        },
        destroy: function () {
            //this.hide();

            if (this._deferred) {
                this._deferred.cancel();
            }

            //this.inherited(arguments);
        }
    });
});
