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
var report_services_1 = require("../services/report.services");
var GetUserComponent = /** @class */ (function () {
    function GetUserComponent(services, router, toastr, vcr, loaderService, http) {
        this.services = services;
        this.router = router;
        this.toastr = toastr;
        this.vcr = vcr;
        this.loaderService = loaderService;
        this.http = http;
        this.pageIndex = 1;
        this.pageSize = 100;
        this.pageLinks = [];
        this.reports = new Array();
        this.formData = new FormData();
        this.walletPoint = new model_1.WalletPoint();
        this.toastr.setRootViewContainerRef(vcr);
    }
    GetUserComponent.prototype.ngOnInit = function () {
        this.LoadFirstPage();
    };
    GetUserComponent.prototype.ngOnChanges = function (changes) {
        if (changes['getusers']) {
            // this.products = this.Get(0);
        }
    };
    GetUserComponent.prototype.LoadFirstPage = function () {
        var get = this.Get(0);
        this.hasPage = this.HasNoPage();
        return get;
    };
    GetUserComponent.prototype.LoadLastPage = function () {
        if (this.data) {
            return this.Get((Math.ceil(this.data.SequenceLength / this.pageSize) - 1));
        }
    };
    GetUserComponent.prototype.HasNoPage = function () {
        var result = this.data == null || typeof this.data == 'undefined' || this.data.Page.length == 0;
        return result;
    };
    GetUserComponent.prototype.Get = function (pageIndex) {
        var _this = this;
        var self = this;
        this.loaderService.display(true);
        this.services.GetUsers(pageIndex, this.pageSize).subscribe(function (resp) {
            var _page = resp.Result;
            if (_page.PageSize == 0) {
                //<-- debug stuff
                self.pageLinks = [];
            }
            else {
                self.data = new sequencepage_1.SequencePage(_page.Page, _page.SequenceLength, _page.PageSize, _page.PageIndex);
                self.pageLinks = self.data.AdjacentIndexes(2);
                console.log(self.pageLinks);
                self.reports = self.data.Page;
            }
            _this.loaderService.display(false);
            return self.reports;
        }, function (err) {
            self.data = new sequencepage_1.SequencePage([], 0);
            self.pageLinks = self.data.AdjacentIndexes(2);
            //this.toastr.error('Operation failed e.g UnAuthorized or Network Issue');
            _this.loaderService.display(false);
            return self.walletPoint;
        });
        return self.reports;
    };
    GetUserComponent.prototype.onDownload = function (id) {
        this.toastr.success("Operation successful");
    };
    GetUserComponent.prototype.GetEnum = function (id) {
        var enumValue = '';
        switch (id) {
            case 0:
                enumValue = 'Total Amount';
                break;
            case 1:
                enumValue = 'Question';
                break;
            case 2:
                enumValue = 'Product';
                break;
            case 3:
                enumValue = 'Watched Video';
                break;
            case 4:
                enumValue = 'Shared';
                break;
            default:
                enumValue = 'Others';
                break;
        }
        return enumValue;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", sequencepage_1.SequencePage)
    ], GetUserComponent.prototype, "data", void 0);
    GetUserComponent = __decorate([
        core_1.Component({
            selector: "get-users",
            templateUrl: "./getusers.component.html",
        }),
        __metadata("design:paramtypes", [report_services_1.ReportService, router_1.Router,
            ng2_toastr_1.ToastsManager, core_1.ViewContainerRef, loader_service_1.LoaderService, http_1.HttpClient])
    ], GetUserComponent);
    return GetUserComponent;
}());
exports.GetUserComponent = GetUserComponent;
//# sourceMappingURL=getusers.component.js.map