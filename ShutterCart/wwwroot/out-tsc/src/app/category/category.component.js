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
var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(categoryService, router, toastr, vcr, loaderService, http) {
        this.categoryService = categoryService;
        this.router = router;
        this.toastr = toastr;
        this.vcr = vcr;
        this.loaderService = loaderService;
        this.http = http;
        this.category = new model_1.Category();
        this.pageIndex = 1;
        this.pageSize = 100;
        this.pageLinks = [];
        this.categories = new Array();
        this.formData = new FormData();
        this.toastr.setRootViewContainerRef(vcr);
    }
    CategoryComponent.prototype.ngOnInit = function () {
        this.LoadFirstPage();
        // throw new Error("Method not implemented.");
    };
    CategoryComponent.prototype.ngOnChanges = function (changes) {
        // only run when property "data" changed
        if (changes['categories']) {
            this.categories = this.Get(0);
        }
    };
    CategoryComponent.prototype.onFileChanged = function (files) {
        this.formData = new FormData();
        if (!files) {
            this.toastr.error("Error, please check the file inputs ");
            return;
        }
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            this.formData.append(file.name, file);
            this.fileName = file.name;
        }
    };
    CategoryComponent.prototype.LoadFirstPage = function () {
        var get = this.Get(0);
        this.hasPage = this.HasNoPage();
        return get;
    };
    CategoryComponent.prototype.LoadLastPage = function () {
        if (this.data) {
            return this.Get((Math.ceil(this.data.SequenceLength / this.pageSize) - 1));
        }
    };
    CategoryComponent.prototype.HasNoPage = function () {
        var result = this.data == null || typeof this.data == 'undefined' || this.data.Page.length == 0;
        return result;
    };
    CategoryComponent.prototype.Get = function (pageIndex) {
        var _this = this;
        var self = this;
        this.loaderService.display(true);
        this.categoryService.GetCategories(pageIndex, this.pageSize).subscribe(function (resp) {
            var _page = resp.Result;
            if (_page.PageSize == 0) {
                //<-- debug stuff
                self.pageLinks = [];
            }
            else {
                self.data = new sequencepage_1.SequencePage(_page.Page, _page.SequenceLength, _page.PageSize, _page.PageIndex);
                self.pageLinks = self.data.AdjacentIndexes(2);
                self.categories = self.data.Page;
                return self.categories;
            }
            _this.loaderService.display(false);
        }, function (err) {
            self.data = new sequencepage_1.SequencePage([], 0);
            self.pageLinks = self.data.AdjacentIndexes(2);
            _this.toastr.error('Operation failed e.g UnAuthorized or Network Issue');
            _this.loaderService.display(false);
        });
        return self.categories;
    };
    CategoryComponent.prototype.Ok = function () {
        var _this = this;
        var self = this;
        if (!this.category.Name) {
            this.toastr.error('Operation failed,category name cannot be empty');
            return;
        }
        if (!this.category) {
            this.toastr.error('Operation failed,please check the category name');
            return;
        }
        this.loaderService.display(true);
        var self = this;
        this.categoryService.AddOrUpdateCategory(this.category).subscribe(function (c) {
            if (c.Succeeded) {
                self.category.Name = null;
                var req = new http_1.HttpRequest('POST', "api/category/file/" + c.Result.CategoryId, self.formData, {
                    reportProgress: true,
                });
                //self.toastr.success('Operation is successful');
                self.http.request(req).subscribe(function (event) {
                    self.formData = new FormData();
                    // self.toastr.success('Operation is successful');
                    if (event.type === http_1.HttpEventType.UploadProgress) {
                        self.uploadProgress = Math.round(100 * event.loaded / event.total);
                        // self.product.ProductId = 0;
                        self.loaderService.display(false);
                        self.Get(0);
                    }
                    else if (event instanceof http_1.HttpResponse) {
                        console.log('Files uploaded!');
                        self.Get(0);
                        // self.toastr.success('Operation is successful');
                    }
                    self.loaderService.display(false);
                });
            }
            else {
                self.toastr.error('Operation failed');
            }
            // $('#catfileupload')
            _this.loaderService.display(false);
        });
    };
    CategoryComponent.prototype.onUpdate = function (id) {
        this.category = this.categories.filter(function (c) { return c.CategoryId == id; }).pop(); //.filter(n => this.name = n.Name);
        this.router.navigate(['/category']);
    };
    CategoryComponent.prototype.onDelete = function (id) {
        var _this = this;
        var op = confirm('Are you sure?');
        if (op) {
            this.categoryService.DeleteCategory(id).subscribe(function (c) {
                _this.categories = _this.Get(0);
                _this.toastr.success("Operation Successful");
                _this.router.navigate(['/category']);
            });
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", sequencepage_1.SequencePage)
    ], CategoryComponent.prototype, "data", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], CategoryComponent.prototype, "categories", void 0);
    CategoryComponent = __decorate([
        core_1.Component({
            selector: "category",
            templateUrl: "./category.component.html"
            //changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [category_service_1.CategoryService, router_1.Router, ng2_toastr_1.ToastsManager, core_1.ViewContainerRef, loader_service_1.LoaderService, http_1.HttpClient])
    ], CategoryComponent);
    return CategoryComponent;
}());
exports.CategoryComponent = CategoryComponent;
//# sourceMappingURL=category.component.js.map