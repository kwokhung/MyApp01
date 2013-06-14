define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/Deferred",
    "dojox/mobile/SimpleDialog"
], function (declare, lang, Deferred, SimpleDialog) {
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
        destroy: function () {
            if (this._deferred) {
                this._deferred.cancel();
            }

            this.inherited(arguments);
        }
    });
});
