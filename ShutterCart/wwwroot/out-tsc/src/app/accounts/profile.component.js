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
var model_1 = require("../shared/model");
var ng2_toastr_1 = require("ng2-toastr");
var loader_service_1 = require("../services/loader.service");
var sequencepage_1 = require("../shared/sequencepage");
var http_1 = require("@angular/common/http");
var account_service_1 = require("../services/account.service");
var storage_service_1 = require("../services/storage.service");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(services, router, toastr, vcr, loaderService, storage, http) {
        this.services = services;
        this.router = router;
        this.toastr = toastr;
        this.vcr = vcr;
        this.loaderService = loaderService;
        this.storage = storage;
        this.http = http;
        this.user = new model_1.User();
        this.pageIndex = 1;
        this.pageSize = 100;
        this.pageLinks = [];
        this.users = new Array();
        this.formData = new FormData();
        this.toastr.setRootViewContainerRef(vcr);
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var self = this;
        this.services.getUser(this.storage.User.UserId).subscribe(function (c) {
            self.user = c.Result;
        });
    };
    ProfileComponent.prototype.ngOnChanges = function (changes) {
        if (changes['user']) {
        }
    };
    ProfileComponent.prototype.onUpdate = function (id) {
        var self = this;
        this.services.getUser(id).subscribe(function (c) {
            self.user = c.Result;
            console.log(c.Result);
        });
        //this.product = this.products.filter(c => c.ProductId == id).pop();//.filter(n => this.name = n.Name);
        console.log(self.user);
        this.router.navigate(['/profile']);
    };
    ProfileComponent.prototype.Ok = function () {
        var _this = this;
        var self = this;
        if (!this.user.FirstName) {
            this.toastr.error("Error, FirstName cannot be empty ");
            return;
        }
        if (!this.user.LastName) {
            this.toastr.error("Error, LastName cannot be empty ");
            return;
        }
        if (!this.user.Mobile) {
            this.toastr.error("Error, Mobile cannot be empty ");
            return;
        }
        if (!this.user.EmailAddress) {
            this.toastr.error("Error, please select EmailAddress ");
            return;
        }
        if (this.user.Password != this.user.ConfirmPassword) {
            this.toastr.error("Error, please password must be equals confirm password");
            return;
        }
        this.loaderService.display(true);
        var self = this;
        self.services.registerUser(this.user).subscribe(function (c) {
            if (c.Succeeded) {
                _this.user.Password = null;
                _this.user.ConfirmPassword = null;
                self.toastr.success('Operation successful');
            }
            else {
                self.toastr.error('Operation failed');
            }
            self.loaderService.display(false);
        }, function (error) {
            self.toastr.error('Operation failed,please check the inputs');
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", sequencepage_1.SequencePage)
    ], ProfileComponent.prototype, "data", void 0);
    ProfileComponent = __decorate([
        core_1.Component({
            selector: "profile",
            templateUrl: "./profile.component.html",
        }),
        __metadata("design:paramtypes", [account_service_1.AccountService, router_1.Router,
            ng2_toastr_1.ToastsManager, core_1.ViewContainerRef, loader_service_1.LoaderService, storage_service_1.StorageService, http_1.HttpClient])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map