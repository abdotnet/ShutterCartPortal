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
var category_service_1 = require("../services/category.service");
var sequencepage_1 = require("../shared/sequencepage");
var http_1 = require("@angular/common/http");
var advert_service_1 = require("../services/advert.service");
var AdvertComponent = /** @class */ (function () {
    function AdvertComponent(services, categoryService, router, toastr, vcr, loaderService, http) {
        this.services = services;
        this.categoryService = categoryService;
        this.router = router;
        this.toastr = toastr;
        this.vcr = vcr;
        this.loaderService = loaderService;
        this.http = http;
        this.serviceBase = location.protocol + "//" + location.host + "/";
        this.product = new model_1.Product();
        this.pageIndex = 1;
        this.pageSize = 100;
        this.pageLinks = [];
        this.categories = new Array();
        this.adverts = new Array();
        this.advert = new model_1.Advert();
        this.formData = new FormData();
        this.toastr.setRootViewContainerRef(vcr);
    }
    AdvertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.LoadFirstPage();
        this.categoryService.getCategory().subscribe(function (c) {
            if (c.Succeeded) {
                _this.categories = c.Result;
            }
        });
        // throw new Error("Method not implemented.");
    };
    AdvertComponent.prototype.ngOnChanges = function (changes) {
        if (changes['adverts']) {
            this.adverts = this.Get(0);
        }
    };
    AdvertComponent.prototype.LoadFirstPage = function () {
        var get = this.Get(0);
        this.hasPage = this.HasNoPage();
        return get;
    };
    AdvertComponent.prototype.LoadLastPage = function () {
        if (this.data) {
            return this.Get((Math.ceil(this.data.SequenceLength / this.pageSize) - 1));
        }
    };
    AdvertComponent.prototype.HasNoPage = function () {
        var result = this.data == null || typeof this.data == 'undefined' || this.data.Page.length == 0;
        return result;
    };
    AdvertComponent.prototype.Get = function (pageIndex) {
        var _this = this;
        var self = this;
        this.loaderService.display(true);
        this.services.GetAdverts(pageIndex, this.pageSize).subscribe(function (resp) {
            var _page = resp.Result;
            if (_page.PageSize == 0) {
                //<-- debug stuff
                self.pageLinks = [];
            }
            else {
                self.data = new sequencepage_1.SequencePage(_page.Page, _page.SequenceLength, _page.PageSize, _page.PageIndex);
                self.pageLinks = self.data.AdjacentIndexes(2);
                console.log(self.pageLinks);
                self.adverts = self.data.Page;
            }
            _this.loaderService.display(false);
            return self.adverts;
        }, function (err) {
            self.data = new sequencepage_1.SequencePage([], 0);
            self.pageLinks = self.data.AdjacentIndexes(2);
            //this.toastr.error('Operation failed e.g UnAuthorized or Network Issue');
            _this.loaderService.display(false);
            return self.adverts;
        });
        return self.adverts;
    };
    AdvertComponent.prototype.onUpdate = function (id) {
        this.advert = this.adverts.filter(function (c) { return c.AdvertId == id; }).pop(); //.filter(n => this.name = n.Name);
        this.router.navigate(['/advert']);
    };
    AdvertComponent.prototype.onDelete = function (id) {
        var _this = this;
        this.services.DeleteAdvert(id).subscribe(function (c) {
            _this.adverts = _this.Get(0);
            _this.toastr.success("Operation Successful");
            _this.router.navigate(['/advert']);
        });
    };
    AdvertComponent.prototype.onFileChanged = function (files) {
        if (!files) {
            this.toastr.error("Error, please check Image to upload ");
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
    AdvertComponent.prototype.onFileUpload = function () {
        var formData = new FormData();
        //for (const file of this.files) {
        //  formData.append(name, file, file.name);
        //}
        //this.http.post('url', formData).subscribe(x => ....);
    };
    AdvertComponent.prototype.Ok = function () {
        var _this = this;
        var self = this;
        if (!this.advert.Description) {
            this.toastr.error("Error, please check  Description ");
            return;
        }
        if (!this.advert.Name) {
            this.toastr.error("Error, please check advert  Name ");
            return;
        }
        this.loaderService.display(true);
        var self = this;
        self.services.AddOrUpdateAdvert(this.advert).subscribe(function (c) {
            if (c.Succeeded) {
                if (c.Succeeded) {
                    _this.advertId = c.Result.AdvertId;
                    var req = new http_1.HttpRequest('POST', "api/advert/file/" + self.advertId, self.formData, {
                        reportProgress: true,
                    });
                    self.toastr.success('Operation is successful');
                    self.http.request(req).subscribe(function (event) {
                        self.adverts = self.Get(0);
                        self.formData = new FormData();
                        if (event.type === http_1.HttpEventType.UploadProgress) {
                            self.uploadProgress = Math.round(100 * event.loaded / event.total);
                            // self.product.ProductId = 0;
                            self.loaderService.display(false);
                        }
                        else if (event instanceof http_1.HttpResponse) {
                            console.log('Files uploaded!');
                            // self.toastr.success('Operation is successful');
                        }
                        // $('#catfileupload')
                        self.loaderService.display(false);
                    });
                }
                else {
                    self.toastr.error('Operation failed');
                    self.fileName = null;
                    self.formData = null;
                }
                self.loaderService.display(false);
                self.fileName = null;
                self.formData = null;
                self.formData = new FormData();
                self.advert.Description = '';
                self.advert.ImageUrl = '';
                self.advert.Name = '';
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
    ], AdvertComponent.prototype, "data", void 0);
    AdvertComponent = __decorate([
        core_1.Component({
            selector: "advert",
            templateUrl: "./advert.component.html",
        }),
        __metadata("design:paramtypes", [advert_service_1.AdvertService, category_service_1.CategoryService, router_1.Router,
            ng2_toastr_1.ToastsManager, core_1.ViewContainerRef, loader_service_1.LoaderService, http_1.HttpClient])
    ], AdvertComponent);
    return AdvertComponent;
}());
exports.AdvertComponent = AdvertComponent;
//# sourceMappingURL=advert.component.js.map