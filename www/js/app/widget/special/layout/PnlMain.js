define([
    "dojo/_base/declare",
    "dojox/mobile/ContentPane"
], function (declare, ContentPane) {
    return declare("app.widget.special.layout.PnlMain", [ContentPane], {
        postCreate: function () {
            this.inherited(arguments);
        }
    });
});
