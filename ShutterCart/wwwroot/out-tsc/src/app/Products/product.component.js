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
var product_services_1 = require("../services/product.services");
var http_1 = require("@angular/common/http");
var ProductComponent = /** @class */ (function () {
    function ProductComponent(services, categoryService, router, toastr, vcr, loaderService, http) {
        this.services = services;
        this.categoryService = categoryService;
        this.router = router;
        this.toastr = toastr;
        this.vcr = vcr;
        this.loaderService = loaderService;
        this.http = http;
        this.product = new model_1.Product();
        this.pageIndex = 1;
        this.pageSize = 100;
        this.pageLinks = [];
        this.categories = new Array();
        this.products = new Array();
        this.formData = new FormData();
        this.productId = 0;
        this.toastr.setRootViewContainerRef(vcr);
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.LoadFirstPage();
        this.categoryService.getCategory().subscribe(function (c) {
            if (c.Succeeded) {
                _this.categories = c.Result;
            }
        });
        // throw new Error("Method not implemented.");
    };
    ProductComponent.prototype.ngOnChanges = function (changes) {
        if (changes['products']) {
            this.products = this.Get(0);
        }
    };
    ProductComponent.prototype.LoadFirstPage = function () {
        var get = this.Get(0);
        this.hasPage = this.HasNoPage();
        return get;
    };
    ProductComponent.prototype.LoadLastPage = function () {
        if (this.data) {
            return this.Get((Math.ceil(this.data.SequenceLength / this.pageSize) - 1));
        }
    };
    ProductComponent.prototype.HasNoPage = function () {
        var result = this.data == null || typeof this.data == 'undefined' || this.data.Page.length == 0;
        return result;
    };
    ProductComponent.prototype.Get = function (pageIndex) {
        var _this = this;
        var self = this;
        this.loaderService.display(true);
        this.services.GetProducts(pageIndex, this.pageSize).subscribe(function (resp) {
            var _page = resp.Result;
            if (_page.PageSize == 0) {
                //<-- debug stuff
                self.pageLinks = [];
            }
            else {
                self.data = new sequencepage_1.SequencePage(_page.Page, _page.SequenceLength, _page.PageSize, _page.PageIndex);
                self.pageLinks = self.data.AdjacentIndexes(2);
                console.log(self.pageLinks);
                self.products = self.data.Page;
            }
            _this.loaderService.display(false);
            return self.products;
        }, function (err) {
            self.data = new sequencepage_1.SequencePage([], 0);
            self.pageLinks = self.data.AdjacentIndexes(2);
            //this.toastr.error('Operation failed e.g UnAuthorized or Network Issue');
            _this.loaderService.display(false);
            return self.products;
        });
        return self.products;
    };
    ProductComponent.prototype.onUpdate = function (id) {
        var self = this;
        this.services.getProductById(id).subscribe(function (c) {
            self.product = c.Result;
            self.productName = c.Result.ProductName;
            self.Price = c.Result.Price;
            self.categoryId = c.Result.CategoryId;
            self.productId = c.Result.ProductId;
            self.categoryId = c.Result.CategoryId;
            console.log(c.Result);
        });
        //this.product = this.products.filter(c => c.ProductId == id).pop();//.filter(n => this.name = n.Name);
        console.log(self.product);
        this.router.navigate(['/product']);
    };
    ProductComponent.prototype.onDelete = function (id) {
        var _this = this;
        var op = confirm('Are you sure?');
        if (op) {
            this.services.DeleteProduct(id).subscribe(function (c) {
                _this.products = _this.Get(0);
                _this.toastr.success("Operation Successful");
                _this.router.navigate(['/product']);
            });
        }
    };
    ProductComponent.prototype.onFileChanged = function (files) {
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
    ProductComponent.prototype.Ok = function () {
        var self = this;
        if (!this.productName || !this.Price || !this.categoryId) {
            console.log(this.productName);
            console.log(this.Price);
            console.log(this.categoryId);
            this.toastr.error("Error, please check your inputs ");
            return;
        }
        this.loaderService.display(true);
        var self = this;
        this.product.CategoryId = this.categoryId;
        this.product.ProductName = this.productName;
        this.product.Price = this.Price;
        this.product.ProductId = this.productId;
        self.services.AddOrUpdateProduct(self.product).subscribe(function (c) {
            if (c.Succeeded) {
                self.product.ProductName = null;
                self.product.Price = null;
                self.product.CategoryId = null;
                var req = new http_1.HttpRequest('POST', "api/product/file/" + c.Result.ProductId, self.formData, {
                    reportProgress: true,
                });
                self.toastr.success('Operation is successful');
                self.http.request(req).subscribe(function (event) {
                    self.Get(0);
                    //sself.formData = null;
                    self.formData = new FormData();
                    self.productId = 0;
                    self.categoryId = 0;
                    if (event.type === http_1.HttpEventType.UploadProgress) {
                        self.uploadProgress = Math.round(100 * event.loaded / event.total);
                        // self.product.ProductId = 0;
                        self.loaderService.display(false);
                    }
                    else if (event instanceof http_1.HttpResponse) {
                        console.log('Files uploaded!');
                        // self.toastr.success('Operation is successful');
                    }
                    self.loaderService.display(false);
                });
            }
            else {
                self.toastr.error('Operation failed');
            }
            self.loaderService.display(false);
            self.productName = null;
            self.Price = null;
            self.fileName = null;
            self.productId = 0;
            self.formData = null;
            self.product.ProductId = null;
        }, function (error) {
            self.toastr.error('Operation failed,please check the inputs');
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", sequencepage_1.SequencePage)
    ], ProductComponent.prototype, "data", void 0);
    ProductComponent = __decorate([
        core_1.Component({
            selector: "manage-product",
            templateUrl: "./product.component.html",
        }),
        __metadata("design:paramtypes", [product_services_1.ProductService, category_service_1.CategoryService, router_1.Router,
            ng2_toastr_1.ToastsManager, core_1.ViewContainerRef, loader_service_1.LoaderService, http_1.HttpClient])
    ], ProductComponent);
    return ProductComponent;
}());
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=product.component.js.map