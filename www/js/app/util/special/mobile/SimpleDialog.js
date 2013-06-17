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
        show: function () {
            this.inherited(arguments);

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

            var piIns = ProgressIndicator.getInstance();
            domConstruct.create("div", {
                "class": "mblSimpleDialogText",
                innerHTML: "Processing..."
            }, this.domNode);

            /*var piBox = domConstruct.create("div", {
                "class": "mblSimpleDialogText"
            }, this.domNode);
            piBox.appendChild(piIns.domNode);*/
            domConstruct.place(piIns.domNode, this.domNode, "last");
            var cancelBtn = new Button({
                class: "mblSimpleDialogButton mblRedButton",
                innerHTML: "Cancel"
            });
            cancelBtn.placeAt(this.domNode);
            //piIns.start();
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
