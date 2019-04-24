"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Constants_1 = require("../shared/Constants");
var angular_2_local_storage_1 = require("angular-2-local-storage");
var StorageService = /** @class */ (function () {
    //Gets currently logged in User
    function StorageService(localStorageService) {
        this.localStorageService = localStorageService;
    }
    Object.defineProperty(StorageService.prototype, "User", {
        get: function () {
            if (!this.user) {
                this.user = this.Get(Constants_1.Constants.UserKey);
                // this.user = this.localStorageService.get<User>(Constants.UserKey);
            }
            return this.user;
        },
        set: function (user) {
            this.user = user;
            this.Store(Constants_1.Constants.UserKey, user);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageService.prototype, "Token", {
        get: function () {
            if (!this.token) {
                this.token = this.Get(Constants_1.Constants.OAuthTokenKey);
                //this.token = this.localStorageService.get<Token>(Constants.OAuthTokenKey);
            }
            return this.token;
        },
        set: function (token) {
            this.token = token;
            this.Store(Constants_1.Constants.OAuthTokenKey, token);
        },
        enumerable: true,
        configurable: true
    });
    //Local Storage Methods
    StorageService.prototype.Store = function (key, value) {
        return window.localStorage.setItem(key, JSON.stringify(value));
        //return this.localStorageService.set(key, JSON.stringify(value));
    };
    StorageService.prototype.Remove = function (key) {
        window.localStorage.removeItem(key);
        //this.localStorageService.remove(key);
    };
    StorageService.prototype.Get = function (key) {
        return JSON.parse(window.localStorage.getItem(key));
        //return <T>JSON.parse(this.localStorageService.get(key));
    };
    StorageService.prototype.Clear = function () {
        window.localStorage.clear();
        // this.localStorageService.clearAll();
    };
    StorageService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [angular_2_local_storage_1.LocalStorageService])
    ], StorageService);
    return StorageService;
}());
exports.StorageService = StorageService;
//# sourceMappingURL=storage.service.js.map