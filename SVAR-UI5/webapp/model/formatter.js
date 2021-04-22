sap.ui.define([], function () {
	"use strict";
	return {
		statusText: function (sStatus) {
			var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
			switch (sStatus) {
				case "A":
					return resourceBundle.getText("popularity_A");
				case "B":
					return resourceBundle.getText("popularity_B");
				case "C":
					return resourceBundle.getText("popularity_C");
				default:
					return sStatus;
			}
		}
	};
});