var count = 1;
sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast",
   "sap/ui/core/routing/History"
], function (Controller, MessageToast, History) {
   "use strict";
   return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
   	changeTheme : function() {
			if(count) {
				sap.ui.getCore().applyTheme("sap_fiori_3");
				count = 0;
			} else {
				sap.ui.getCore().applyTheme("sap_fiori_3_dark");
				count = 1;
			}
		},
		onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
		},
		goToHomePage : function () {
			console.log("in app controller ")
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = this.getOwnerComponent().getRouter();
				oRouter.navTo("homePage", {}, true);
			}
		},
		showTime : function () {
			var sMsg = new  Date();
			MessageToast.show(sMsg.getHours().toString() + ":" +sMsg.getMinutes());
		}
   });
});