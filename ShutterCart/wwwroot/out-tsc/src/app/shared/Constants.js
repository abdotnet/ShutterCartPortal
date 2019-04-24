"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Constants;
(function (Constants) {
    //constant for fetching authorization from local browser keystore
    Constants.OAuthTokenKey = "jlocker";
    Constants.UserKey = "ShutterCart.User";
    Constants.Web_Address = "";
    Constants.LoginUrl = "/account/index";
    Constants.Roles = {
        Administrator: "Administrator",
        User: "User",
    };
    Constants.AppMonths = {
        January: "January",
        February: "February",
        March: "March",
        April: "April",
        May: "May",
        June: "June",
        July: "July",
        August: "August",
        September: "September",
        October: "October",
        November: "November",
        December: "December"
    };
    Constants.DATE_FMT = 'dd/MMM/yyyy';
    Constants.DATE_TIME_FMT = Constants.DATE_FMT + " hh:mm:ss";
})(Constants = exports.Constants || (exports.Constants = {}));
//# sourceMappingURL=Constants.js.map