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
var UserComponent = /** @class */ (function () {
    function UserComponent(services, router, toastr, vcr, loaderService, http) {
        this.services = services;
        this.router = router;
        this.toastr = toastr;
        this.vcr = vcr;
        this.loaderService = loaderService;
        this.http = http;
        this.user = new model_1.User();
        this.pageIndex = 1;
        this.pageSize = 100;
        this.pageLinks = [];
        this.users = new Array();
        this.formData = new FormData();
        this.toastr.setRootViewContainerRef(vcr);
    }
    UserComponent.prototype.ngOnInit = function () {
        var self = this;
        this.LoadFirstPage();
        this.services.getUsers().subscribe(function (c) {
            self.users = c.Result;
        });
    };
    UserComponent.prototype.ngOnChanges = function (changes) {
        this.users = this.Get(0);
        if (changes['user']) {
        }
    };
    UserComponent.prototype.LoadFirstPage = function () {
        var get = this.Get(0);
        this.hasPage = this.HasNoPage();
        return get;
    };
    UserComponent.prototype.LoadLastPage = function () {
        if (this.data) {
            return this.Get((Math.ceil(this.data.SequenceLength / this.pageSize) - 1));
        }
    };
    UserComponent.prototype.HasNoPage = function () {
        var result = this.data == null || typeof this.data == 'undefined' || this.data.Page.length == 0;
        return result;
    };
    UserComponent.prototype.Get = function (pageIndex) {
        var _this = this;
        var self = this;
        this.loaderService.display(true);
        this.services.getUserPage(pageIndex, this.pageSize).subscribe(function (resp) {
            var _page = resp.Result;
            if (_page.PageSize == 0) {
                //<-- debug stuff
                self.pageLinks = [];
            }
            else {
                self.data = new sequencepage_1.SequencePage(_page.Page, _page.SequenceLength, _page.PageSize, _page.PageIndex);
                self.pageLinks = self.data.AdjacentIndexes(2);
                console.log(self.pageLinks);
                self.users = self.data.Page;
            }
            _this.loaderService.display(false);
            return self.users;
        }, function (err) {
            self.data = new sequencepage_1.SequencePage([], 0);
            self.pageLinks = self.data.AdjacentIndexes(2);
            //this.toastr.error('Operation failed e.g UnAuthorized or Network Issue');
            _this.loaderService.display(false);
            return self.users;
        });
        return self.users;
    };
    UserComponent.prototype.onUpdate = function (id) {
        var self = this;
        this.services.getUser(id).subscribe(function (c) {
            self.user = c.Result;
            console.log(c.Result);
        });
        //this.product = this.products.filter(c => c.ProductId == id).pop();//.filter(n => this.name = n.Name);
        console.log(self.user);
        this.router.navigate(['/create-user']);
    };
    UserComponent.prototype.onDelete = function (id) {
        var _this = this;
        var op = confirm('Are you sure?');
        if (op) {
            this.services.deleteUser(id).subscribe(function (c) {
                _this.users = _this.Get(0);
                _this.toastr.success("Operation Successful");
                _this.router.navigate(['/create-user']);
            });
        }
    };
    UserComponent.prototype.onFileChanged = function (files) {
        if (!files) {
            this.toastr.error("Error, please check the file inputs ");
            return;
        }
        // const formData = new FormData();
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            this.formData.append(file.name, file);
            this.fileName = file.name;
        }
        //this.files = event.target.files;
    };
    UserComponent.prototype.onFileUpload = function () {
        var formData = new FormData();
        //for (const file of this.files) {
        //  formData.append(name, file, file.name);
        //}
        //this.http.post('url', formData).subscribe(x => ....);
    };
    UserComponent.prototype.Ok = function () {
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
                self.users = self.Get(0);
                self.user = null;
                self.toastr.success('Operation successful');
            }
            else {
                self.toastr.error('Operation failed');
            }
            self.loaderService.display(false);
            self.formData = new FormData();
        }, function (error) {
            self.toastr.error('Operation failed,please check the inputs');
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", sequencepage_1.SequencePage)
    ], UserComponent.prototype, "data", void 0);
    UserComponent = __decorate([
        core_1.Component({
            selector: "users",
            templateUrl: "./user.component.html",
        }),
        __metadata("design:paramtypes", [account_service_1.AccountService, router_1.Router,
            ng2_toastr_1.ToastsManager, core_1.ViewContainerRef, loader_service_1.LoaderService, http_1.HttpClient])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;
//# sourceMappingURL=user.component.js.map