sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "../model/formatter"
], function(Controller, MessageToast, formatter) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.PlaceCard", {

        formatter: formatter,
        onPress: function(oEvent) {
            var oItem = oEvent.getSource();
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("place", {
                placePath: window.encodeURIComponent(oItem.getBindingContext("place").getPath().substr(1))
            });
        },
        showClicks: function(oEvent) {
            MessageToast.show(oEvent.oSource.mProperties.text);
        },
        likeClicked: function() {
            this.getOwnerComponent().openHelloDialog();
        }
    });
});