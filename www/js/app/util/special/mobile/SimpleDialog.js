define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dojo/Deferred",
    "dojox/mobile/SimpleDialog",
    "app/util/app"
], function (declare, lang, Deferred, SimpleDialog, app) {
    return declare("app.util.special.mobile.SimpleDialog", [SimpleDialog], {
        show: function () {
            this.inherited(arguments);

            this._deferred = new Deferred(lang.hitch(this, function () {
                app.generalHelper.alert("SimpleDialog", "cancel");
                delete this._deferred;
            }));

            var promise = this._deferred.promise;

            this._deferred.resolve(true);
            delete this._deferred;

            return promise;
        },
        destroy: function () {
            app.generalHelper.alert("SimpleDialog", "destroy");
            this.hide();

            if (this._deferred) {
                this._deferred.cancel();
            }

            this.inherited(arguments);
        }
    });
});
