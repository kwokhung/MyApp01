define([
    "dojo/_base/declare",
    "dojox/mobile/SimpleDialog"
], function (declare, SimpleDialog) {
    return declare("app.util.special.mobile.SimpleDialog", [SimpleDialog], {
        show: function () {
            this.inherited(arguments);
        },
        destroy: function () {
            this.inherited(arguments);
        }
    });
});
