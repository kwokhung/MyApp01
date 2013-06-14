define([
    "dojo/_base/declare",
    "dojox/mobile/SimpleDialog"
], function (declare, SimpleDialog) {
    return declare("app.util.special.mobile.SimpleDialog", [SimpleDialog], {
        postCreate: function () {
            this.inherited(arguments);
        }
    });
});
