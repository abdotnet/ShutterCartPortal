"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { publicDecrypt } from "crypto";
var Token = /** @class */ (function () {
    function Token() {
    }
    Object.defineProperty(Token.prototype, "loginRequired", {
        get: function () {
            return (this.token.length == 0 || this.expiration > new Date());
        },
        enumerable: true,
        configurable: true
    });
    return Token;
}());
exports.Token = Token;
var Operation = /** @class */ (function () {
    function Operation() {
    }
    return Operation;
}());
exports.Operation = Operation;
var Alert = /** @class */ (function () {
    function Alert() {
    }
    return Alert;
}());
exports.Alert = Alert;
var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType = exports.AlertType || (exports.AlertType = {}));
var Category = /** @class */ (function () {
    function Category() {
    }
    return Category;
}());
exports.Category = Category;
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());
exports.Product = Product;
var Question = /** @class */ (function () {
    function Question() {
    }
    return Question;
}());
exports.Question = Question;
var Advert = /** @class */ (function () {
    function Advert() {
    }
    return Advert;
}());
exports.Advert = Advert;
var UserLogin = /** @class */ (function () {
    function UserLogin() {
    }
    return UserLogin;
}());
exports.UserLogin = UserLogin;
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var PasswordChange = /** @class */ (function () {
    function PasswordChange() {
    }
    return PasswordChange;
}());
exports.PasswordChange = PasswordChange;
var RegChannel;
(function (RegChannel) {
    RegChannel[RegChannel["IsMobile"] = 1] = "IsMobile";
    RegChannel[RegChannel["IsWeb"] = 2] = "IsWeb";
})(RegChannel || (RegChannel = {}));
var UserStatus;
(function (UserStatus) {
    UserStatus[UserStatus["Pending"] = 0] = "Pending";
    UserStatus[UserStatus["Verified"] = 1] = "Verified";
    UserStatus[UserStatus["Blocked"] = 2] = "Blocked";
})(UserStatus || (UserStatus = {}));
var UserRole = /** @class */ (function () {
    function UserRole() {
    }
    return UserRole;
}());
exports.UserRole = UserRole;
var Role = /** @class */ (function () {
    function Role() {
    }
    return Role;
}());
exports.Role = Role;
var UserQuestion = /** @class */ (function () {
    function UserQuestion() {
    }
    return UserQuestion;
}());
exports.UserQuestion = UserQuestion;
var Genre = /** @class */ (function () {
    function Genre() {
    }
    return Genre;
}());
exports.Genre = Genre;
var Video = /** @class */ (function () {
    function Video() {
    }
    return Video;
}());
exports.Video = Video;
var WalletPoint = /** @class */ (function () {
    function WalletPoint() {
    }
    return WalletPoint;
}());
exports.WalletPoint = WalletPoint;
var PointChannel;
(function (PointChannel) {
    PointChannel[PointChannel["IsTotalAmount"] = 1] = "IsTotalAmount";
    PointChannel[PointChannel["IsQuestion"] = 2] = "IsQuestion";
    PointChannel[PointChannel["IsProduct"] = 3] = "IsProduct";
    PointChannel[PointChannel["IsVideoWatched"] = 4] = "IsVideoWatched";
    PointChannel[PointChannel["Shared"] = 5] = "Shared";
})(PointChannel = exports.PointChannel || (exports.PointChannel = {}));
var Dashboard = /** @class */ (function () {
    function Dashboard() {
        this.ReceiptModel = new Array();
    }
    return Dashboard;
}());
exports.Dashboard = Dashboard;
var Receipt = /** @class */ (function () {
    function Receipt() {
    }
    return Receipt;
}());
exports.Receipt = Receipt;
var WalletModel = /** @class */ (function () {
    function WalletModel() {
    }
    return WalletModel;
}());
exports.WalletModel = WalletModel;
var UserPointEarnedModel = /** @class */ (function () {
    function UserPointEarnedModel() {
    }
    return UserPointEarnedModel;
}());
exports.UserPointEarnedModel = UserPointEarnedModel;
//# sourceMappingURL=model.js.map