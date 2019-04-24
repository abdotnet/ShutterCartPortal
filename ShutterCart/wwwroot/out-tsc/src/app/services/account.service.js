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
require("rxjs/add/operator/map");
var model_1 = require("../shared/model");
var storage_service_1 = require("./storage.service");
var router_1 = require("@angular/router");
var data_service_1 = require("./data.service");
var AccountService = /** @class */ (function () {
    function AccountService(data, storage, router) {
        this.data = data;
        this.storage = storage;
        this.router = router;
        this.users = [];
        this.token = new model_1.Token();
    }
    // Get token
    AccountService.prototype.getUserToken = function (user) {
        var url = '/api/account/token';
        var result = this.data.PostWithOutToken(url, user);
        console.log(result);
        return result;
    };
    // user login
    AccountService.prototype.userLogin = function (model) {
        var url = "/api/account/user";
        var r = this.data.Post(url, model);
        return r;
    };
    // User account details
    // get user list..
    AccountService.prototype.getUserPage = function (pageIndex, pageSize) {
        var url = "/api/account/" + pageIndex + "/user/" + pageSize;
        var result = this.data.Get(url);
        return result;
    };
    //public getUserPage(): Observable<Operation<User[]>> {
    //  return this.data.Get<User[]>("/api/account/users");
    //}
    AccountService.prototype.getUsers = function () {
        return this.data.Get("/api/account/users");
    };
    // get user by user id
    AccountService.prototype.getUser = function (userId) {
        var url = "/api/account/user/" + userId;
        var r = this.data.Get(url);
        return r;
    };
    // delete funtnx
    AccountService.prototype.deleteUser = function (id) {
        var url = '/api/account/' + id;
        return this.data.Delete(url);
    };
    // register user 
    AccountService.prototype.registerUser = function (model) {
        var url = '/api/account/register';
        return this.data.Post(url, model);
    };
    // update profile
    AccountService.prototype.updateProfile = function (model) {
        var url = "/api/account/update-profile";
        return this.data.Put(url, model);
    };
    // change password ..
    AccountService.prototype.changepassword = function (model) {
        var url = "/api/account/change-password";
        return this.data.Put(url, model);
    };
    AccountService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [data_service_1.DataService, storage_service_1.StorageService, router_1.Router])
    ], AccountService);
    return AccountService;
}());
exports.AccountService = AccountService;
//# sourceMappingURL=account.service.js.map