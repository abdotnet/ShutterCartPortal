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
var router_1 = require("@angular/router");
var account_service_1 = require("../services/account.service");
var model_1 = require("../shared/model");
var storage_service_1 = require("../services/storage.service");
var Constants_1 = require("../shared/Constants");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var loader_service_1 = require("../services/loader.service");
var angular_2_local_storage_1 = require("angular-2-local-storage");
var Login = /** @class */ (function () {
    function Login(router, account, storage, toastr, vcr, loaderService, localStorageService) {
        this.router = router;
        this.account = account;
        this.storage = storage;
        this.toastr = toastr;
        this.vcr = vcr;
        this.loaderService = loaderService;
        this.localStorageService = localStorageService;
        this.errorMessage = "";
        this.users = new Array();
        this.headers = new Array();
        this.login = new model_1.UserLogin();
        this.token = new model_1.Token();
        this.toastr.setRootViewContainerRef(vcr);
    }
    Login.prototype.ngOnInit = function () {
        try {
            var token = this.storage.Token;
            if (token.loginRequired) {
                this.router.navigate(['']);
            }
            else {
                this.storage.Clear();
                this.router.navigate(['/login']);
            }
        }
        catch (_a) {
            this.storage.Clear();
            this.router.navigate(['/login']);
        }
    };
    Login.prototype.onLogin = function (login) {
        var _this = this;
        //http call starts
        this.loaderService.display(true);
        var self = this;
        this.account.getUserToken(login).subscribe(function (resp) {
            if (resp.Succeeded) {
                self.token.token = resp.Result.token;
                self.token.expiration = resp.Result.expiration;
                self.token.user = resp.Result.user;
                // log into local storage
                self.storage.Token = self.token;
                self.storage.User = resp.Result.user;
                _this.toastr.success('Successfully sign in', 'Success!');
                self.loaderService.display(false);
                _this.router.navigate(['']);
            }
            else {
                _this.loaderService.display(false);
                _this.router.navigate(['']);
            }
        }, function (error) {
            _this.storage.Clear();
            _this.toastr.error('Failed to login', 'Success!');
            _this.loaderService.display(false);
            _this.router.navigate(['']);
        });
    };
    Login.prototype.KeyPress = function ($event) {
        //If Enter was Pressed
        if ($event.keyCode == 13) {
            //this.SignUp();
        }
    };
    Login.prototype.Redirect = function (role) {
        if (role == "Administration") {
            this.toastr.info(role);
            this.router.navigate(['/']);
        }
        else if (role == Constants_1.Constants.Roles.User) {
            this.router.navigate(['/login']);
        }
    };
    Login = __decorate([
        core_1.Component({
            selector: "login",
            templateUrl: "./login.component.html",
            styleUrls: []
        }),
        __metadata("design:paramtypes", [router_1.Router, account_service_1.AccountService, storage_service_1.StorageService,
            ng2_toastr_1.ToastsManager, core_1.ViewContainerRef, loader_service_1.LoaderService,
            angular_2_local_storage_1.LocalStorageService])
    ], Login);
    return Login;
}());
exports.Login = Login;
//# sourceMappingURL=login.component.js.map