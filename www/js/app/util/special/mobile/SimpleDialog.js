define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/dom-construct",
    "dojo/query",
    "dojo/Deferred",
    "dojox/mobile/SimpleDialog",
    "app/util/Global"
], function (declare, lang, domConstruct, query, Deferred, SimpleDialog, Global) {
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

            domConstruct.create("div", {
                "class": "mblSimpleDialogText",
                innerHTML: "Processing..."
            }, this.domNode);

            domConstruct.place(this.domNode, query("body", document)[0], "last");
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
