webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Products/product.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n<div class=\"container-fluid body-content center-block \">\r\n\r\n  <customheader></customheader>\r\n\r\n  <div class=\"container-fluid\" style=\"padding-left:50px\">\r\n    <div class=\"page-content-wrapper\">\r\n      <div class=\"row\">\r\n        <div id=\"page-wrapper\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n              <h1 class=\"page-header\">Setup Products</h1>\r\n              <ul class=\"breadcrumb\">\r\n                <li><a [routerLink]=\"['/dashboard']\">Home</a></li>\r\n                <li> <a class=\"active\" [routerLink]=\"['/product']\">Setup Products</a></li>\r\n              </ul>\r\n            </div>\r\n            <!-- /.col-lg-12 -->\r\n          </div>\r\n          <!-- /.row -->\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-5\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"well\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-xs-12\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"widget\">\r\n                    <!-- Widget title -->\r\n                    <div class=\"widget-head\">\r\n                      <div class=\"clearfix\"></div>\r\n                    </div>\r\n                    <div class=\"widget-content referrer\" style=\"display: block;\">\r\n\r\n                      <form class=\"form-horizontal\" enctype=\"multipart/form-data\">\r\n                        <fieldset>\r\n                          <legend>Add Product</legend>\r\n\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-2 control-label\">  Category <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-10\">\r\n                              <select id=\"category\" name=\"category\" [(ngModel)]=\"categoryId\" class=\"form-control\">\r\n                                <option>--select --</option>\r\n                                <option *ngFor=\"let item of categories\" value=\"{{item.CategoryId}}\">{{item.Name}}</option>\r\n                              </select>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-2 control-label\">   Name <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-10\">\r\n                              <input type=\"text\" class=\"form-control\" id=\"ProductName\" name=\"ProductName\" [(ngModel)]=\"productName\" placeholder=\"Enter product name\" required>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-2 control-label\">  Price <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-10\">\r\n                              <input type=\"text\" class=\"form-control\" id=\"Price\" name=\"Price\" [(ngModel)]=\"Price\" placeholder=\"Enter product price\" required>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-2 control-label\">  Image  <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-10\">\r\n                              <input #file type=\"file\" multiple (change)=\"onFileChanged(file.files)\" class=\"form-control\" />\r\n                              <span *ngIf=\"uploadProgress > 0 && uploadProgress < 100\">\r\n                                {{uploadProgress}}%\r\n                              </span>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <div class=\"col-lg-9 col-lg-offset-2\">\r\n                              <button type=\"submit\" class=\"btn btn-primary\" (click)=\"Ok()\"><i class=\"fa fa-save\"> </i> Save </button>\r\n                            </div>\r\n                          </div>\r\n                        </fieldset>\r\n                      </form>\r\n\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-7\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"well\">\r\n                  <fieldset>\r\n                    <legend>  Product List</legend>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-xs-6\">\r\n                        <h1 class=\"page-title\"></h1>\r\n                      </div>\r\n                      <div class=\"col-xs-6\">\r\n                        <div class=\"page-actions\">\r\n                          <!--<a class=\"btn btn-primary pull-right\"><i class=\"fa fa-plus\"></i>Add Term</a>-->\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"widget\">\r\n                      <!-- Widget title -->\r\n                      <div class=\"widget-head\">\r\n                        <div class=\"pull-right col-md-4\">\r\n                          <div class=\"form-group\">\r\n                            <div class=\"input-group\">\r\n                              <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-search\"></i></div>\r\n                              <input type=\"text\" class=\"form-control\" name=\"searchString\" placeholder=\"Type to search...\" [(ngModel)]=\"searchString\">\r\n                            </div>\r\n                          </div>\r\n\r\n                        </div>\r\n                        <div class=\"clearfix\"></div>\r\n                      </div>\r\n                      <div class=\"widget-content referrer\" style=\"display: block;\">\r\n\r\n                        <!-- Widget content -->\r\n                        <table class=\"h6 table table-striped table-bordered table-hover\">\r\n                          <thead>\r\n                            <tr>\r\n                              <th>S/N</th>\r\n                              <th>Category Name</th>\r\n                              <th>product Name</th>\r\n                              <th>product Price</th>\r\n                              <th>Image </th>\r\n                              <th>Action(s)</th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <!--| searchfilter: 'name' : txtFname.value-->\r\n                            <tr *ngFor=\"let item of products | filter : 'ProductName' : searchString; let i=index \">\r\n                              <td>{{i + 1 }}</td>\r\n                              <td>{{item.Category.Name}}</td>\r\n                              <td>{{item.ProductName}}</td>\r\n                              <td>{{item.Price}}</td>\r\n                              <td><img src=\"{{item.ImageUrl}}\" alt=\"image\" width=\"80\" height=\"80\" /></td>\r\n                              <td>\r\n                                <i><a (click)=\"onUpdate(item.ProductId)\"><i class=\"fa fa-edit\" style=\"font-size:18px\"></i> </a></i>&nbsp;\r\n                                <i><a (click)=\"onDelete(item.ProductId)\"><i class=\"fa fa-trash-o\" style=\"font-size:18px;color:red\"></i> </a></i>\r\n                              </td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                        <div *ngIf=\"!hasPage\" style=\"text-align: center; font-size:18px; margin-top:20px;\">\r\n                          <span class=\"text-muted\" style=\"font-size:22px;\">No Product found</span>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                          <div class=\"col-lg-12\" style=\"text-align:right\">\r\n                            <ul class=\"pagination\">\r\n                              <li><a href=\"javascript:void(0)\" style=\"font-size:18px;background-color:aliceblue\" (click)=\"LoadFirstPage()\">&laquo;</a></li>\r\n                              <li *ngFor=\"let p of pageLinks\" style=\"font-size:18px\">\r\n                                <a href=\"javascript:void(0)\" class=\"page-link\" (click)=\"Get(p)\">\r\n                                  {{p + 1}}\r\n                                </a>\r\n                              </li>\r\n                              <li><a href=\"javascript:void(0)\" (click)=\"LoadLastPage()\" style=\"font-size:18px;background-color:aliceblue\">&raquo;</a></li>\r\n                            </ul>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </fieldset>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <!-- /.row -->\r\n          <!-- /.row -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<footer></footer>\r\n\r\n"

/***/ }),

/***/ "./src/app/Products/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_model__ = __webpack_require__("./src/app/shared/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_category_service__ = __webpack_require__("./src/app/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_sequencepage__ = __webpack_require__("./src/app/shared/sequencepage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_product_services__ = __webpack_require__("./src/app/services/product.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProductComponent = /** @class */ (function () {
    function ProductComponent(services, categoryService, router, toastr, vcr, loaderService, http) {
        this.services = services;
        this.categoryService = categoryService;
        this.router = router;
        this.toastr = toastr;
        this.vcr = vcr;
        this.loaderService = loaderService;
        this.http = http;
        this.product = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["d" /* Product */]();
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
                self.data = new __WEBPACK_IMPORTED_MODULE_6__shared_sequencepage__["a" /* SequencePage */](_page.Page, _page.SequenceLength, _page.PageSize, _page.PageIndex);
                self.pageLinks = self.data.AdjacentIndexes(2);
                console.log(self.pageLinks);
                self.products = self.data.Page;
            }
            _this.loaderService.display(false);
            return self.products;
        }, function (err) {
            self.data = new __WEBPACK_IMPORTED_MODULE_6__shared_sequencepage__["a" /* SequencePage */]([], 0);
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
                var req = new __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["e" /* HttpRequest */]('POST', "api/product/file/" + c.Result.ProductId, self.formData, {
                    reportProgress: true,
                });
                self.toastr.success('Operation is successful');
                self.http.request(req).subscribe(function (event) {
                    self.Get(0);
                    //sself.formData = null;
                    self.formData = new FormData();
                    self.productId = 0;
                    self.categoryId = 0;
                    if (event.type === __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["c" /* HttpEventType */].UploadProgress) {
                        self.uploadProgress = Math.round(100 * event.loaded / event.total);
                        // self.product.ProductId = 0;
                        self.loaderService.display(false);
                    }
                    else if (event instanceof __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["f" /* HttpResponse */]) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__shared_sequencepage__["a" /* SequencePage */])
    ], ProductComponent.prototype, "data", void 0);
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "manage-product",
            template: __webpack_require__("./src/app/Products/product.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__services_product_services__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_5__services_category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_4__services_loader_service__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HttpClient */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/accounts/login.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"left\" style=\"background-image: url('assets/css/img/Scanning-apps.jpg') \">\r\n</div>\r\n\r\n\r\n\r\n<div class=\"container-fluid body-content center-block\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"right\">\r\n    \r\n      <div class=\"row\">\r\n        <div class=\"col-md-11 col-md-offset-1\">\r\n          \r\n          <div class=\"login-panel panel panel-default\">\r\n            <div class=\"panel-heading\">\r\n\r\n              <h3 class=\"panel-title\">NovaCart - Please Sign In</h3>\r\n              <div *ngIf=\"errorMessage\" class=\"alert alert-warning\">{{errorMessage}}</div>\r\n            </div>\r\n            <div class=\"panel-body\">\r\n              <form #theForm=\"ngForm\" novalidate name=\"theForm\">\r\n                <fieldset>\r\n                  <div class=\"form-group\">\r\n                    <input type=\"text\" class=\"form-control\" name=\"username\" id=\"username\" [(ngModel)]=\"login.Username\" #username=\"ngModel\" placeholder=\"Email\" autofocus autocomplete=\"off\" required>\r\n                    <div class=\"text-danger\" *ngIf=\"username.touched && username.invalid && username.errors.required\">Username is required</div>\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\" [(ngModel)]=\"login.Password\" placeholder=\"Password\" autocomplete=\"off\" #password=\"ngModel\" required>\r\n                    <div class=\"text-danger\" *ngIf=\"password.touched && password.invalid && password.errors.required\">Password is required</div>\r\n                  </div>\r\n                  <div class=\"checkbox\">\r\n                    <label>\r\n                      <input name=\"remember\" type=\"checkbox\" value=\"Remember Me\">Remember Me\r\n                    </label>\r\n                  </div>\r\n                  <!-- Change this to a button or input when using this as a form -->\r\n                  <a class=\"btn btn-lg btn-success btn-block\" (click)=\"onLogin(login)\"> <i class=\"fa fa-sign-in\"></i> Login</a>\r\n                </fieldset>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/accounts/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_account_service__ = __webpack_require__("./src/app/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_model__ = __webpack_require__("./src/app/shared/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_storage_service__ = __webpack_require__("./src/app/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_Constants__ = __webpack_require__("./src/app/shared/Constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_2_local_storage__ = __webpack_require__("./node_modules/angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular_2_local_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









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
        this.login = new __WEBPACK_IMPORTED_MODULE_3__shared_model__["h" /* UserLogin */]();
        this.token = new __WEBPACK_IMPORTED_MODULE_3__shared_model__["f" /* Token */]();
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
        else if (role == __WEBPACK_IMPORTED_MODULE_5__shared_Constants__["a" /* Constants */].Roles.User) {
            this.router.navigate(['/login']);
        }
    };
    Login = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "login",
            template: __webpack_require__("./src/app/accounts/login.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_4__services_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_7__services_loader_service__["a" /* LoaderService */],
            __WEBPACK_IMPORTED_MODULE_8_angular_2_local_storage__["LocalStorageService"]])
    ], Login);
    return Login;
}());



/***/ }),

/***/ "./src/app/accounts/logout.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/accounts/logout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Logout; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_account_service__ = __webpack_require__("./src/app/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_storage_service__ = __webpack_require__("./src/app/services/storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Logout = /** @class */ (function () {
    function Logout(router, account, storage) {
        this.router = router;
        this.account = account;
        this.storage = storage;
    }
    Logout.prototype.ngOnInit = function () {
        this.storage.Clear();
        this.router.navigate(['/login']);
    };
    Logout = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "logout",
            template: __webpack_require__("./src/app/accounts/logout.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_3__services_storage_service__["a" /* StorageService */]])
    ], Logout);
    return Logout;
}());



/***/ }),

/***/ "./src/app/accounts/profile.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-fluid body-content center-block \">\r\n\r\n  <customheader></customheader>\r\n\r\n  <div class=\"container-fluid\" style=\"padding-left:50px\">\r\n    <div class=\"page-content-wrapper\">\r\n      <div class=\"row\">\r\n        <div id=\"page-wrapper\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n              <h1 class=\"page-header\"> Setup Profile</h1>\r\n              <ul class=\"breadcrumb\">\r\n                <li><a [routerLink]=\"['/dashboard']\">Home</a></li>\r\n                <li> <a class=\"active\" [routerLink]=\"['/profile']\">profile</a></li>\r\n              </ul>\r\n            </div>\r\n            <!-- /.col-lg-12 -->\r\n          </div>\r\n          <!-- /.row -->\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-7\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"well\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-xs-12\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"widget\">\r\n                    <!-- Widget title -->\r\n                    <div class=\"widget-head\">\r\n                      <div class=\"clearfix\"></div>\r\n                    </div>\r\n                    <div class=\"widget-content referrer\" style=\"display: block;\">\r\n\r\n                      <form class=\"form-horizontal\" enctype=\"multipart/form-data\">\r\n                        <fieldset>\r\n                          <legend>Add User</legend>\r\n\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-3 control-label\"> Title <span style=\"color:red\">*</span></label>\r\n                            <div class=\"col-lg-9\">\r\n                              <select id=\"Title\" name=\"Title\" [(ngModel)]=\"user.Title\" class=\"form-control\">\r\n                                <option value=\"MR\" selected>MR</option>\r\n                                <option value=\"MRS\">MRS</option>\r\n                                <option value=\"MS\">MS</option>\r\n                              </select>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-3 control-label\">  FirstName <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-9\">\r\n                              <input type=\"text\" class=\"form-control\" id=\"FirstName\" name=\"FirstName\" [(ngModel)]=\"user.FirstName\" placeholder=\"Enter FirstName\" required>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-3 control-label\"> LastName <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-9\">\r\n                              <input type=\"text\" class=\"form-control\" id=\"LastName\" name=\"LastName\" [(ngModel)]=\"user.LastName\" placeholder=\"Enter lastname\" required>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-3 control-label\">  Mobile <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-9\">\r\n                              <input type=\"text\" class=\"form-control\" id=\"Mobile\" name=\"Mobile\" [(ngModel)]=\"user.Mobile\" placeholder=\"Enter Mobile\" required>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-3 control-label\">  D.O.B <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-9\">\r\n                              <input type=\"date\" class=\"form-control\" id=\"dob\" name=\"dob\" [(ngModel)]=\"user.DateObBirth\" placeholder=\"Enter date of birth\" required>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-3 control-label\"> Gender <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-9\">\r\n                              <select id=\"Gender\" name=\"Gender\" [(ngModel)]=\"user.Gender\" class=\"form-control\">\r\n                                <option value=\"1\" selected>MALE</option>\r\n                                <option value=\"2\">FEMALE</option>\r\n                              </select>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-3 control-label\">  Email Address <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-9\">\r\n                              <input type=\"email\" class=\"form-control\" id=\"EmailAddress\" name=\"EmailAddress\" [(ngModel)]=\"user.EmailAddress\" placeholder=\"Enter Email Address\" required>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-3 control-label\">  Password <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-9\">\r\n                              <input type=\"password\" class=\"form-control\" id=\"Password\" name=\"Password\" [(ngModel)]=\"user.Password\" placeholder=\"Enter Password\" required>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-3 control-label\">  Confirm Password <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-9\">\r\n                              <input type=\"password\" class=\"form-control\" id=\"ConfirmPassword\" name=\"ConfirmPassword\" [(ngModel)]=\"user.ConfirmPassword\" placeholder=\"Enter Confirm Password\" required>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-3 control-label\">  Address <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-9\">\r\n                              <textarea type=\"text\" class=\"form-control\" id=\"Address\" name=\"Address\" [(ngModel)]=\"user.Address\" placeholder=\"Enter Address\" required></textarea>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-3 control-label\"> Role <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-9\">\r\n                              <select id=\"Role\" name=\"Role\" [(ngModel)]=\"user.Role\" class=\"form-control\">\r\n                                <option value=\"Administration\" selected>Administration</option>\r\n                              </select>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <div class=\"col-lg-8 col-lg-offset-3\">\r\n                              <button type=\"submit\" class=\"btn btn-primary\" (click)=\"Ok()\"><i class=\"fa fa-save\"> </i> Save </button>\r\n                            </div>\r\n                          </div>\r\n                        </fieldset>\r\n                      </form>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <!-- /.row -->\r\n          <!-- /.row -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<footer></footer>\r\n\r\n"

/***/ }),

/***/ "./src/app/accounts/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_model__ = __webpack_require__("./src/app/shared/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_sequencepage__ = __webpack_require__("./src/app/shared/sequencepage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_account_service__ = __webpack_require__("./src/app/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_storage_service__ = __webpack_require__("./src/app/services/storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(services, router, toastr, vcr, loaderService, storage, http) {
        this.services = services;
        this.router = router;
        this.toastr = toastr;
        this.vcr = vcr;
        this.loaderService = loaderService;
        this.storage = storage;
        this.http = http;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["g" /* User */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__shared_sequencepage__["a" /* SequencePage */])
    ], ProfileComponent.prototype, "data", void 0);
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "profile",
            template: __webpack_require__("./src/app/accounts/profile.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__services_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_4__services_loader_service__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_8__services_storage_service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/accounts/user.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"container-fluid body-content center-block \">\r\n\r\n  <customheader></customheader>\r\n\r\n  <div class=\"container-fluid\" style=\"padding-left:50px\">\r\n    <div class=\"page-content-wrapper\">\r\n      <div class=\"row\">\r\n        <div id=\"page-wrapper\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n              <h1 class=\"page-header\"> Create User </h1>\r\n              <ul class=\"breadcrumb\">\r\n                <li><a [routerLink]=\"['/dashboard']\">Home</a></li>\r\n                <li> <a class=\"active\" [routerLink]=\"['/create-user']\"> create-user </a></li>\r\n              </ul>\r\n            </div>\r\n            <!-- /.col-lg-12 -->\r\n          </div>\r\n          <!-- /.row -->\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-5\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"well\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-xs-12\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"widget\">\r\n                    <!-- Widget title -->\r\n                    <div class=\"widget-head\">\r\n                      <div class=\"clearfix\"></div>\r\n                    </div>\r\n                    <div class=\"widget-content referrer\" style=\"display: block;\">\r\n\r\n                      <form class=\"form-horizontal\" enctype=\"multipart/form-data\">\r\n                        <fieldset>\r\n                          <legend>Add User</legend>\r\n\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-3 control-label\"> Title <span style=\"color:red\">*</span></label>\r\n                            <div class=\"col-lg-9\">\r\n                              <select id=\"Title\" name=\"Title\" [(ngModel)]=\"user.Title\" class=\"form-control\">\r\n                                <option value=\"MR\" selected>MR</option>\r\n                                <option value=\"MRS\">MRS</option>\r\n                                <option value=\"MS\">MS</option>\r\n                              </select>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-3 control-label\">  FirstName <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-9\">\r\n                              <input type=\"text\" class=\"form-control\" id=\"FirstName\" name=\"FirstName\" [(ngModel)]=\"user.FirstName\" placeholder=\"Enter FirstName\" required>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-3 control-label\"> LastName <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-9\">\r\n                              <input type=\"text\" class=\"form-control\" id=\"LastName\" name=\"LastName\" [(ngModel)]=\"user.LastName\" placeholder=\"Enter lastname\" required>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-3 control-label\">  Mobile <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-9\">\r\n                              <input type=\"text\" class=\"form-control\" id=\"Mobile\" name=\"Mobile\" [(ngModel)]=\"user.Mobile\" placeholder=\"Enter Mobile\" required>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-3 control-label\">  D.O.B <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-9\">\r\n                              <input type=\"date\" class=\"form-control\" id=\"dob\" name=\"dob\" [(ngModel)]=\"user.DateObBirth\" placeholder=\"Enter date of birth\" required>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-3 control-label\"> Gender <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-9\">\r\n                              <select id=\"Gender\" name=\"Gender\" [(ngModel)]=\"user.Gender\" class=\"form-control\">\r\n                                <option value=\"1\" selected>MALE</option>\r\n                                <option value=\"2\">FEMALE</option>\r\n                              </select>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-3 control-label\">  Email Address <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-9\">\r\n                              <input type=\"email\" class=\"form-control\" id=\"EmailAddress\" name=\"EmailAddress\" [(ngModel)]=\"user.EmailAddress\" placeholder=\"Enter Email Address\" required>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-3 control-label\">  Password <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-9\">\r\n                              <input type=\"password\" class=\"form-control\" id=\"Password\" name=\"Password\" [(ngModel)]=\"user.Password\" placeholder=\"Enter Password\" required>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-3 control-label\">  Confirm Password <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-9\">\r\n                              <input type=\"password\" class=\"form-control\" id=\"ConfirmPassword\" name=\"ConfirmPassword\" [(ngModel)]=\"user.ConfirmPassword\" placeholder=\"Enter Confirm Password\" required>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-3 control-label\">  Address <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-9\">\r\n                              <textarea type=\"text\" class=\"form-control\" id=\"Address\" name=\"Address\" [(ngModel)]=\"user.Address\" placeholder=\"Enter Address\" required></textarea>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-3 control-label\"> Role <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-9\">\r\n                              <select id=\"Role\" name=\"Role\" [(ngModel)]=\"user.Role\" class=\"form-control\">\r\n                                <option value=\"Administration\" selected>Administration</option>\r\n                              </select>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <div class=\"col-lg-8 col-lg-offset-3\">\r\n                              <button type=\"submit\" class=\"btn btn-primary\" (click)=\"Ok()\"><i class=\"fa fa-save\"> </i> Save </button>\r\n                            </div>\r\n                          </div>\r\n                        </fieldset>\r\n                      </form>\r\n\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-7\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"well\">\r\n                  <fieldset>\r\n                    <legend>  User List</legend>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-xs-6\">\r\n                        <h1 class=\"page-title\"></h1>\r\n                      </div>\r\n                      <div class=\"col-xs-6\">\r\n                        <div class=\"page-actions\">\r\n                          <!--<a class=\"btn btn-primary pull-right\"><i class=\"fa fa-plus\"></i>Add Term</a>-->\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"widget\">\r\n                      <!-- Widget title -->\r\n                      <div class=\"widget-head\">\r\n                        <div class=\"pull-right col-md-4\">\r\n                          <div class=\"form-group\">\r\n                            <div class=\"input-group\">\r\n                              <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-search\"></i></div>\r\n                              <input type=\"text\" class=\"form-control\" name=\"searchString\" placeholder=\"Type to search...\" [(ngModel)]=\"searchString\">\r\n                            </div>\r\n                          </div>\r\n\r\n                        </div>\r\n                        <div class=\"clearfix\"></div>\r\n                      </div>\r\n                      <div class=\"widget-content referrer\" style=\"display: block;overflow:scroll\">\r\n\r\n                        <!-- Widget content -->\r\n                        <table class=\"h6 table table-striped table-bordered table-hover\" style=\"overflow:scroll\">\r\n                          <thead>\r\n                            <tr>\r\n                              <th>S/N</th>\r\n                              <th>Title</th>\r\n                              <th>LastName</th>\r\n                              <th>FirstName</th>\r\n                              <th>Gender </th>\r\n                              <th>Email </th>\r\n                              <th>Mobile </th>\r\n                              <th>Entry Date </th>\r\n                              <th>Action(s)</th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <!--| searchfilter: 'name' : txtFname.value-->\r\n                            <tr *ngFor=\"let item of users | filter : 'Title' : searchString; let i=index \">\r\n                              <td>{{i + 1 }}</td>\r\n                              <td>{{item.Title}}</td>\r\n                              <td>{{item.LastName}}</td>\r\n                              <td>{{item.FirstName}}</td>\r\n                              <td>{{item.Gender==1 ? 'Male':'Female'}}</td>\r\n                              <td>{{item.EmailAddress}}</td>\r\n                              <td>{{item.Mobile}}</td>\r\n                              <td>{{item.LastLoginDate | date:'mediumDate' }}</td>\r\n                              <td>\r\n                                <i><a (click)=\"onUpdate(item.Id)\"><i class=\"fa fa-edit\" style=\"font-size:18px\"></i> </a></i>&nbsp;\r\n                                <i><a (click)=\"onDelete(item.Id)\"><i class=\"fa fa-trash-o\" style=\"font-size:18px;color:red\"></i> </a></i>\r\n                              </td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                        <div *ngIf=\"HasNoPage()\" style=\"text-align: center; font-size:18px; margin-top:20px;\">\r\n                          <span class=\"text-muted\" style=\"font-size:22px;\">No user found</span>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                          <div class=\"col-lg-12\" style=\"text-align:right\">\r\n                            <ul class=\"pagination\">\r\n                              <li><a href=\"javascript:void(0)\" style=\"font-size:18px;background-color:aliceblue\" (click)=\"LoadFirstPage()\">&laquo;</a></li>\r\n                              <li *ngFor=\"let p of pageLinks\" style=\"font-size:18px\">\r\n                                <a href=\"javascript:void(0)\" class=\"page-link\" (click)=\"Get(p)\">\r\n                                  {{p + 1}}\r\n                                </a>\r\n                              </li>\r\n                              <li><a href=\"javascript:void(0)\" (click)=\"LoadLastPage()\" style=\"font-size:18px;background-color:aliceblue\">&raquo;</a></li>\r\n                            </ul>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </fieldset>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <!-- /.row -->\r\n          <!-- /.row -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<footer></footer>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/accounts/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_model__ = __webpack_require__("./src/app/shared/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_sequencepage__ = __webpack_require__("./src/app/shared/sequencepage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_account_service__ = __webpack_require__("./src/app/services/account.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserComponent = /** @class */ (function () {
    function UserComponent(services, router, toastr, vcr, loaderService, http) {
        this.services = services;
        this.router = router;
        this.toastr = toastr;
        this.vcr = vcr;
        this.loaderService = loaderService;
        this.http = http;
        this.user = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["g" /* User */]();
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
                self.data = new __WEBPACK_IMPORTED_MODULE_5__shared_sequencepage__["a" /* SequencePage */](_page.Page, _page.SequenceLength, _page.PageSize, _page.PageIndex);
                self.pageLinks = self.data.AdjacentIndexes(2);
                console.log(self.pageLinks);
                self.users = self.data.Page;
            }
            _this.loaderService.display(false);
            return self.users;
        }, function (err) {
            self.data = new __WEBPACK_IMPORTED_MODULE_5__shared_sequencepage__["a" /* SequencePage */]([], 0);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__shared_sequencepage__["a" /* SequencePage */])
    ], UserComponent.prototype, "data", void 0);
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "users",
            template: __webpack_require__("./src/app/accounts/user.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__services_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_4__services_loader_service__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/advert/advert.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-fluid body-content center-block \">\r\n\r\n  <customheader></customheader>\r\n\r\n  <div class=\"container-fluid\" style=\"padding-left:50px\">\r\n    <div class=\"page-content-wrapper\">\r\n      <div class=\"row\">\r\n        <div id=\"page-wrapper\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n              <h1 class=\"page-header\">Setup Adverts </h1>\r\n              <ul class=\"breadcrumb\">\r\n                <li><a [routerLink]=\"['/dashboard']\">Home</a></li>\r\n                <li> <a class=\"active\" [routerLink]=\"['/advert']\">Setup Adverts</a></li>\r\n              </ul>\r\n            </div>\r\n            <!-- /.col-lg-12 -->\r\n          </div>\r\n          <!-- /.row -->\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-5\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"well\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-xs-12\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"widget\">\r\n                    <!-- Widget title -->\r\n                    <div class=\"widget-head\">\r\n                      <div class=\"clearfix\"></div>\r\n                    </div>\r\n                    <div class=\"widget-content referrer\" style=\"display: block;\">\r\n\r\n                      <form class=\"form-horizontal\" enctype=\"multipart/form-data\">\r\n                        <fieldset>\r\n                          <legend>Add Advert</legend>\r\n\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-3 control-label\">  Name <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-9\">\r\n                              <input type=\"text\" class=\"form-control\" id=\"Name\" name=\"Name\" [(ngModel)]=\"advert.Name\" placeholder=\"Enter Advert name\" required>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-3 control-label\">   Description <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-9\">\r\n                              <textarea type=\"text\" class=\"form-control\" id=\"Description\" name=\"Description\" [(ngModel)]=\"advert.Description\" placeholder=\"Enter  description\" required></textarea>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-3 control-label\">  Image Url  <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-9\">\r\n                              <input #file type=\"file\" multiple (change)=\"onFileChanged(file.files)\" class=\"form-control\" />\r\n                              <span *ngIf=\"uploadProgress > 0 && uploadProgress < 100\">\r\n                                {{uploadProgress}}%\r\n                              </span>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <div class=\"col-lg-8 col-lg-offset-3\">\r\n                              <button type=\"submit\" class=\"btn btn-primary\" (click)=\"Ok()\"><i class=\"fa fa-save\"> </i> Save </button>\r\n                            </div>\r\n                          </div>\r\n                        </fieldset>\r\n                      </form>\r\n\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-7\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"well\">\r\n                  <fieldset>\r\n                    <legend>  Advert List</legend>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-xs-6\">\r\n                        <h1 class=\"page-title\"></h1>\r\n                      </div>\r\n                      <div class=\"col-xs-6\">\r\n                        <div class=\"page-actions\">\r\n                          <!--<a class=\"btn btn-primary pull-right\"><i class=\"fa fa-plus\"></i>Add Term</a>-->\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"widget\">\r\n                      <!-- Widget title -->\r\n                      <div class=\"widget-head\">\r\n                        <div class=\"pull-right col-md-4\">\r\n                          <div class=\"form-group\">\r\n                            <div class=\"input-group\">\r\n                              <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-search\"></i></div>\r\n                              <input type=\"text\" class=\"form-control\" name=\"searchString\" placeholder=\"Type to search...\" [(ngModel)]=\"searchString\">\r\n                            </div>\r\n                          </div>\r\n\r\n                        </div>\r\n                        <div class=\"clearfix\"></div>\r\n                      </div>\r\n                      <div class=\"widget-content referrer\" style=\"display: block;\">\r\n\r\n                        <!-- Widget content -->\r\n                        <table class=\"h6 table table-striped table-bordered table-hover\">\r\n                          <thead>\r\n                            <tr>\r\n                              <th>S/N</th>\r\n                              <th>Name</th>\r\n                              <th>Description</th>\r\n                              <th>Image </th>\r\n                              <th>Action(s)</th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <!--| searchfilter: 'name' : txtFname.value-->\r\n                            <tr *ngFor=\"let item of adverts | filter : 'Name' : searchString; let i=index \">\r\n                              <td>{{i + 1 }}</td>\r\n                              <td>{{item.Name}}</td>\r\n                              <td>{{item.Description}}</td>\r\n                              <td><img src=\"{{item.ImageUrl}}\" alt=\"image\" width=\"80\" height=\"80\" /></td>\r\n                              <td>\r\n                                <i><a (click)=\"onUpdate(item.AdvertId)\"><i class=\"fa fa-edit\" style=\"font-size:18px\"></i> </a></i>&nbsp;\r\n                                <i><a (click)=\"onDelete(item.AdvertId)\"><i class=\"fa fa-trash-o\" style=\"font-size:18px;color:red\"></i> </a></i>\r\n                              </td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                        <div *ngIf=\"!hasPage\" style=\"text-align: center; font-size:18px; margin-top:20px;\">\r\n                          <span class=\"text-muted\" style=\"font-size:22px;\">No Advert found</span>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                          <div class=\"col-lg-12\" style=\"text-align:right\">\r\n                            <ul class=\"pagination\">\r\n                              <li><a href=\"javascript:void(0)\" style=\"font-size:18px;background-color:aliceblue\" (click)=\"LoadFirstPage()\">&laquo;</a></li>\r\n                              <li *ngFor=\"let p of pageLinks\" style=\"font-size:18px\">\r\n                                <a href=\"javascript:void(0)\" class=\"page-link\" style=\"font-size:18px\" (click)=\"Get(p)\">\r\n                                  {{p + 1}}\r\n                                </a>\r\n                              </li>\r\n                              <li><a href=\"javascript:void(0)\" (click)=\"LoadLastPage()\" style=\"font-size:18px;background-color:aliceblue\">&raquo;</a></li>\r\n                            </ul>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </fieldset>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <!-- /.row -->\r\n          <!-- /.row -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<footer></footer>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/advert/advert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_model__ = __webpack_require__("./src/app/shared/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_category_service__ = __webpack_require__("./src/app/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_sequencepage__ = __webpack_require__("./src/app/shared/sequencepage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_advert_service__ = __webpack_require__("./src/app/services/advert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









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
        this.product = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["d" /* Product */]();
        this.pageIndex = 1;
        this.pageSize = 100;
        this.pageLinks = [];
        this.categories = new Array();
        this.adverts = new Array();
        this.advert = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["a" /* Advert */]();
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
                self.data = new __WEBPACK_IMPORTED_MODULE_6__shared_sequencepage__["a" /* SequencePage */](_page.Page, _page.SequenceLength, _page.PageSize, _page.PageIndex);
                self.pageLinks = self.data.AdjacentIndexes(2);
                console.log(self.pageLinks);
                self.adverts = self.data.Page;
            }
            _this.loaderService.display(false);
            return self.adverts;
        }, function (err) {
            self.data = new __WEBPACK_IMPORTED_MODULE_6__shared_sequencepage__["a" /* SequencePage */]([], 0);
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
                    var req = new __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["e" /* HttpRequest */]('POST', "api/advert/file/" + self.advertId, self.formData, {
                        reportProgress: true,
                    });
                    self.toastr.success('Operation is successful');
                    self.http.request(req).subscribe(function (event) {
                        self.adverts = self.Get(0);
                        self.formData = new FormData();
                        if (event.type === __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["c" /* HttpEventType */].UploadProgress) {
                            self.uploadProgress = Math.round(100 * event.loaded / event.total);
                            // self.product.ProductId = 0;
                            self.loaderService.display(false);
                        }
                        else if (event instanceof __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["f" /* HttpResponse */]) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__shared_sequencepage__["a" /* SequencePage */])
    ], AdvertComponent.prototype, "data", void 0);
    AdvertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "advert",
            template: __webpack_require__("./src/app/advert/advert.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__services_advert_service__["a" /* AdvertService */], __WEBPACK_IMPORTED_MODULE_5__services_category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_4__services_loader_service__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */]])
    ], AdvertComponent);
    return AdvertComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet>\r\n  <span *ngIf =\"showLoader\" class=\"loading\"></span>\r\n</router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(loaderService) {
        this.loaderService = loaderService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaderService.status.subscribe(function (val) {
            _this.showLoader = val;
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_loader_service__["a" /* LoaderService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__accounts_login_component__ = __webpack_require__("./src/app/accounts/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__ = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__category_category_component__ = __webpack_require__("./src/app/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__shared_customheader_component__ = __webpack_require__("./src/app/shared/customheader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_footer_component__ = __webpack_require__("./src/app/shared/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__accounts_logout_component__ = __webpack_require__("./src/app/accounts/logout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular_2_local_storage__ = __webpack_require__("./node_modules/angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular_webstorage_service__ = __webpack_require__("./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_custompipe__ = __webpack_require__("./src/app/shared/custompipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Products_product_component__ = __webpack_require__("./src/app/Products/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__advert_advert_component__ = __webpack_require__("./src/app/advert/advert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__questions_question_component__ = __webpack_require__("./src/app/questions/question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__videos_genre_component__ = __webpack_require__("./src/app/videos/genre.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__videos_video_component__ = __webpack_require__("./src/app/videos/video.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__accounts_user_component__ = __webpack_require__("./src/app/accounts/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__accounts_profile_component__ = __webpack_require__("./src/app/accounts/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__reports_userpointreport_component__ = __webpack_require__("./src/app/reports/userpointreport.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__reports_getusers_component__ = __webpack_require__("./src/app/reports/getusers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__reports_productsurvey_component__ = __webpack_require__("./src/app/reports/productsurvey.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__reports_userpointsharing_component__ = __webpack_require__("./src/app/reports/userpointsharing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__reports_user_receipts_component__ = __webpack_require__("./src/app/reports/user-receipts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__reports_watched_video_component__ = __webpack_require__("./src/app/reports/watched-video.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__reports_manualreceipt_component__ = __webpack_require__("./src/app/reports/manualreceipt.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_category_service__ = __webpack_require__("./src/app/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_data_service__ = __webpack_require__("./src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__services_account_service__ = __webpack_require__("./src/app/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__services_storage_service__ = __webpack_require__("./src/app/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__services_product_services__ = __webpack_require__("./src/app/services/product.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__services_dashboard_service__ = __webpack_require__("./src/app/services/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__services_advert_service__ = __webpack_require__("./src/app/services/advert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__services_question_services__ = __webpack_require__("./src/app/services/question.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__services_video_services__ = __webpack_require__("./src/app/services/video.services.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__services_report_services__ = __webpack_require__("./src/app/services/report.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// router .. 







































var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__accounts_login_component__["a" /* Login */] },
    { path: 'category', component: __WEBPACK_IMPORTED_MODULE_8__category_category_component__["a" /* CategoryComponent */] },
    { path: 'product', component: __WEBPACK_IMPORTED_MODULE_17__Products_product_component__["a" /* ProductComponent */] },
    { path: 'advert', component: __WEBPACK_IMPORTED_MODULE_18__advert_advert_component__["a" /* AdvertComponent */] },
    { path: 'question', component: __WEBPACK_IMPORTED_MODULE_19__questions_question_component__["a" /* QuestionComponent */] },
    { path: 'genre', component: __WEBPACK_IMPORTED_MODULE_20__videos_genre_component__["a" /* GenreComponent */] },
    { path: 'video-upload', component: __WEBPACK_IMPORTED_MODULE_21__videos_video_component__["a" /* VideoComponent */] },
    { path: 'create-user', component: __WEBPACK_IMPORTED_MODULE_22__accounts_user_component__["a" /* UserComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_23__accounts_profile_component__["a" /* ProfileComponent */] },
    { path: 'wallet-report', component: __WEBPACK_IMPORTED_MODULE_24__reports_userpointreport_component__["a" /* UserPointComponent */] },
    { path: 'registered-users-reports', component: __WEBPACK_IMPORTED_MODULE_25__reports_getusers_component__["a" /* GetUserComponent */] },
    { path: 'product-survey-report', component: __WEBPACK_IMPORTED_MODULE_26__reports_productsurvey_component__["a" /* ProductSurveyComponent */] },
    { path: 'shared-user-report', component: __WEBPACK_IMPORTED_MODULE_27__reports_userpointsharing_component__["a" /* UserPointSharingComponent */] },
    { path: 'receipt-report', component: __WEBPACK_IMPORTED_MODULE_28__reports_user_receipts_component__["a" /* UserReceiptsComponent */] },
    { path: 'video-watched-report', component: __WEBPACK_IMPORTED_MODULE_29__reports_watched_video_component__["a" /* WatchedVideosComponent */] },
    { path: 'manualreceipt', component: __WEBPACK_IMPORTED_MODULE_30__reports_manualreceipt_component__["a" /* ManualReceiptComponent */] },
    { path: 'logout', component: __WEBPACK_IMPORTED_MODULE_13__accounts_logout_component__["a" /* Logout */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_6__accounts_login_component__["a" /* Login */],
                __WEBPACK_IMPORTED_MODULE_11__shared_customheader_component__["a" /* CustomHeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_12__shared_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_13__accounts_logout_component__["a" /* Logout */],
                __WEBPACK_IMPORTED_MODULE_8__category_category_component__["a" /* CategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_16__shared_custompipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_17__Products_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_18__advert_advert_component__["a" /* AdvertComponent */],
                __WEBPACK_IMPORTED_MODULE_19__questions_question_component__["a" /* QuestionComponent */],
                __WEBPACK_IMPORTED_MODULE_20__videos_genre_component__["a" /* GenreComponent */],
                __WEBPACK_IMPORTED_MODULE_21__videos_video_component__["a" /* VideoComponent */],
                __WEBPACK_IMPORTED_MODULE_22__accounts_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_23__accounts_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_24__reports_userpointreport_component__["a" /* UserPointComponent */],
                __WEBPACK_IMPORTED_MODULE_25__reports_getusers_component__["a" /* GetUserComponent */],
                __WEBPACK_IMPORTED_MODULE_26__reports_productsurvey_component__["a" /* ProductSurveyComponent */],
                __WEBPACK_IMPORTED_MODULE_27__reports_userpointsharing_component__["a" /* UserPointSharingComponent */],
                __WEBPACK_IMPORTED_MODULE_28__reports_user_receipts_component__["a" /* UserReceiptsComponent */],
                __WEBPACK_IMPORTED_MODULE_29__reports_watched_video_component__["a" /* WatchedVideosComponent */],
                __WEBPACK_IMPORTED_MODULE_30__reports_manualreceipt_component__["a" /* ManualReceiptComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(routes, {
                    useHash: true,
                    enableTracing: false // for debburgin route ..
                }),
                __WEBPACK_IMPORTED_MODULE_9_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_14_angular_2_local_storage__["LocalStorageModule"].withConfig({ prefix: 'my-app', storageType: 'localStorage' }),
                __WEBPACK_IMPORTED_MODULE_15_angular_webstorage_service__["a" /* StorageServiceModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_16__shared_custompipe__["a" /* FilterPipe */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_32__services_data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_37__services_dashboard_service__["a" /* DashboardService */], __WEBPACK_IMPORTED_MODULE_33__services_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_34__services_storage_service__["a" /* StorageService */],
                __WEBPACK_IMPORTED_MODULE_35__services_loader_service__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_31__services_category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_36__services_product_services__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_38__services_advert_service__["a" /* AdvertService */], __WEBPACK_IMPORTED_MODULE_39__services_question_services__["a" /* QuestionService */],
                __WEBPACK_IMPORTED_MODULE_40__services_video_services__["a" /* VideoService */], __WEBPACK_IMPORTED_MODULE_41__services_report_services__["a" /* ReportService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/category/category.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-fluid body-content center-block \">\r\n\r\n  <customheader></customheader>\r\n\r\n  <div class=\"container-fluid\" style=\"padding-left:50px\">\r\n    <div class=\"page-content-wrapper\">\r\n      <div class=\"row\">\r\n        <div id=\"page-wrapper\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n              <h1 class=\"page-header\">Setup Category</h1>\r\n              <ul class=\"breadcrumb\">\r\n                <li><a [routerLink]=\"['/dashboard']\">Home</a></li>\r\n                <li> <a class=\"active\" [routerLink]=\"['/category']\">Setup Category</a></li>\r\n              </ul>\r\n            </div>\r\n            <!-- /.col-lg-12 -->\r\n          </div>\r\n          <!-- /.row -->\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-5\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"well\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-xs-12\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"widget\">\r\n                    <!-- Widget title -->\r\n                    <div class=\"widget-head\">\r\n                      <div class=\"clearfix\"></div>\r\n                    </div>\r\n                    <div class=\"widget-content referrer\" style=\"display: block;\">\r\n\r\n                      <form class=\"form-horizontal\">\r\n                        <fieldset>\r\n                          <legend>Add Category</legend>\r\n\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-2 control-label\">  Name <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-10\">\r\n                              <input type=\"text\" class=\"form-control\" id=\"Name\" name=\"Name\" [(ngModel)]=\"category.Name\" placeholder=\"Enter category name\" required>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-2 control-label\">  Image <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-10\">\r\n                              <input #file type=\"file\" name=\"catfileupload\" id=\"catfileupload\" multiple (change)=\"onFileChanged(file.files)\" class=\"form-control\" />\r\n                              <span *ngIf=\"uploadProgress > 0 && uploadProgress < 100\">\r\n                                {{uploadProgress}}%\r\n                              </span>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <div class=\"col-lg-9 col-lg-offset-2\">\r\n                              <button type=\"submit\" class=\"btn btn-primary\" (click)=\"Ok()\"><i class=\"fa fa-save\"> </i> Save </button>\r\n                            </div>\r\n                          </div>\r\n                        </fieldset>\r\n                      </form>\r\n\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col-lg-7\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"well\">\r\n                  <fieldset>\r\n                    <legend>  Category List</legend>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-xs-6\">\r\n                        <h1 class=\"page-title\"></h1>\r\n                      </div>\r\n                      <div class=\"col-xs-6\">\r\n                        <div class=\"page-actions\">\r\n                          <!--<a class=\"btn btn-primary pull-right\"><i class=\"fa fa-plus\"></i>Add Term</a>-->\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"widget\">\r\n                      <!-- Widget title -->\r\n                      <div class=\"widget-head\">\r\n                        <div class=\"pull-right col-md-4\">\r\n                          <div class=\"form-group\">\r\n                            <div class=\"input-group\">\r\n                              <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-search\"></i></div>\r\n                              <input type=\"text\" class=\"form-control\" name=\"searchString\" placeholder=\"Type to search...\" [(ngModel)]=\"searchString\">\r\n                            </div>\r\n                          </div>\r\n\r\n                          <!--<input type=\"text\" name=\"name\" class=\"form-control\" [(ngModel)]=\"searchString\" placeholder=\"search \">-->\r\n\r\n                        </div>\r\n                        <div class=\"clearfix\"></div>\r\n                      </div>\r\n                      <div class=\"widget-content referrer\" style=\"display: block;\">\r\n\r\n                        <!-- Widget content -->\r\n                        <table class=\"h6 table table-striped table-bordered table-hover\">\r\n                          <thead>\r\n                            <tr>\r\n                              <th> S/N</th>\r\n                              <th> Category Name</th>\r\n                              <th>Date Created</th>\r\n                              <th>Image </th>\r\n                              <th>Action(s)</th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <!--| searchfilter: 'name' : txtFname.value-->\r\n                            <tr *ngFor=\"let item of categories | filter:'Name':searchString; let i=index \">\r\n                              <td>{{i + 1 }}</td>\r\n                              <td>{{item.Name}}</td>\r\n                              <td>{{item.CreatedDate | date:'mediumDate'}}</td>\r\n                              <td><img src=\"{{item.Icon}}\" alt=\"image\" width=\"80\" height=\"80\" /></td>\r\n                              <td>\r\n                                <i><a (click)=\"onUpdate(item.CategoryId)\"><i class=\"fa fa-edit\" style=\"font-size:18px\"></i> </a></i>&nbsp;\r\n                                <i><a (click)=\"onDelete(item.CategoryId)\"><i class=\"fa fa-trash-o\" style=\"font-size:18px;color:red\"></i> </a></i>\r\n                              </td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                        <div *ngIf=\"!hasPage\" style=\"text-align: center; font-size:18px; margin-top:20px;\">\r\n                          <span class=\"text-muted\" style=\"font-size:22px;\">No category found</span>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                          <div class=\"col-lg-12\" style=\"text-align:right\">\r\n                            <ul class=\"pagination\">\r\n                              <li><a href=\"javascript:void(0)\" style=\"font-size:18px;background-color:aliceblue\" (click)=\"LoadFirstPage()\">&laquo;</a></li>\r\n                              <li *ngFor=\"let p of pageLinks\" [ngClass]=\"p == data.PageIndex\" style=\"font-size:18px;\">\r\n                                <a href=\"javascript:void(0)\" class=\"page-link\" (click)=\"Get(p)\">\r\n                                  {{p + 1}}\r\n                                </a>\r\n                              </li>\r\n                              <li><a href=\"javascript:void(0)\" (click)=\"LoadLastPage()\" style=\"font-size:18px;background-color:aliceblue\">&raquo;</a></li>\r\n                            </ul>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </fieldset>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <!-- /.row -->\r\n          <!-- /.row -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<footer></footer>\r\n"

/***/ }),

/***/ "./src/app/category/category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_model__ = __webpack_require__("./src/app/shared/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_category_service__ = __webpack_require__("./src/app/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_sequencepage__ = __webpack_require__("./src/app/shared/sequencepage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(categoryService, router, toastr, vcr, loaderService, http) {
        this.categoryService = categoryService;
        this.router = router;
        this.toastr = toastr;
        this.vcr = vcr;
        this.loaderService = loaderService;
        this.http = http;
        this.category = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["b" /* Category */]();
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
                self.data = new __WEBPACK_IMPORTED_MODULE_6__shared_sequencepage__["a" /* SequencePage */](_page.Page, _page.SequenceLength, _page.PageSize, _page.PageIndex);
                self.pageLinks = self.data.AdjacentIndexes(2);
                self.categories = self.data.Page;
                return self.categories;
            }
            _this.loaderService.display(false);
        }, function (err) {
            self.data = new __WEBPACK_IMPORTED_MODULE_6__shared_sequencepage__["a" /* SequencePage */]([], 0);
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
                var req = new __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["e" /* HttpRequest */]('POST', "api/category/file/" + c.Result.CategoryId, self.formData, {
                    reportProgress: true,
                });
                //self.toastr.success('Operation is successful');
                self.http.request(req).subscribe(function (event) {
                    self.formData = new FormData();
                    // self.toastr.success('Operation is successful');
                    if (event.type === __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["c" /* HttpEventType */].UploadProgress) {
                        self.uploadProgress = Math.round(100 * event.loaded / event.total);
                        // self.product.ProductId = 0;
                        self.loaderService.display(false);
                        self.Get(0);
                    }
                    else if (event instanceof __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["f" /* HttpResponse */]) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__shared_sequencepage__["a" /* SequencePage */])
    ], CategoryComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], CategoryComponent.prototype, "categories", void 0);
    CategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "category",
            template: __webpack_require__("./src/app/category/category.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_4__services_loader_service__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = "/*@import url('../../assets/css/font-awesome/css/font-awesome.min.css');\r\n@import url('../../assets/css/bootstrap.min.css');\r\n@import url('../../assets/css/site.css');*/\r\n\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-fluid body-content center-block \">\r\n\r\n  <customheader></customheader>\r\n\r\n  <div class=\"container-fluid\" >\r\n    <div class=\"page-content-wrapper\">\r\n      <div class=\"row\">\r\n        <div id=\"page-wrapper\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n              <h1 class=\"page-header\">Dashboard</h1>\r\n            </div>\r\n            <!-- /.col-lg-12 -->\r\n          </div>\r\n          <!-- /.row -->\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <div class=\"panel panel-primary\">\r\n                <div class=\"panel-heading\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-xs-3\">\r\n                      <i class=\"fa fa-comments fa-5x\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-9 text-right\">\r\n                      <div class=\"huge\">{{totalCategory }}</div>\r\n                      <div>Total category</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <a href=\"#\">\r\n                  <div class=\"panel-footer\">\r\n                    <!--<span class=\"pull-left\">View Details</span>-->\r\n                    <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\r\n                    <div class=\"clearfix\"></div>\r\n                  </div>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <div class=\"panel panel-green\">\r\n                <div class=\"panel-heading\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-xs-3\">\r\n                      <i class=\"fa fa-tasks fa-5x\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-9 text-right\">\r\n                      <div class=\"huge\">{{totalProduct }}</div>\r\n                      <div>Total Products</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <a href=\"#\">\r\n                  <div class=\"panel-footer\">\r\n                    <!--<span class=\"pull-left\">View Details</span>-->\r\n                    <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\r\n                    <div class=\"clearfix\"></div>\r\n                  </div>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <div class=\"panel panel-red\">\r\n                <div class=\"panel-heading\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-xs-3\">\r\n                      <i class=\"fa fa-support fa-5x\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-9 text-right\">\r\n                      <div class=\"huge\"> {{totalQuestion }}</div>\r\n                      <div>Total questions</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <a href=\"#\">\r\n                  <div class=\"panel-footer\">\r\n                    <!--<span class=\"pull-left\">View Details</span>-->\r\n                    <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\r\n                    <div class=\"clearfix\"></div>\r\n                  </div>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <div class=\"panel panel-yellow\">\r\n                <div class=\"panel-heading\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-xs-3\">\r\n                      <i class=\"fa fa-shopping-cart fa-5x\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-9 text-right\">\r\n                      <div class=\"huge\">{{ totalAdvert }}</div>\r\n                      <div>Total Advert</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <a href=\"#\">\r\n                  <div class=\"panel-footer\">\r\n                    <!--<span class=\"pull-left\">View Details</span>-->\r\n                    <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\r\n                    <div class=\"clearfix\"></div>\r\n                  </div>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <div class=\"panel panel-red\">\r\n                <div class=\"panel-heading\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-xs-3\">\r\n                      <i class=\"fa fa-user fa-5x\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-9 text-right\">\r\n                      <div class=\"huge\">{{ usersCount}} </div>\r\n                      <div>Total System Users </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <a href=\"#\">\r\n                  <div class=\"panel-footer\">\r\n                    <!--<span class=\"pull-left\">View Details</span>-->\r\n                    <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\r\n                    <div class=\"clearfix\"></div>\r\n                  </div>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <div class=\"panel panel-yellow\">\r\n                <div class=\"panel-heading\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-xs-3\">\r\n                      <i class=\"fa fa-bar-chart fa-5x\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-9 text-right\">\r\n                      <div class=\"huge\">{{ totalSurveyAnsweredCount}} </div>\r\n                      <div>Total Survey answered </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <a href=\"#\">\r\n                  <div class=\"panel-footer\">\r\n                    <!--<span class=\"pull-left\">View Details</span>-->\r\n                    <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\r\n                    <div class=\"clearfix\"></div>\r\n                  </div>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <div class=\"panel panel-primary\">\r\n                <div class=\"panel-heading\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-xs-3\">\r\n                      <i class=\"fa fa-amazon fa-5x\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-9 text-right\">\r\n                      <div class=\"huge\">{{ totalReceipt}}</div>\r\n                      <div>Total receipts</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <a href=\"#\">\r\n                  <div class=\"panel-footer\">\r\n                    <!--<span class=\"pull-left\">View Details</span>-->\r\n                    <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\r\n                    <div class=\"clearfix\"></div>\r\n                  </div>\r\n                </a>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"col-lg-3 col-md-6\">\r\n              <div class=\"panel panel-green\">\r\n                <div class=\"panel-heading\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-xs-3\">\r\n                      <i class=\"fa fa-apple fa-5x\"></i>\r\n                    </div>\r\n                    <div class=\"col-xs-9 text-right\">\r\n                      <div class=\"huge\"> {{ totalShareAndEarnCount}} </div>\r\n                      <div>Total shared and earn count </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <a href=\"#\">\r\n                  <div class=\"panel-footer\">\r\n                    <!--<span class=\"pull-left\">View Details</span>-->\r\n                    <span class=\"pull-right\"><i class=\"fa fa-arrow-circle-right\"></i></span>\r\n                    <div class=\"clearfix\"></div>\r\n                  </div>\r\n                </a>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <!-- /.row -->\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n              <div class=\"panel panel-default\">\r\n                <div class=\"panel-heading\">\r\n                  <i class=\"fa fa-tasks\"></i> Last 10 receipt report\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-12\">\r\n                      <table class=\"table table-striped table-bordered table-hover\">\r\n                        <tr>\r\n                          <th>\r\n                            SN\r\n                          </th>\r\n                          <th>\r\n                            Receipt Ref\r\n                          </th>\r\n                          <th>\r\n                            Merchant Name\r\n                          </th>\r\n                          <th>\r\n                            Currency\r\n                          </th>\r\n                          <th>\r\n                            Total Amount\r\n                          </th>\r\n                        </tr>\r\n                        <tbody>\r\n                          <tr *ngFor=\"let item of receipts | filter : 'MerchantName' : searchString; let i=index \">\r\n                            <td>\r\n                              {{i + 1 }}\r\n                            </td>\r\n                            <td>\r\n                              {{item.ReceiptRef }}\r\n                            </td>\r\n                            <td>\r\n                              {{item.MerchantName }}\r\n                            </td>\r\n                            <td>\r\n                              {{item.Currency }}\r\n                            </td>\r\n                            <td>\r\n                              {{item.TotalAmount | currency:\"N\":0 }}\r\n                            </td>\r\n                          </tr>\r\n                        </tbody>\r\n                      </table>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- /.row -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<footer></footer>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_storage_service__ = __webpack_require__("./src/app/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__ = __webpack_require__("./node_modules/angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_dashboard_service__ = __webpack_require__("./src/app/services/dashboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(service, storage, router, localStorageService) {
        this.service = service;
        this.storage = storage;
        this.router = router;
        this.localStorageService = localStorageService;
        this.chart = []; // This will hold our chart info
        this.receipts = new Array();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        try {
            var token = this.storage.Token;
            if (!token.loginRequired) {
                this.router.navigate(['']);
            }
            else {
                this.storage.Clear();
                this.router.navigate(['/login']);
            }
        }
        catch (_a) {
            console.log('dahboard catch ');
            this.storage.Clear();
            this.router.navigate(['/login']);
        }
        this.GetDashboard();
    };
    DashboardComponent.prototype.GetDashboard = function () {
        var self = this;
        // get dashboard ..
        this.service.getDashboard().subscribe(function (c) {
            console.log(c.Result.CategoryCount);
            self.totalCategory = c.Result.CategoryCount;
            self.totalProduct = c.Result.ProductCount;
            self.totalAdvert = c.Result.AdvertCount;
            self.totalQuestion = c.Result.QuestionCount;
            self.totalReceipt = c.Result.ReceiptCount;
            self.totalShareAndEarnCount = c.Result.TotalShareAndEarnCount;
            self.totalSurveyAnsweredCount = c.Result.TotalSurveyAnsweredCount;
            self.usersCount = c.Result.UsersCount;
            //self.dashboard = c.Result;
            self.receipts = c.Result.ReceiptModel;
        });
    };
    DashboardComponent.prototype.onLoad = function () {
        //TODO
        //  this._weather.dailyForecast()
        //    .subscribe(res => {
        //      console.log(res)
        //    })
        //}
        //let res:any= [];
        //   let weatherDates = [];
        //let  temp_max = res['list'].map(res => res.main.temp_max);
        // let temp_min = res['list'].map(res => res.main.temp_min);
        // let alldates = res['list'].map(res => res.dt);
        // alldates.forEach((res) => {
        //   let jsdate = new Date(res * 1000)
        //   weatherDates.push(jsdate.toLocaleTimeString('en', { year: 'numeric', month: 'short', day: 'numeric' }))
        // })
        //   this.chart = new Chart('canvas', {
        //     type: 'line',
        //     data: {
        //       labels: weatherDates,
        //       datasets: [
        //         {
        //           data: temp_max,
        //           borderColor: "#3cba9f",
        //           fill: false
        //         },
        //         {
        //           data: temp_min,
        //           borderColor: "#ffcc00",
        //           fill: false
        //         },
        //       ]
        //     },
        //     options: {
        //       legend: {
        //         display: false
        //       },
        //       scales: {
        //         xAxes: [{
        //           display: true
        //         }],
        //         yAxes: [{
        //           display: true
        //         }],
        //       }
        //     }
        //   });
        //  <div *ngIf="chart" >
        //    <canvas id="canvas" > {{ chart }
        //</canvas>
        //  < /div>
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "dashboard",
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_dashboard_service__["a" /* DashboardService */], __WEBPACK_IMPORTED_MODULE_1__services_storage_service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/questions/question.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-fluid body-content center-block \">\r\n\r\n  <customheader></customheader>\r\n\r\n  <div class=\"container-fluid\" style=\"padding-left:50px\">\r\n    <div class=\"page-content-wrapper\">\r\n      <div class=\"row\">\r\n        <div id=\"page-wrapper\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n              <h1 class=\"page-header\">Setup Question</h1>\r\n              <ul class=\"breadcrumb\">\r\n                <li><a href=\"javascript:;\">Home</a></li>\r\n                <li> <a href=\"javascript:;\" class=\"active\" >Setup Question</a></li>\r\n              </ul>\r\n            </div>\r\n            <!-- /.col-lg-12 -->\r\n          </div>\r\n          <!-- /.row -->\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-5\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"well\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-xs-12\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"widget\">\r\n                    <!-- Widget title -->\r\n                    <div class=\"widget-head\">\r\n                      <div class=\"clearfix\"></div>\r\n                    </div>\r\n                    <div class=\"widget-content referrer\" style=\"display: block;\">\r\n\r\n                      <form class=\"form-horizontal\" enctype=\"multipart/form-data\">\r\n                        <fieldset>\r\n                          <legend>Add Questions</legend>\r\n\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-2 control-label\">  Question <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-10\">\r\n                              <textarea id=\"Que\" name=\"Que\" [(ngModel)]=\"question.Question\" class=\"form-control\"></textarea>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-2 control-label\">  Option A <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-10\">\r\n                              <textarea id=\"OptionA\" name=\"OptionA\" [(ngModel)]=\"question.OptionA\" class=\"form-control\"></textarea>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-2 control-label\">  Option B <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-10\">\r\n                              <textarea id=\"OptionB\" name=\"OptionB\" [(ngModel)]=\"question.OptionB\" class=\"form-control\"></textarea>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-2 control-label\">  Option C <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-10\">\r\n                              <textarea id=\"OptionC\" name=\"OptionC\" [(ngModel)]=\"question.OptionC\" class=\"form-control\"></textarea>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-2 control-label\">  Option D <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-10\">\r\n                              <textarea id=\"OptionD\" name=\"OptionD\" [(ngModel)]=\"question.OptionD\" class=\"form-control\"></textarea>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-2 control-label\">  Answer <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-10\">\r\n                              <textarea id=\"Answer\" name=\"Answer\" [(ngModel)]=\"question.Answer\" class=\"form-control\"></textarea>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <div class=\"col-lg-9 col-lg-offset-2\">\r\n                              <button type=\"submit\" class=\"btn btn-primary\" (click)=\"Ok()\"><i class=\"fa fa-save\"> </i> Save </button>\r\n                            </div>\r\n                          </div>\r\n\r\n                        </fieldset>\r\n                      </form>\r\n\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-7\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"well\">\r\n                  <fieldset>\r\n                    <legend>  Question List</legend>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-xs-6\">\r\n                        <h1 class=\"page-title\"></h1>\r\n                      </div>\r\n                      <div class=\"col-xs-6\">\r\n                        <div class=\"page-actions\">\r\n                          <!--<a class=\"btn btn-primary pull-right\"><i class=\"fa fa-plus\"></i>Add Term</a>-->\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"widget\">\r\n                      <!-- Widget title -->\r\n                      <div class=\"widget-head\">\r\n                        <div class=\"pull-right col-md-4\">\r\n                          <div class=\"form-group\">\r\n                            <div class=\"input-group\">\r\n                              <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-search\"></i></div>\r\n                              <input type=\"text\" class=\"form-control\" name=\"searchString\" placeholder=\"Type to search...\" [(ngModel)]=\"searchString\" />\r\n                            </div>\r\n                          </div>\r\n\r\n                        </div>\r\n                        <div class=\"clearfix\"></div>\r\n                      </div>\r\n                      <div class=\"widget-content referrer\" style=\"display: block;\">\r\n\r\n                        <!-- Widget content -->\r\n                        <table class=\"h6 table table-striped table-bordered table-hover\">\r\n                          <thead>\r\n                            <tr>\r\n                              <th>S/N</th>\r\n                              <th> Question</th>\r\n                              <th>Option A</th>\r\n                              <th>Option B</th>\r\n                              <th>Option C </th>\r\n                              <th>Option D</th>\r\n                              <th>Answer</th>\r\n                              <th> Action(s)</th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <!--| searchfilter: 'name' : txtFname.value-->\r\n                            <tr *ngFor=\"let item of questions | filter : 'Question' : searchString; let i=index \">\r\n                              <td>{{i + 1 }}</td>\r\n                              <td>{{item.Question}}</td>\r\n                              <td>{{item.OptionA}}</td>\r\n                              <td>{{item.OptionB}}</td>\r\n                              <td>{{item.OptionC}}</td>\r\n                              <td>{{item.OptionD}}</td>\r\n                              <td>{{item.Answer}}</td>\r\n                              <td>\r\n                                <i><a (click)=\"onUpdate(item.Id)\"><i class=\"fa fa-edit\" style=\"font-size:18px\"></i> </a></i>&nbsp;\r\n                                <i><a (click)=\"onDelete(item.Id)\"><i class=\"fa fa-trash-o\" style=\"font-size:18px;color:red\"></i> </a></i>\r\n                              </td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                        <div *ngIf=\"!hasPage\" style=\"text-align: center; font-size:18px; margin-top:20px;\">\r\n                          <span class=\"text-muted\" style=\"font-size:22px;\">No question found</span>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-lg-12\" style=\"text-align:right\">\r\n                            <ul class=\"pagination\">\r\n                              <li><a href=\"javascript:void(0)\" style=\"font-size:18px;background-color:aliceblue\" (click)=\"LoadFirstPage()\">&laquo;</a></li>\r\n                              <li *ngFor=\"let p of pageLinks\" style=\"font-size:18px\">\r\n                                <a href=\"javascript:void(0)\" class=\"page-link\" (click)=\"Get(p)\">\r\n                                  {{p + 1}}\r\n                                </a>\r\n                              </li>\r\n                              <li><a href=\"javascript:void(0)\" (click)=\"LoadLastPage()\" style=\"font-size:18px;background-color:aliceblue\">&raquo;</a></li>\r\n                            </ul>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </fieldset>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <!-- /.row -->\r\n          <!-- /.row -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<footer></footer>\r\n\r\n"

/***/ }),

/***/ "./src/app/questions/question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_model__ = __webpack_require__("./src/app/shared/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_sequencepage__ = __webpack_require__("./src/app/shared/sequencepage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_question_services__ = __webpack_require__("./src/app/services/question.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var QuestionComponent = /** @class */ (function () {
    function QuestionComponent(services, router, toastr, vcr, loaderService, http) {
        this.services = services;
        this.router = router;
        this.toastr = toastr;
        this.vcr = vcr;
        this.loaderService = loaderService;
        this.http = http;
        this.product = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["d" /* Product */]();
        this.pageIndex = 1;
        this.pageSize = 100;
        this.pageLinks = [];
        this.questions = new Array();
        this.formData = new FormData();
        this.question = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["j" /* UserQuestion */]();
        this.toastr.setRootViewContainerRef(vcr);
    }
    QuestionComponent.prototype.ngOnInit = function () {
        this.LoadFirstPage();
    };
    QuestionComponent.prototype.ngOnChanges = function (changes) {
        if (changes['products']) {
            // this.products = this.Get(0);
        }
    };
    QuestionComponent.prototype.LoadFirstPage = function () {
        var get = this.Get(0);
        this.hasPage = this.HasNoPage();
        return get;
    };
    QuestionComponent.prototype.LoadLastPage = function () {
        if (this.data) {
            return this.Get((Math.ceil(this.data.SequenceLength / this.pageSize) - 1));
        }
    };
    QuestionComponent.prototype.HasNoPage = function () {
        var result = this.data == null || typeof this.data == 'undefined' || this.data.Page.length == 0;
        return result;
    };
    QuestionComponent.prototype.Get = function (pageIndex) {
        var _this = this;
        var self = this;
        this.loaderService.display(true);
        this.services.GetQuestionPage(pageIndex, this.pageSize).subscribe(function (resp) {
            var _page = resp.Result;
            console.log(_page);
            if (_page.PageSize == 0) {
                //<-- debug stuff
                self.pageLinks = [];
            }
            else {
                self.data = new __WEBPACK_IMPORTED_MODULE_5__shared_sequencepage__["a" /* SequencePage */](_page.Page, _page.SequenceLength, _page.PageSize, _page.PageIndex);
                self.pageLinks = self.data.AdjacentIndexes(2);
                console.log(self.pageLinks);
                self.questions = self.data.Page;
                return self.questions;
            }
            _this.loaderService.display(false);
        }, function (err) {
            self.data = new __WEBPACK_IMPORTED_MODULE_5__shared_sequencepage__["a" /* SequencePage */]([], 0);
            self.pageLinks = self.data.AdjacentIndexes(2);
            _this.toastr.error('Operation failed e.g UnAuthorized or Network Issue');
            _this.loaderService.display(false);
        });
        return self.questions;
    };
    QuestionComponent.prototype.onUpdate = function (id) {
        var self = this;
        this.services.getQuestionById(id).subscribe(function (c) {
            self.question = c.Result;
            self.question.Question = c.Result.Question;
            self.question.OptionA = c.Result.OptionA;
            self.question.OptionB = c.Result.OptionA;
            self.question.OptionC = c.Result.OptionA;
            self.question.OptionD = c.Result.OptionA;
            self.question.Answer = c.Result.Answer;
            self.question.Id = c.Result.Id;
            console.log(c.Result);
        });
        //this.product = this.products.filter(c => c.ProductId == id).pop();//.filter(n => this.name = n.Name);
        console.log(self.product);
        // this.router.navigate(['/quesion']);
    };
    QuestionComponent.prototype.onDelete = function (id) {
        var _this = this;
        var op = confirm('Are you sure?');
        var self = this;
        if (op) {
            this.services.DeleteQuestion(id).subscribe(function (c) {
                self.Get(0);
                _this.toastr.success("Operation Successful");
                //this.router.navigate(['/question']);
            });
        }
    };
    QuestionComponent.prototype.Ok = function () {
        var self = this;
        if (!self.question.Question) {
            this.toastr.error("Error, question cannot be empty ");
            return;
        }
        if (!self.question.OptionA) {
            this.toastr.error("Error, option A cannot be empty ");
            return;
        }
        if (!self.question.OptionB) {
            this.toastr.error("Error, option B cannot be empty ");
            return;
        }
        if (!self.question.OptionC) {
            this.toastr.error("Error, option C cannot be empty ");
            return;
        }
        if (!self.question.OptionD) {
            this.toastr.error("Error, option D cannot be empty ");
            return;
        }
        if (!self.question.Answer) {
            this.toastr.error("Error, Answer cannot be empty ");
            return;
        }
        this.loaderService.display(true);
        self.services.AddOrUpdateQuestion(self.question).subscribe(function (c) {
            self.Get(0);
            console.log(self.question);
            self.question.Answer = '';
            self.question.Id = 0;
            self.question.OptionA = '';
            self.question.OptionB = '';
            self.question.OptionC = '';
            self.question.OptionD = '';
            self.question.Question = '';
            if (c.Succeeded) {
                self.question = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["j" /* UserQuestion */]();
                self.toastr.success('Operation is successful');
            }
            else {
                self.toastr.error('Operation failed');
            }
            self.loaderService.display(false);
        }, function (error) {
            self.Get(0);
            self.toastr.error('Operation failed,please check the inputs');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__shared_sequencepage__["a" /* SequencePage */])
    ], QuestionComponent.prototype, "data", void 0);
    QuestionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "question",
            template: __webpack_require__("./src/app/questions/question.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__services_question_services__["a" /* QuestionService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_4__services_loader_service__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]])
    ], QuestionComponent);
    return QuestionComponent;
}());



/***/ }),

/***/ "./src/app/reports/getusers.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-fluid body-content center-block \">\r\n\r\n  <customheader></customheader>\r\n\r\n  <div class=\"container-fluid\" style=\"padding-left:50px\">\r\n    <div class=\"page-content-wrapper\">\r\n      <div class=\"row\">\r\n        <div id=\"page-wrapper\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n              <h1 class=\"page-header\">  Registered Users Reports</h1>\r\n              <ul class=\"breadcrumb\">\r\n                <li><a [routerLink]=\"['/dashboard']\">Home</a></li>\r\n                <li> <a class=\"active\" [routerLink]=\"['/report']\">registered users </a></li>\r\n              </ul>\r\n            </div>\r\n            <!-- /.col-lg-12 -->\r\n          </div>\r\n          <!-- /.row -->\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"well\">\r\n                  <fieldset>\r\n                    <legend>  User Report</legend>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-xs-6\">\r\n                        <h1 class=\"page-title\"></h1>\r\n                      </div>\r\n                      <div class=\"col-xs-6\">\r\n                        <div class=\"page-actions\">\r\n                          <!--<a class=\"btn btn-primary pull-right\"><i class=\"fa fa-plus\"></i>Add Term</a>-->\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"widget\">\r\n                      <!-- Widget title -->\r\n                      <div class=\"widget-head\">\r\n                        <div class=\"pull-right col-md-4\">\r\n                          <div class=\"form-group\">\r\n                            <div class=\"input-group\">\r\n                              <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-search\"></i></div>\r\n                              <input type=\"text\" class=\"form-control\" name=\"searchString\" placeholder=\"Type to search...\" [(ngModel)]=\"searchString\" />\r\n                            </div>\r\n                          </div>\r\n\r\n                        </div>\r\n                        <div class=\"clearfix\"></div>\r\n                      </div>\r\n                      <div class=\"widget-content referrer\" style=\"display: block;\">\r\n\r\n                        <!-- Widget content -->\r\n                        <table class=\"h6 table table-striped table-bordered table-hover\">\r\n                          <thead>\r\n                            <tr>\r\n                              <th>S/N</th>\r\n                              <th>Last Name</th>\r\n                              <th>First Name</th>\r\n                              <th>Email</th>\r\n                              <th>Mobile</th>\r\n                              <th>Address</th>\r\n                              <th>Entry Date </th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr *ngFor=\"let item of reports | filter : 'LastName' : searchString; let i=index \">\r\n                              <td>{{i + 1 }}</td>\r\n                              <td>{{item.LastName}}</td>\r\n                              <td>{{item.FirstName}}</td>\r\n                              <td>{{item.EmailAddress}}</td>\r\n                              <td>{{item.Mobile}}</td>\r\n                              <td>{{item.Address}}</td>\r\n                              <td>{{item.CreatedDate | date:'mediumDate' }}</td>\r\n                              <td></td>\r\n                              <!--&#8358;-->\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                        <div *ngIf=\"!hasPage\" style=\"text-align: center; font-size:18px; margin-top:20px;\">\r\n                          <span class=\"text-muted\" style=\"font-size:22px;\">No user found</span>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-lg-12\" style=\"text-align:right\">\r\n                            <ul class=\"pagination\">\r\n                              <li><a href=\"javascript:void(0)\" style=\"font-size:18px;background-color:aliceblue\" (click)=\"LoadFirstPage()\">&laquo;</a></li>\r\n                              <li *ngFor=\"let p of pageLinks\" style=\"font-size:18px\">\r\n                                <a href=\"javascript:void(0)\" class=\"page-link\" (click)=\"Get(p)\">\r\n                                  {{p + 1}}\r\n                                </a>\r\n                              </li>\r\n                              <li><a href=\"javascript:void(0)\" (click)=\"LoadLastPage()\" style=\"font-size:18px;background-color:aliceblue\">&raquo;</a></li>\r\n                            </ul>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </fieldset>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<footer></footer>\r\n"

/***/ }),

/***/ "./src/app/reports/getusers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_model__ = __webpack_require__("./src/app/shared/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_sequencepage__ = __webpack_require__("./src/app/shared/sequencepage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_report_services__ = __webpack_require__("./src/app/services/report.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








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
        this.walletPoint = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["m" /* WalletPoint */]();
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
                self.data = new __WEBPACK_IMPORTED_MODULE_5__shared_sequencepage__["a" /* SequencePage */](_page.Page, _page.SequenceLength, _page.PageSize, _page.PageIndex);
                self.pageLinks = self.data.AdjacentIndexes(2);
                console.log(self.pageLinks);
                self.reports = self.data.Page;
            }
            _this.loaderService.display(false);
            return self.reports;
        }, function (err) {
            self.data = new __WEBPACK_IMPORTED_MODULE_5__shared_sequencepage__["a" /* SequencePage */]([], 0);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__shared_sequencepage__["a" /* SequencePage */])
    ], GetUserComponent.prototype, "data", void 0);
    GetUserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "get-users",
            template: __webpack_require__("./src/app/reports/getusers.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__services_report_services__["a" /* ReportService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_4__services_loader_service__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]])
    ], GetUserComponent);
    return GetUserComponent;
}());



/***/ }),

/***/ "./src/app/reports/manualreceipt.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-fluid body-content center-block \">\r\n\r\n  <customheader></customheader>\r\n\r\n  <div class=\"container-fluid\" style=\"padding-left:50px\">\r\n    <div class=\"page-content-wrapper\">\r\n      <div class=\"row\">\r\n        <div id=\"page-wrapper\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n              <h1 class=\"page-header\">  Add User Point</h1>\r\n              <ul class=\"breadcrumb\">\r\n                <li><a [routerLink]=\"['/dashboard']\">Home</a></li>\r\n                <li> <a class=\"active\" [routerLink]=\"['/report']\">Add user point </a></li>\r\n              </ul>\r\n            </div>\r\n            <!-- /.col-lg-12 -->\r\n          </div>\r\n          <!-- /.row -->\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-6\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"well\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-xs-12\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"widget\">\r\n                    <!-- Widget title -->\r\n                    <div class=\"widget-head\">\r\n                      <div class=\"clearfix\"></div>\r\n                    </div>\r\n                    <div class=\"widget-content referrer\" style=\"display: block;\">\r\n\r\n                      <form class=\"form-horizontal\" enctype=\"multipart/form-data\">\r\n                        <fieldset>\r\n                          <legend>Add User Point</legend>\r\n\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-2 control-label\">  Image  <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-10\">\r\n                              <img src=\"{{report.FilePath}}\" class=\"img-responsive\" width=\"200\" height=\"200\" />\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-2 control-label\">  Category <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-10\">\r\n                              <select id=\"category\" name=\"category\" [(ngModel)]=\"report.categoryId\" class=\"form-control\">\r\n                                <option>--select --</option>\r\n                                <option *ngFor=\"let item of categories\" value=\"{{item.Name}}\">{{item.Name}}</option>\r\n                              </select>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-2 control-label\"> Merchant   <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-10\">\r\n                              <input type=\"text\" class=\"form-control\" id=\"ProductName\" name=\"ProductName\" [(ngModel)]=\"report.MerchantName\" placeholder=\"Enter Merchant  Name\" required>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-2 control-label\">  Total Amount <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-10\">\r\n                              <input type=\"text\" class=\"form-control\" id=\"Price\" name=\"Price\" [(ngModel)]=\"report.TotalAmount\" placeholder=\"Enter Total Amount\" required>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-2 control-label\">  Total Tax <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-10\">\r\n                              <input type=\"text\" class=\"form-control\" id=\"Price\" name=\"Price\" [(ngModel)]=\"report.TotalTax\" placeholder=\"Enter Total Tax\" required>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-2 control-label\">  Receipt data  </label>\r\n                            <div class=\"col-lg-10\">\r\n                              <textarea type=\"text\" class=\"form-control\" id=\"receiptdata\" name=\"receiptdata\" [(ngModel)]=\"report.ReceiptData\" placeholder=\"Enter Receipt data\"></textarea>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <div class=\"col-lg-9 col-lg-offset-2\">\r\n                              <button type=\"submit\" class=\"btn btn-primary\" (click)=\"UpdateReceipt(report)\"><i class=\"fa fa-save\"> </i> Save user point </button>\r\n                            </div>\r\n                          </div>\r\n                        </fieldset>\r\n                      </form>\r\n\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-6\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"well\">\r\n                  <fieldset>\r\n                    <legend>  User receipt details </legend>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-xs-6\">\r\n                        <h1 class=\"page-title\"></h1>\r\n                      </div>\r\n                      <div class=\"col-xs-6\">\r\n                        <div class=\"page-actions\">\r\n                          <!--<a class=\"btn btn-primary pull-right\"><i class=\"fa fa-plus\"></i>Add Term</a>-->\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"widget\">\r\n                      <!-- Widget title -->\r\n                      <div class=\"widget-head\">\r\n                        <div class=\"pull-right col-md-4\">\r\n                          <div class=\"form-group\">\r\n                            <div class=\"input-group\">\r\n                              <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-search\"></i></div>\r\n                              <input type=\"text\" class=\"form-control\" name=\"searchString\" placeholder=\"Type to search...\" [(ngModel)]=\"searchString\">\r\n                            </div>\r\n                          </div>\r\n\r\n                        </div>\r\n                        <div class=\"clearfix\"></div>\r\n                      </div>\r\n                      <div class=\"widget-content referrer\" style=\"display: block;overflow:scroll; min-height:500px\">\r\n\r\n                        <!-- Widget content -->\r\n                        <table class=\"h6 table table-striped table-bordered table-hover\">\r\n                          <thead>\r\n                            <tr>\r\n                              <th>S/N</th>\r\n                              <th>Category Name</th>\r\n                              <th>Merchant Name</th>\r\n                              <th>Total Amount</th>\r\n                              <th>Total Tax </th>\r\n                              <th>Receipt Data</th>\r\n                              <th>Receipt Approval</th>\r\n\r\n                              <th>Action</th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <!--| searchfilter: 'name' : txtFname.value-->\r\n                            <tr *ngFor=\"let item of reports | filter : 'MerchantName' : searchString; let i=index \">\r\n                              <td>{{i + 1 }}</td>\r\n                              <td>{{item.CategoryName}}</td>\r\n                              <td>{{item.MerchantName}}</td>\r\n                              <td>{{item.TotalAmount}}</td>\r\n                              <td>{{item.TotalTax}}</td>\r\n                              <td>{{item.ReceiptData}}</td>\r\n                              <td>{{item.ReceiptStatus}}</td>\r\n                              <!--<td><img src=\"{{item.ImageUrl}}\" alt=\"image\" width=\"80\" height=\"80\" /></td>-->\r\n                              <td>\r\n                                <i><a (click)=\"onUpdate(item.ReceiptId)\"><i class=\"fa fa-edit\" style=\"font-size:18px\"></i> </a></i>&nbsp;\r\n                                <i><a (click)=\"onDelete(item.ReceiptId)\"><i class=\"fa fa-trash-o\" style=\"font-size:18px;color:red\"></i> </a></i>\r\n                              </td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                        <div *ngIf=\"!hasPage\" style=\"text-align: center; font-size:18px; margin-top:20px;\">\r\n                          <span class=\"text-muted\" style=\"font-size:22px;\">No receipt found</span>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                          <div class=\"col-lg-12\" style=\"text-align:right\">\r\n                            <ul class=\"pagination\">\r\n                              <li><a href=\"javascript:void(0)\" style=\"font-size:18px;background-color:aliceblue\" (click)=\"LoadFirstPage()\">&laquo;</a></li>\r\n                              <li *ngFor=\"let p of pageLinks\" style=\"font-size:18px\">\r\n                                <a href=\"javascript:void(0)\" class=\"page-link\" (click)=\"Get(p)\">\r\n                                  {{p + 1}}\r\n                                </a>\r\n                              </li>\r\n                              <li><a href=\"javascript:void(0)\" (click)=\"LoadLastPage()\" style=\"font-size:18px;background-color:aliceblue\">&raquo;</a></li>\r\n                            </ul>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </fieldset>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<footer></footer>\r\n"

/***/ }),

/***/ "./src/app/reports/manualreceipt.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManualReceiptComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_model__ = __webpack_require__("./src/app/shared/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_category_service__ = __webpack_require__("./src/app/services/category.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_sequencepage__ = __webpack_require__("./src/app/shared/sequencepage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_report_services__ = __webpack_require__("./src/app/services/report.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ManualReceiptComponent = /** @class */ (function () {
    function ManualReceiptComponent(services, router, toastr, categoryService, vcr, loaderService, http) {
        this.services = services;
        this.router = router;
        this.toastr = toastr;
        this.categoryService = categoryService;
        this.vcr = vcr;
        this.loaderService = loaderService;
        this.http = http;
        this.pageIndex = 1;
        this.pageSize = 100;
        this.pageLinks = [];
        this.formData = new FormData();
        this.reports = new Array();
        this.report = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["e" /* Receipt */]();
        this.categories = new Array();
        this.toastr.setRootViewContainerRef(vcr);
    }
    ManualReceiptComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryService.getCategory().subscribe(function (c) {
            if (c.Succeeded) {
                _this.categories = c.Result;
            }
        });
        this.LoadFirstPage();
    };
    ManualReceiptComponent.prototype.ngOnChanges = function (changes) {
        if (changes['manualreceipt']) {
            // this.products = this.Get(0);
        }
    };
    // Get category
    ManualReceiptComponent.prototype.LoadFirstPage = function () {
        var get = this.Get(0);
        this.hasPage = this.HasNoPage();
        return get;
    };
    ManualReceiptComponent.prototype.LoadLastPage = function () {
        if (this.data) {
            return this.Get((Math.ceil(this.data.SequenceLength / this.pageSize) - 1));
        }
    };
    ManualReceiptComponent.prototype.HasNoPage = function () {
        var result = this.data == null || typeof this.data == 'undefined' || this.data.Page.length == 0;
        return result;
    };
    ManualReceiptComponent.prototype.Get = function (pageIndex) {
        var _this = this;
        var self = this;
        this.loaderService.display(true);
        this.services.GetUserReceipts(pageIndex, this.pageSize).subscribe(function (resp) {
            var _page = resp.Result;
            if (_page.PageSize == 0) {
                //<-- debug stuff
                self.pageLinks = [];
            }
            else {
                self.data = new __WEBPACK_IMPORTED_MODULE_6__shared_sequencepage__["a" /* SequencePage */](_page.Page, _page.SequenceLength, _page.PageSize, _page.PageIndex);
                self.pageLinks = self.data.AdjacentIndexes(2);
                console.log(self.pageLinks);
                self.reports = self.data.Page;
            }
            _this.loaderService.display(false);
            return self.reports;
        }, function (err) {
            self.data = new __WEBPACK_IMPORTED_MODULE_6__shared_sequencepage__["a" /* SequencePage */]([], 0);
            self.pageLinks = self.data.AdjacentIndexes(2);
            //this.toastr.error('Operation failed e.g UnAuthorized or Network Issue');
            _this.loaderService.display(false);
            return self.reports;
        });
        return self.reports;
    };
    ManualReceiptComponent.prototype.onDownload = function (id) {
        this.toastr.success("Operation successful");
    };
    ManualReceiptComponent.prototype.GetEnum = function (id) {
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
    ManualReceiptComponent.prototype.onUpdate = function (id) {
        var self = this;
        this.services.GetUserReceiptById(id).subscribe(function (c) {
            self.report.CategoryName = c.Result.CategoryName;
            self.report.MerchantName = c.Result.MerchantName;
            self.report.ReceiptData = c.Result.ReceiptData;
            self.report.TotalAmount = c.Result.TotalAmount;
            self.report.TotalTax = c.Result.TotalTax;
            self.report.FilePath = c.Result.FilePath;
            self.report.ReceiptId = c.Result.ReceiptId;
        });
    };
    ManualReceiptComponent.prototype.onDelete = function (id) {
        var _this = this;
        this.services.DeleteUserReceiptById(id).subscribe(function (c) {
            if (c.Succeeded) {
                _this.toastr.success("Operation  Successful");
            }
            else {
                _this.toastr.error("Operation Successful");
            }
        });
    };
    ManualReceiptComponent.prototype.UpdateReceipt = function (model) {
        var _this = this;
        var self = this;
        this.services.UpdateUserReceipt(model).subscribe(function (c) {
            if (c.Succeeded) {
                self.Get(0);
                _this.toastr.success("Operation successful");
            }
            else {
                _this.toastr.error("Operation failed " + c.Message);
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_6__shared_sequencepage__["a" /* SequencePage */])
    ], ManualReceiptComponent.prototype, "data", void 0);
    ManualReceiptComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "manual-reciept",
            template: __webpack_require__("./src/app/reports/manualreceipt.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__services_report_services__["a" /* ReportService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_5__services_category_service__["a" /* CategoryService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_4__services_loader_service__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */]])
    ], ManualReceiptComponent);
    return ManualReceiptComponent;
}());



/***/ }),

/***/ "./src/app/reports/productsurvey.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-fluid body-content center-block \">\r\n\r\n  <customheader></customheader>\r\n\r\n  <div class=\"container-fluid\" style=\"padding-left:50px\">\r\n    <div class=\"page-content-wrapper\">\r\n      <div class=\"row\">\r\n        <div id=\"page-wrapper\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n              <h1 class=\"page-header\">  Product Survey Report</h1>\r\n              <ul class=\"breadcrumb\">\r\n                <li><a [routerLink]=\"['/dashboard']\">Home</a></li>\r\n                <li> <a class=\"active\" [routerLink]=\"['/report']\">Product Survey </a></li>\r\n              </ul>\r\n            </div>\r\n            <!-- /.col-lg-12 -->\r\n          </div>\r\n          <!-- /.row -->\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"well\">\r\n                  <fieldset>\r\n                    <legend> Product Survey</legend>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-xs-6\">\r\n                        <h1 class=\"page-title\"></h1>\r\n                      </div>\r\n                      <div class=\"col-xs-6\">\r\n                        <div class=\"page-actions\">\r\n                          <!--<a class=\"btn btn-primary pull-right\"><i class=\"fa fa-plus\"></i>Add Term</a>-->\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"widget\">\r\n                      <!-- Widget title -->\r\n                      <div class=\"widget-head\">\r\n                        <div class=\"pull-right col-md-4\">\r\n                          <div class=\"form-group\">\r\n                            <div class=\"input-group\">\r\n                              <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-search\"></i></div>\r\n                              <input type=\"text\" class=\"form-control\" name=\"searchString\" placeholder=\"Type to search...\" [(ngModel)]=\"searchString\" />\r\n                            </div>\r\n                          </div>\r\n\r\n                        </div>\r\n                        <div class=\"clearfix\"></div>\r\n                      </div>\r\n                      <div class=\"widget-content referrer\" style=\"display: block;\">\r\n\r\n                        <!-- Widget content -->\r\n                        <table class=\"h6 table table-striped table-bordered table-hover\">\r\n                          <thead>\r\n                            <tr>\r\n                              <th>S/N</th>\r\n                              <th>Last Name</th>\r\n                              <th>First Name</th>\r\n                              <th>Point</th>\r\n                              <th>Channel</th>\r\n                              <th>Total Amount</th>\r\n                              <th>Entry Date </th>\r\n                             \r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr *ngFor=\"let item of UserPointEarneds | filter : 'LastName' : searchString; let i=index \">\r\n                              <td>{{i + 1 }}</td>\r\n                              <td>{{item.LastName}}</td>\r\n                              <td>{{item.FirstName}}</td>\r\n                              <td>{{item.Point}}</td>\r\n                              <td>{{GetEnum(item.Channel)}}</td>\r\n                              <td>{{item.TotalAmount | currency:\"N\":0}}</td>\r\n                              <td>{{item.CreatedDate | date:'mediumDate' }}</td>\r\n                             \r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                        <div *ngIf=\"!hasPage\" style=\"text-align: center; font-size:18px; margin-top:20px;\">\r\n                          <span class=\"text-muted\" style=\"font-size:22px;\">No user point found</span>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-lg-12\" style=\"text-align:right\">\r\n                            <ul class=\"pagination\">\r\n                              <li><a href=\"javascript:void(0)\" style=\"font-size:18px;background-color:aliceblue\" (click)=\"LoadFirstPage()\">&laquo;</a></li>\r\n                              <li *ngFor=\"let p of pageLinks\" style=\"font-size:18px\">\r\n                                <a href=\"javascript:void(0)\" class=\"page-link\" (click)=\"Get(p)\">\r\n                                  {{p + 1}}\r\n                                </a>\r\n                              </li>\r\n                              <li><a href=\"javascript:void(0)\" (click)=\"LoadLastPage()\" style=\"font-size:18px;background-color:aliceblue\">&raquo;</a></li>\r\n                            </ul>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </fieldset>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<footer></footer>\r\n"

/***/ }),

/***/ "./src/app/reports/productsurvey.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductSurveyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_model__ = __webpack_require__("./src/app/shared/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_sequencepage__ = __webpack_require__("./src/app/shared/sequencepage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_report_services__ = __webpack_require__("./src/app/services/report.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProductSurveyComponent = /** @class */ (function () {
    function ProductSurveyComponent(services, router, toastr, vcr, loaderService, http) {
        this.services = services;
        this.router = router;
        this.toastr = toastr;
        this.vcr = vcr;
        this.loaderService = loaderService;
        this.http = http;
        this.pageIndex = 1;
        this.pageSize = 100;
        this.pageLinks = [];
        this.UserPointEarneds = new Array();
        this.formData = new FormData();
        this.report = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["i" /* UserPointEarnedModel */]();
        this.toastr.setRootViewContainerRef(vcr);
    }
    ProductSurveyComponent.prototype.ngOnInit = function () {
        this.LoadFirstPage();
    };
    ProductSurveyComponent.prototype.ngOnChanges = function (changes) {
        if (changes['product-survey']) {
            // this.products = this.Get(0);
        }
    };
    ProductSurveyComponent.prototype.LoadFirstPage = function () {
        var get = this.Get(0);
        this.hasPage = this.HasNoPage();
        return get;
    };
    ProductSurveyComponent.prototype.LoadLastPage = function () {
        if (this.data) {
            return this.Get((Math.ceil(this.data.SequenceLength / this.pageSize) - 1));
        }
    };
    ProductSurveyComponent.prototype.HasNoPage = function () {
        var result = this.data == null || typeof this.data == 'undefined' || this.data.Page.length == 0;
        return result;
    };
    ProductSurveyComponent.prototype.Get = function (pageIndex) {
        var _this = this;
        var self = this;
        this.loaderService.display(true);
        this.services.GetUserPointViaProductSurvey(pageIndex, this.pageSize).subscribe(function (resp) {
            var _page = resp.Result;
            if (_page.PageSize == 0) {
                //<-- debug stuff
                self.pageLinks = [];
            }
            else {
                self.data = new __WEBPACK_IMPORTED_MODULE_5__shared_sequencepage__["a" /* SequencePage */](_page.Page, _page.SequenceLength, _page.PageSize, _page.PageIndex);
                self.pageLinks = self.data.AdjacentIndexes(2);
                console.log(self.pageLinks);
                self.UserPointEarneds = self.data.Page;
            }
            _this.loaderService.display(false);
            return self.UserPointEarneds;
        }, function (err) {
            self.data = new __WEBPACK_IMPORTED_MODULE_5__shared_sequencepage__["a" /* SequencePage */]([], 0);
            self.pageLinks = self.data.AdjacentIndexes(2);
            //this.toastr.error('Operation failed e.g UnAuthorized or Network Issue');
            _this.loaderService.display(false);
            return self.report;
        });
        return self.UserPointEarneds;
    };
    ProductSurveyComponent.prototype.onDownload = function (id) {
        this.toastr.success("Operation successful");
    };
    ProductSurveyComponent.prototype.GetEnum = function (id) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__shared_sequencepage__["a" /* SequencePage */])
    ], ProductSurveyComponent.prototype, "data", void 0);
    ProductSurveyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "productsurvey",
            template: __webpack_require__("./src/app/reports/productsurvey.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__services_report_services__["a" /* ReportService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_4__services_loader_service__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]])
    ], ProductSurveyComponent);
    return ProductSurveyComponent;
}());



/***/ }),

/***/ "./src/app/reports/user-receipts.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-fluid body-content center-block \">\r\n\r\n  <customheader></customheader>\r\n\r\n  <div class=\"container-fluid\" style=\"padding-left:50px\">\r\n    <div class=\"page-content-wrapper\">\r\n      <div class=\"row\">\r\n        <div id=\"page-wrapper\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n              <h1 class=\"page-header\"> Receipt Report</h1>\r\n              <ul class=\"breadcrumb\">\r\n                <li><a [routerLink]=\"['/dashboard']\">Home</a></li>\r\n                <li> <a class=\"active\" [routerLink]=\"['/report']\"> receipt report </a></li>\r\n              </ul>\r\n            </div>\r\n            <!-- /.col-lg-12 -->\r\n          </div>\r\n          <!-- /.row -->\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"well\">\r\n                  <fieldset>\r\n                    <legend>  Receipt Report</legend>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-xs-6\">\r\n                        <h1 class=\"page-title\"></h1>\r\n                      </div>\r\n                      <div class=\"col-xs-6\">\r\n                        <div class=\"page-actions\">\r\n                          <!--<a class=\"btn btn-primary pull-right\"><i class=\"fa fa-plus\"></i>Add Term</a>-->\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"widget\">\r\n                      <!-- Widget title -->\r\n                      <div class=\"widget-head\">\r\n                        <div class=\"pull-right col-md-4\">\r\n                          <div class=\"form-group\">\r\n                            <div class=\"input-group\">\r\n                              <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-search\"></i></div>\r\n                              <input type=\"text\" class=\"form-control\" name=\"searchString\" placeholder=\"Type to search...\" [(ngModel)]=\"searchString\" />\r\n                            </div>\r\n                          </div>\r\n\r\n                        </div>\r\n                        <div class=\"clearfix\"></div>\r\n                      </div>\r\n                      <div class=\"widget-content referrer\" style=\"display: block;\">\r\n\r\n                        <!-- Widget content -->\r\n                        <table class=\"h6 table table-striped table-bordered table-hover\">\r\n                          <thead>\r\n                            <tr>\r\n                              <th>S/N</th>\r\n                              <th>Last Name</th>\r\n                              <th>First Name</th>\r\n                              <!--<th>Point</th>-->\r\n                              <th>Channel</th>\r\n                              <th>Total Amount</th>\r\n                              <th>Entry Date </th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr *ngFor=\"let item of reports | filter : 'LastName' : searchString; let i=index \">\r\n                              <td>{{i + 1 }}</td>\r\n                              <td>{{item.LastName}}</td>\r\n                              <td>{{item.FirstName}}</td>\r\n                              <!--<td>{{item.Point}}</td>-->\r\n                              <td>{{GetEnum(item.Channel)}}</td>\r\n                              <td>{{item.TotalAmount | currency:\"N\":0}}</td>\r\n                              <td>{{item.CreatedDate | date:'mediumDate' }}</td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                        <div *ngIf=\"!hasPage\" style=\"text-align: center; font-size:18px; margin-top:20px;\">\r\n                          <span class=\"text-muted\" style=\"font-size:22px;\">No user point found</span>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-lg-12\" style=\"text-align:right\">\r\n                            <ul class=\"pagination\">\r\n                              <li><a href=\"javascript:void(0)\" style=\"font-size:18px;background-color:aliceblue\" (click)=\"LoadFirstPage()\">&laquo;</a></li>\r\n                              <li *ngFor=\"let p of pageLinks\" style=\"font-size:18px\">\r\n                                <a href=\"javascript:void(0)\" class=\"page-link\" (click)=\"Get(p)\">\r\n                                  {{p + 1}}\r\n                                </a>\r\n                              </li>\r\n                              <li><a href=\"javascript:void(0)\" (click)=\"LoadLastPage()\" style=\"font-size:18px;background-color:aliceblue\">&raquo;</a></li>\r\n                            </ul>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </fieldset>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<footer></footer>\r\n"

/***/ }),

/***/ "./src/app/reports/user-receipts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserReceiptsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_model__ = __webpack_require__("./src/app/shared/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_sequencepage__ = __webpack_require__("./src/app/shared/sequencepage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_report_services__ = __webpack_require__("./src/app/services/report.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserReceiptsComponent = /** @class */ (function () {
    function UserReceiptsComponent(services, router, toastr, vcr, loaderService, http) {
        this.services = services;
        this.router = router;
        this.toastr = toastr;
        this.vcr = vcr;
        this.loaderService = loaderService;
        this.http = http;
        this.pageIndex = 1;
        this.pageSize = 100;
        this.pageLinks = [];
        this.formData = new FormData();
        this.reports = new Array();
        this.report = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["l" /* WalletModel */]();
        this.toastr.setRootViewContainerRef(vcr);
    }
    UserReceiptsComponent.prototype.ngOnInit = function () {
        this.LoadFirstPage();
    };
    UserReceiptsComponent.prototype.ngOnChanges = function (changes) {
        if (changes['products']) {
            // this.products = this.Get(0);
        }
    };
    UserReceiptsComponent.prototype.LoadFirstPage = function () {
        var get = this.Get(0);
        this.hasPage = this.HasNoPage();
        return get;
    };
    UserReceiptsComponent.prototype.LoadLastPage = function () {
        if (this.data) {
            return this.Get((Math.ceil(this.data.SequenceLength / this.pageSize) - 1));
        }
    };
    UserReceiptsComponent.prototype.HasNoPage = function () {
        var result = this.data == null || typeof this.data == 'undefined' || this.data.Page.length == 0;
        return result;
    };
    UserReceiptsComponent.prototype.Get = function (pageIndex) {
        var _this = this;
        var self = this;
        this.loaderService.display(true);
        this.services.GetUserReceipts(pageIndex, this.pageSize).subscribe(function (resp) {
            var _page = resp.Result;
            if (_page.PageSize == 0) {
                //<-- debug stuff
                self.pageLinks = [];
            }
            else {
                self.data = new __WEBPACK_IMPORTED_MODULE_5__shared_sequencepage__["a" /* SequencePage */](_page.Page, _page.SequenceLength, _page.PageSize, _page.PageIndex);
                self.pageLinks = self.data.AdjacentIndexes(2);
                console.log(self.pageLinks);
                self.reports = self.data.Page;
            }
            _this.loaderService.display(false);
            return self.reports;
        }, function (err) {
            self.data = new __WEBPACK_IMPORTED_MODULE_5__shared_sequencepage__["a" /* SequencePage */]([], 0);
            self.pageLinks = self.data.AdjacentIndexes(2);
            //this.toastr.error('Operation failed e.g UnAuthorized or Network Issue');
            _this.loaderService.display(false);
            return self.reports;
        });
        return self.reports;
    };
    UserReceiptsComponent.prototype.onDownload = function (id) {
        this.toastr.success("Operation successful");
    };
    UserReceiptsComponent.prototype.GetEnum = function (id) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__shared_sequencepage__["a" /* SequencePage */])
    ], UserReceiptsComponent.prototype, "data", void 0);
    UserReceiptsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "user-receipts",
            template: __webpack_require__("./src/app/reports/user-receipts.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__services_report_services__["a" /* ReportService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_4__services_loader_service__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]])
    ], UserReceiptsComponent);
    return UserReceiptsComponent;
}());



/***/ }),

/***/ "./src/app/reports/userpointreport.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-fluid body-content center-block \">\r\n\r\n  <customheader></customheader>\r\n\r\n  <div class=\"container-fluid\" style=\"padding-left:50px\">\r\n    <div class=\"page-content-wrapper\">\r\n      <div class=\"row\">\r\n        <div id=\"page-wrapper\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n              <h1 class=\"page-header\">Wallet Report</h1>\r\n              <ul class=\"breadcrumb\">\r\n                <li><a [routerLink]=\"['/dashboard']\">Home</a></li>\r\n                <li> <a class=\"active\" [routerLink]=\"['/report']\">wallet report </a></li>\r\n              </ul>\r\n            </div>\r\n            <!-- /.col-lg-12 -->\r\n          </div>\r\n          <!-- /.row -->\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"well\">\r\n                  <fieldset>\r\n                    <legend>  Wallet Report</legend>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-xs-6\">\r\n                        <h1 class=\"page-title\"></h1>\r\n                      </div>\r\n                      <div class=\"col-xs-6\">\r\n                        <div class=\"page-actions\">\r\n                          <!--<a class=\"btn btn-primary pull-right\"><i class=\"fa fa-plus\"></i>Add Term</a>-->\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"widget\">\r\n                      <!-- Widget title -->\r\n                      <div class=\"widget-head\">\r\n                        <div class=\"pull-right col-md-4\">\r\n                          <div class=\"form-group\">\r\n                            <div class=\"input-group\">\r\n                              <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-search\"></i></div>\r\n                              <input type=\"text\" class=\"form-control\" name=\"searchString\" placeholder=\"Type to search...\" [(ngModel)]=\"searchString\" />\r\n                            </div>\r\n                          </div>\r\n\r\n                        </div>\r\n                        <div class=\"clearfix\"></div>\r\n                      </div>\r\n                      <div class=\"widget-content referrer\" style=\"display: block;\">\r\n                        <!-- Widget content -->\r\n                        <table class=\"h6 table table-striped table-bordered table-hover\">\r\n                          <thead>\r\n                            <tr>\r\n                              <th>S/N</th>\r\n                              <th>Last Name</th>\r\n                              <th>First Name</th>\r\n                              <th>Point</th>\r\n                              <th>Channel</th>\r\n                              <th>Total Amount</th>\r\n                              <th>Entry Date </th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr *ngFor=\"let item of WalletPoints | filter : 'LastName' : searchString; let i=index \">\r\n                              <td>{{i + 1 }}</td>\r\n                              <td>{{item.LastName}}</td>\r\n                              <td>{{item.FirstName}}</td>\r\n                              <td>{{item.Point}}</td>\r\n                              <td>{{GetEnum(item.Channel)}}</td>\r\n                              <td>&#8358;{{item.TotalAmount | currency : \" \":0}}</td>\r\n                              <td>{{item.CreatedDate | date:'mediumDate' }}</td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                        <div *ngIf=\"!hasPage\" style=\"text-align: center; font-size:18px; margin-top:20px;\">\r\n                          <span class=\"text-muted\" style=\"font-size:22px;\">No wallet found</span>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-lg-12\" style=\"text-align:right\">\r\n                            <ul class=\"pagination\">\r\n                              <li><a href=\"javascript:void(0)\" style=\"font-size:18px;background-color:aliceblue\" (click)=\"LoadFirstPage()\">&laquo;</a></li>\r\n                              <li *ngFor=\"let p of pageLinks\" style=\"font-size:18px\">\r\n                                <a href=\"javascript:void(0)\" class=\"page-link\" (click)=\"Get(p)\">\r\n                                  {{p + 1}}\r\n                                </a>\r\n                              </li>\r\n                              <li><a href=\"javascript:void(0)\" (click)=\"LoadLastPage()\" style=\"font-size:18px;background-color:aliceblue\">&raquo;</a></li>\r\n                            </ul>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </fieldset>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<footer></footer>\r\n"

/***/ }),

/***/ "./src/app/reports/userpointreport.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPointComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_model__ = __webpack_require__("./src/app/shared/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_sequencepage__ = __webpack_require__("./src/app/shared/sequencepage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_report_services__ = __webpack_require__("./src/app/services/report.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserPointComponent = /** @class */ (function () {
    function UserPointComponent(services, router, toastr, vcr, loaderService, http) {
        this.services = services;
        this.router = router;
        this.toastr = toastr;
        this.vcr = vcr;
        this.loaderService = loaderService;
        this.http = http;
        this.pageIndex = 1;
        this.pageSize = 100;
        this.pageLinks = [];
        this.WalletPoints = new Array();
        this.formData = new FormData();
        this.walletPoint = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["m" /* WalletPoint */]();
        this.toastr.setRootViewContainerRef(vcr);
    }
    UserPointComponent.prototype.ngOnInit = function () {
        this.LoadFirstPage();
    };
    UserPointComponent.prototype.ngOnChanges = function (changes) {
        if (changes['products']) {
            // this.products = this.Get(0);
        }
    };
    UserPointComponent.prototype.LoadFirstPage = function () {
        var get = this.Get(0);
        this.hasPage = this.HasNoPage();
        return get;
    };
    UserPointComponent.prototype.LoadLastPage = function () {
        if (this.data) {
            return this.Get((Math.ceil(this.data.SequenceLength / this.pageSize) - 1));
        }
    };
    UserPointComponent.prototype.HasNoPage = function () {
        var result = this.data == null || typeof this.data == 'undefined' || this.data.Page.length == 0;
        return result;
    };
    UserPointComponent.prototype.Get = function (pageIndex) {
        var _this = this;
        var self = this;
        this.loaderService.display(true);
        this.services.GetWalletPoints(pageIndex, this.pageSize).subscribe(function (resp) {
            var _page = resp.Result;
            if (_page.PageSize == 0) {
                //<-- debug stuff
                self.pageLinks = [];
            }
            else {
                self.data = new __WEBPACK_IMPORTED_MODULE_5__shared_sequencepage__["a" /* SequencePage */](_page.Page, _page.SequenceLength, _page.PageSize, _page.PageIndex);
                self.pageLinks = self.data.AdjacentIndexes(2);
                console.log(self.pageLinks);
                self.WalletPoints = self.data.Page;
            }
            _this.loaderService.display(false);
            console.log(self.walletPoint);
            return self.walletPoint;
        }, function (err) {
            self.data = new __WEBPACK_IMPORTED_MODULE_5__shared_sequencepage__["a" /* SequencePage */]([], 0);
            self.pageLinks = self.data.AdjacentIndexes(2);
            //this.toastr.error('Operation failed e.g UnAuthorized or Network Issue');
            _this.loaderService.display(false);
            return self.WalletPoints;
        });
        return self.WalletPoints;
    };
    UserPointComponent.prototype.onDownload = function (id) {
        this.toastr.success("Operation successful");
    };
    UserPointComponent.prototype.GetEnum = function (id) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__shared_sequencepage__["a" /* SequencePage */])
    ], UserPointComponent.prototype, "data", void 0);
    UserPointComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "user-point",
            template: __webpack_require__("./src/app/reports/userpointreport.component.html"),
        })
        // Wallet point
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__services_report_services__["a" /* ReportService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_4__services_loader_service__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]])
    ], UserPointComponent);
    return UserPointComponent;
}());



/***/ }),

/***/ "./src/app/reports/userpointsharing.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-fluid body-content center-block \">\r\n\r\n  <customheader></customheader>\r\n\r\n  <div class=\"container-fluid\" style=\"padding-left:50px\">\r\n    <div class=\"page-content-wrapper\">\r\n      <div class=\"row\">\r\n        <div id=\"page-wrapper\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n              <h1 class=\"page-header\"> Shared User Report</h1>\r\n              <ul class=\"breadcrumb\">\r\n                <li><a [routerLink]=\"['/dashboard']\">Home</a></li>\r\n                <li> <a class=\"active\" [routerLink]=\"['/report']\">shared report </a></li>\r\n              </ul>\r\n            </div>\r\n            <!-- /.col-lg-12 -->\r\n          </div>\r\n          <!-- /.row -->\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"well\">\r\n                  <fieldset>\r\n                    <legend> Shared user Report</legend>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-xs-6\">\r\n                        <h1 class=\"page-title\"></h1>\r\n                      </div>\r\n                      <div class=\"col-xs-6\">\r\n                        <div class=\"page-actions\">\r\n                          <!--<a class=\"btn btn-primary pull-right\"><i class=\"fa fa-plus\"></i>Add Term</a>-->\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"widget\">\r\n                      <!-- Widget title -->\r\n                      <div class=\"widget-head\">\r\n                        <div class=\"pull-right col-md-4\">\r\n                          <div class=\"form-group\">\r\n                            <div class=\"input-group\">\r\n                              <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-search\"></i></div>\r\n                              <input type=\"text\" class=\"form-control\" name=\"searchString\" placeholder=\"Type to search...\" [(ngModel)]=\"searchString\" />\r\n                            </div>\r\n                          </div>\r\n\r\n                        </div>\r\n                        <div class=\"clearfix\"></div>\r\n                      </div>\r\n                      <div class=\"widget-content referrer\" style=\"display: block;\">\r\n\r\n                        <!-- Widget content -->\r\n                        <table class=\"h6 table table-striped table-bordered table-hover\">\r\n                          <thead>\r\n                            <tr>\r\n                              <th>S/N</th>\r\n                              <th>Last Name</th>\r\n                              <th>First Name</th>\r\n                              <th>Point</th>\r\n                              <th>Channel</th>\r\n                              <th>Total Amount</th>\r\n                              <th>Entry Date </th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr *ngFor=\"let item of reports | filter : 'LastName' : searchString; let i=index \">\r\n                              <td>{{i + 1 }}</td>\r\n                              <td>{{item.LastName}}</td>\r\n                              <td>{{item.FirstName}}</td>\r\n                              <td>{{item.Point}}</td>\r\n                              <td>{{GetEnum(item.Channel)}}</td>\r\n                              <td>{{item.TotalAmount| currency :\"N\":0}}</td>\r\n                              <td>{{item.CreatedDate | date:'mediumDate' }}</td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                        <div *ngIf=\"!hasPage\" style=\"text-align: center; font-size:18px; margin-top:20px;\">\r\n                          <span class=\"text-muted\" style=\"font-size:22px;\">No user point found</span>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-lg-12\" style=\"text-align:right\">\r\n                            <ul class=\"pagination\">\r\n                              <li><a href=\"javascript:void(0)\" style=\"font-size:18px;background-color:aliceblue\" (click)=\"LoadFirstPage()\">&laquo;</a></li>\r\n                              <li *ngFor=\"let p of pageLinks\" style=\"font-size:18px\">\r\n                                <a href=\"javascript:void(0)\" class=\"page-link\" (click)=\"Get(p)\">\r\n                                  {{p + 1}}\r\n                                </a>\r\n                              </li>\r\n                              <li><a href=\"javascript:void(0)\" (click)=\"LoadLastPage()\" style=\"font-size:18px;background-color:aliceblue\">&raquo;</a></li>\r\n                            </ul>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </fieldset>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<footer></footer>\r\n"

/***/ }),

/***/ "./src/app/reports/userpointsharing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPointSharingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_model__ = __webpack_require__("./src/app/shared/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_sequencepage__ = __webpack_require__("./src/app/shared/sequencepage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_report_services__ = __webpack_require__("./src/app/services/report.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserPointSharingComponent = /** @class */ (function () {
    function UserPointSharingComponent(services, router, toastr, vcr, loaderService, http) {
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
        this.report = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["i" /* UserPointEarnedModel */]();
        this.toastr.setRootViewContainerRef(vcr);
    }
    UserPointSharingComponent.prototype.ngOnInit = function () {
        this.LoadFirstPage();
    };
    UserPointSharingComponent.prototype.ngOnChanges = function (changes) {
        if (changes['products']) {
            // this.products = this.Get(0);
        }
    };
    UserPointSharingComponent.prototype.LoadFirstPage = function () {
        var get = this.Get(0);
        this.hasPage = this.HasNoPage();
        return get;
    };
    UserPointSharingComponent.prototype.LoadLastPage = function () {
        if (this.data) {
            return this.Get((Math.ceil(this.data.SequenceLength / this.pageSize) - 1));
        }
    };
    UserPointSharingComponent.prototype.HasNoPage = function () {
        var result = this.data == null || typeof this.data == 'undefined' || this.data.Page.length == 0;
        return result;
    };
    UserPointSharingComponent.prototype.Get = function (pageIndex) {
        var _this = this;
        var self = this;
        this.loaderService.display(true);
        this.services.GetUserPointViaSharing(pageIndex, this.pageSize).subscribe(function (resp) {
            var _page = resp.Result;
            if (_page.PageSize == 0) {
                //<-- debug stuff
                self.pageLinks = [];
            }
            else {
                self.data = new __WEBPACK_IMPORTED_MODULE_5__shared_sequencepage__["a" /* SequencePage */](_page.Page, _page.SequenceLength, _page.PageSize, _page.PageIndex);
                self.pageLinks = self.data.AdjacentIndexes(2);
                console.log(self.pageLinks);
                self.reports = self.data.Page;
            }
            _this.loaderService.display(false);
            return self.reports;
        }, function (err) {
            self.data = new __WEBPACK_IMPORTED_MODULE_5__shared_sequencepage__["a" /* SequencePage */]([], 0);
            self.pageLinks = self.data.AdjacentIndexes(2);
            //this.toastr.error('Operation failed e.g UnAuthorized or Network Issue');
            _this.loaderService.display(false);
            return self.reports;
        });
        return self.reports;
    };
    UserPointSharingComponent.prototype.onDownload = function (id) {
        this.toastr.success("Operation successful");
    };
    UserPointSharingComponent.prototype.GetEnum = function (id) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__shared_sequencepage__["a" /* SequencePage */])
    ], UserPointSharingComponent.prototype, "data", void 0);
    UserPointSharingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "user-point",
            template: __webpack_require__("./src/app/reports/userpointsharing.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__services_report_services__["a" /* ReportService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_4__services_loader_service__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]])
    ], UserPointSharingComponent);
    return UserPointSharingComponent;
}());



/***/ }),

/***/ "./src/app/reports/watched-video.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-fluid body-content center-block \">\r\n\r\n  <customheader></customheader>\r\n\r\n  <div class=\"container-fluid\" style=\"padding-left:50px\">\r\n    <div class=\"page-content-wrapper\">\r\n      <div class=\"row\">\r\n        <div id=\"page-wrapper\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n              <h1 class=\"page-header\">  Watched Video Report</h1>\r\n              <ul class=\"breadcrumb\">\r\n                <li><a [routerLink]=\"['/dashboard']\">Home</a></li>\r\n                <li> <a class=\"active\" [routerLink]=\"['/report']\">watched report </a></li>\r\n              </ul>\r\n            </div>\r\n            <!-- /.col-lg-12 -->\r\n          </div>\r\n          <!-- /.row -->\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"well\">\r\n                  <fieldset>\r\n                    <legend>  User Sharing Report</legend>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-xs-6\">\r\n                        <h1 class=\"page-title\"></h1>\r\n                      </div>\r\n                      <div class=\"col-xs-6\">\r\n                        <div class=\"page-actions\">\r\n                          <!--<a class=\"btn btn-primary pull-right\"><i class=\"fa fa-plus\"></i>Add Term</a>-->\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"widget\">\r\n                      <!-- Widget title -->\r\n                      <div class=\"widget-head\">\r\n                        <div class=\"pull-right col-md-4\">\r\n                          <div class=\"form-group\">\r\n                            <div class=\"input-group\">\r\n                              <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-search\"></i></div>\r\n                              <input type=\"text\" class=\"form-control\" name=\"searchString\" placeholder=\"Type to search...\" [(ngModel)]=\"searchString\" />\r\n                            </div>\r\n                          </div>\r\n\r\n                        </div>\r\n                        <div class=\"clearfix\"></div>\r\n                      </div>\r\n                      <div class=\"widget-content referrer\" style=\"display: block;\">\r\n\r\n                        <!-- Widget content -->\r\n                        <table class=\"h6 table table-striped table-bordered table-hover\">\r\n                          <thead>\r\n                            <tr>\r\n                              <th>S/N</th>\r\n                              <th>Last Name</th>\r\n                              <th>First Name</th>\r\n                              <th>Point</th>\r\n                              <th>Channel</th>\r\n                              <th>Total Amount</th>\r\n                              <th>Entry Date </th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <tr *ngFor=\"let item of reports | filter : 'LastName' : searchString; let i=index \">\r\n                              <td>{{i + 1 }}</td>\r\n                              <td>{{item.LastName}}</td>\r\n                              <td>{{item.FirstName}}</td>\r\n                              <td>{{item.Point}}</td>\r\n                              <td>{{GetEnum(item.Channel)}}</td>\r\n                              <td>&#8358;{{item.TotalAmount}}</td>\r\n                              <td>{{item.CreatedDate | date:'mediumDate' }}</td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                        <div *ngIf=\"!hasPage\" style=\"text-align: center; font-size:18px; margin-top:20px;\">\r\n                          <span class=\"text-muted\" style=\"font-size:22px;\">No user point found</span>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                          <div class=\"col-lg-12\" style=\"text-align:right\">\r\n                            <ul class=\"pagination\">\r\n                              <li><a href=\"javascript:void(0)\" style=\"font-size:18px;background-color:aliceblue\" (click)=\"LoadFirstPage()\">&laquo;</a></li>\r\n                              <li *ngFor=\"let p of pageLinks\" style=\"font-size:18px\">\r\n                                <a href=\"javascript:void(0)\" class=\"page-link\" (click)=\"Get(p)\">\r\n                                  {{p + 1}}\r\n                                </a>\r\n                              </li>\r\n                              <li><a href=\"javascript:void(0)\" (click)=\"LoadLastPage()\" style=\"font-size:18px;background-color:aliceblue\">&raquo;</a></li>\r\n                            </ul>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </fieldset>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<footer></footer>\r\n"

/***/ }),

/***/ "./src/app/reports/watched-video.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WatchedVideosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_model__ = __webpack_require__("./src/app/shared/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_sequencepage__ = __webpack_require__("./src/app/shared/sequencepage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_report_services__ = __webpack_require__("./src/app/services/report.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var WatchedVideosComponent = /** @class */ (function () {
    function WatchedVideosComponent(services, router, toastr, vcr, loaderService, http) {
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
        this.report = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["i" /* UserPointEarnedModel */]();
        this.toastr.setRootViewContainerRef(vcr);
    }
    WatchedVideosComponent.prototype.ngOnInit = function () {
        this.LoadFirstPage();
    };
    WatchedVideosComponent.prototype.ngOnChanges = function (changes) {
        if (changes['products']) {
            // this.products = this.Get(0);
        }
    };
    WatchedVideosComponent.prototype.LoadFirstPage = function () {
        var get = this.Get(0);
        this.hasPage = this.HasNoPage();
        return get;
    };
    WatchedVideosComponent.prototype.LoadLastPage = function () {
        if (this.data) {
            return this.Get((Math.ceil(this.data.SequenceLength / this.pageSize) - 1));
        }
    };
    WatchedVideosComponent.prototype.HasNoPage = function () {
        var result = this.data == null || typeof this.data == 'undefined' || this.data.Page.length == 0;
        return result;
    };
    WatchedVideosComponent.prototype.Get = function (pageIndex) {
        var _this = this;
        var self = this;
        this.loaderService.display(true);
        this.services.GetUserPointViewatchedVideo(pageIndex, this.pageSize).subscribe(function (resp) {
            var _page = resp.Result;
            if (_page.PageSize == 0) {
                //<-- debug stuff
                self.pageLinks = [];
            }
            else {
                self.data = new __WEBPACK_IMPORTED_MODULE_5__shared_sequencepage__["a" /* SequencePage */](_page.Page, _page.SequenceLength, _page.PageSize, _page.PageIndex);
                self.pageLinks = self.data.AdjacentIndexes(2);
                console.log(self.pageLinks);
                self.reports = self.data.Page;
            }
            _this.loaderService.display(false);
            return self.reports;
        }, function (err) {
            self.data = new __WEBPACK_IMPORTED_MODULE_5__shared_sequencepage__["a" /* SequencePage */]([], 0);
            self.pageLinks = self.data.AdjacentIndexes(2);
            //this.toastr.error('Operation failed e.g UnAuthorized or Network Issue');
            _this.loaderService.display(false);
            return self.reports;
        });
        return self.reports;
    };
    WatchedVideosComponent.prototype.onDownload = function (id) {
        this.toastr.success("Operation successful");
    };
    WatchedVideosComponent.prototype.GetEnum = function (id) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__shared_sequencepage__["a" /* SequencePage */])
    ], WatchedVideosComponent.prototype, "data", void 0);
    WatchedVideosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "watched-video",
            template: __webpack_require__("./src/app/reports/watched-video.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__services_report_services__["a" /* ReportService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_4__services_loader_service__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]])
    ], WatchedVideosComponent);
    return WatchedVideosComponent;
}());



/***/ }),

/***/ "./src/app/services/account.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_model__ = __webpack_require__("./src/app/shared/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__storage_service__ = __webpack_require__("./src/app/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__data_service__ = __webpack_require__("./src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AccountService = /** @class */ (function () {
    function AccountService(data, storage, router) {
        this.data = data;
        this.storage = storage;
        this.router = router;
        this.users = [];
        this.token = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["f" /* Token */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3__storage_service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "./src/app/services/advert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdvertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_service__ = __webpack_require__("./src/app/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("./src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdvertService = /** @class */ (function () {
    function AdvertService(data, storage) {
        this.data = data;
        this.storage = storage;
    }
    AdvertService.prototype.GetAdverts = function (pageIndex, pageSize) {
        var url = "/api/advert/" + pageIndex + "/" + pageSize;
        console.log(url);
        return this.data.Get(url);
    };
    AdvertService.prototype.getAdvert = function () {
        return this.data.Get("/api/advert");
    };
    AdvertService.prototype.AddOrUpdateAdvert = function (advert) {
        var url = "/api/advert";
        var result = this.data.Post(url, advert);
        return result;
    };
    AdvertService.prototype.DeleteAdvert = function (advertId) {
        var url = '/api/advert/' + advertId;
        return this.data.Delete(url);
    };
    AdvertService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */]])
    ], AdvertService);
    return AdvertService;
}());



/***/ }),

/***/ "./src/app/services/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_service__ = __webpack_require__("./src/app/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("./src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoryService = /** @class */ (function () {
    function CategoryService(data, storage) {
        this.data = data;
        this.storage = storage;
        this.categories = new Array();
    }
    CategoryService.prototype.GetCategories = function (pageIndex, pageSize) {
        var url = "/api/category/" + pageIndex + "/" + pageSize;
        var result = this.data.Get(url);
        return result;
    };
    CategoryService.prototype.getCategory = function () {
        return this.data.Get("/api/category");
    };
    CategoryService.prototype.AddOrUpdateCategory = function (category) {
        var url = "/api/category";
        return this.data.Post(url, category);
    };
    CategoryService.prototype.DeleteCategory = function (categoryId) {
        var url = '/api/category/' + categoryId;
        return this.data.Delete(url);
    };
    CategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "./src/app/services/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_service__ = __webpack_require__("./src/app/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("./src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { DashboardService } from '../dashboard/dashboard.component';
var DashboardService = /** @class */ (function () {
    function DashboardService(data, storage) {
        this.data = data;
        this.storage = storage;
    }
    DashboardService.prototype.getDashboard = function () {
        return this.data.Get("/api/dashboard");
    };
    DashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */]])
    ], DashboardService);
    return DashboardService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_model__ = __webpack_require__("./src/app/shared/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__storage_service__ = __webpack_require__("./src/app/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_observable_ErrorObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/ErrorObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular_2_local_storage__ = __webpack_require__("./node_modules/angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angular_2_local_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var DataService = /** @class */ (function () {
    function DataService(http, storage, router, loaderService, localStorageService) {
        this.http = http;
        this.storage = storage;
        this.router = router;
        this.loaderService = loaderService;
        this.localStorageService = localStorageService;
        this.users = [];
        this.token = new __WEBPACK_IMPORTED_MODULE_3__shared_model__["f" /* Token */]();
        //this.toastr.setRootViewContainerRef(vcr);
    }
    DataService.prototype.ngOnInit = function () {
    };
    //public httpOptions = {
    //  headers: new HttpHeaders({
    //    //'Content-Type': 'application/json',
    //    'Authorization': `Bearer ${this.localStorageService.get<Token>(Constants.OAuthTokenKey)}`
    //  })
    //};
    DataService.prototype.Get = function (url, data) {
        var _this = this;
        //const options = term ?
        //  { params: new HttpParams().set('name', term) } : {};
        var _token = this.storage.Token;
        var httpOption = { headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["d" /* HttpHeaders */]({ "Authorization": "Bearer " + _token.token }) };
        this.loaderService.display(true);
        //console.log(httpOption);
        // console.log(url);
        return this.http.get(url, httpOption).pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["b" /* tap */])(// Log the result or error
        function (// Log the result or error
            data) {
            _this.log(url, data);
            _this.loaderService.display(false);
        }, function (error) {
            _this.logError(url, error);
            _this.loaderService.display(false);
        }), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    DataService.prototype.Post = function (url, data) {
        var _this = this;
        var _token = this.storage.Token;
        var httpOption = { headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["d" /* HttpHeaders */]({ "Authorization": "Bearer " + _token.token }) };
        this.loaderService.display(true);
        return this.http.post(url, data, httpOption).pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["b" /* tap */])(// Log the result or error
        function (// Log the result or error
            data) {
            _this.log(url, data);
            _this.loaderService.display(false);
        }, function (error) {
            _this.logError(url, error);
            _this.loaderService.display(false);
        }), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["a" /* catchError */])(this.handleError));
        ;
    };
    DataService.prototype.Put = function (url, data) {
        var _this = this;
        var token = this.storage.Token;
        var httpOption = { headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["d" /* HttpHeaders */]({ "Authorization": "Bearer " + token.token }) };
        this.loaderService.display(true);
        return this.http.put(url, data, httpOption).pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["b" /* tap */])(// Log the result or error
        function (// Log the result or error
            data) {
            _this.log(url, data);
            _this.loaderService.display(false);
        }, function (error) {
            _this.logError(url, error);
            _this.loaderService.display(false);
        }), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["a" /* catchError */])(this.handleError));
        ;
    };
    DataService.prototype.Delete = function (url, data) {
        var _this = this;
        var token = this.storage.Token;
        var httpOption = { headers: new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["d" /* HttpHeaders */]({ "Authorization": "Bearer " + token.token }) };
        this.loaderService.display(true);
        return this.http.delete(url, httpOption).pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["b" /* tap */])(// Log the result or error
        function (// Log the result or error
            data) {
            _this.log(url, data);
            _this.loaderService.display(false);
        }, function (error) {
            _this.logError(url, error);
            _this.loaderService.display(false);
        }), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["a" /* catchError */])(this.handleError));
        ;
    };
    DataService.prototype.GetWithOutToken = function (url, data) {
        var _this = this;
        this.loaderService.display(true);
        return this.http.get(url).pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["b" /* tap */])(// Log the result or error
        function (// Log the result or error
            data) {
            _this.log(url, data);
            _this.loaderService.display(false);
        }, function (error) {
            _this.logError(url, error);
            _this.loaderService.display(false);
        }), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["a" /* catchError */])(this.handleError));
        ;
    };
    DataService.prototype.PostWithOutToken = function (url, data) {
        var _this = this;
        this.loaderService.display(true);
        return this.http.post(url, data).pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["b" /* tap */])(// Log the result or error
        function (// Log the result or error
            data) {
            _this.log(url, data);
            _this.loaderService.display(false);
        }, function (error) {
            _this.logError(url, error);
            _this.loaderService.display(false);
        }), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    DataService.prototype.PostBlob = function (url, blob) {
        var _this = this;
        this.loaderService.display(true);
        return this.http.post(url, { responseType: 'blob' }, blob).pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["b" /* tap */])(// Log the result or error
        function (// Log the result or error
            data) {
            _this.log(url, data);
            _this.loaderService.display(false);
        }, function (error) {
            _this.logError(url, error);
            _this.loaderService.display(false);
        }), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["a" /* catchError */])(this.handleError));
    };
    DataService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            //this.toastr.error('An error occurred:', error.error.message, 'Error');
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            //this.toastr.error(`Backend returned code ${error.status}, ` +
            //  `body was: ${error.error}`, 'Error');
        }
        // return an ErrorObservable with a user-facing error message
        //this.toastr.error('Something bad happened; please try again later.', 'Error');
        return new __WEBPACK_IMPORTED_MODULE_8_rxjs_observable_ErrorObservable__["a" /* ErrorObservable */]('Something bad happened; please try again later.');
    };
    ;
    DataService.prototype._handleError = function (err) {
        var errorMsg = err.message || 'Unable to retrieve data';
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(errorMsg);
    };
    DataService.prototype.log = function (url, data) {
        //console.log(`Http operation was successfully called ${url}`);
    };
    DataService.prototype.logError = function (url, data) {
        console.log("Http operation failed " + url);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__storage_service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_9__loader_service__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_10_angular_2_local_storage__["LocalStorageService"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.status = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
    }
    LoaderService.prototype.display = function (value) {
        this.status.next(value);
    };
    LoaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/app/services/product.services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_service__ = __webpack_require__("./src/app/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("./src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductService = /** @class */ (function () {
    function ProductService(data, storage) {
        this.data = data;
        this.storage = storage;
        this.categories = new Array();
        this.products = new Array();
    }
    ProductService.prototype.GetProducts = function (pageIndex, pageSize) {
        var url = "/api/product/" + pageIndex + "/page/" + pageSize;
        console.log(url);
        return this.data.Get(url);
    };
    ProductService.prototype.getProduct = function () {
        return this.data.Get("/api/product");
    };
    ProductService.prototype.getProductById = function (id) {
        return this.data.Get("/api/product/" + id);
    };
    ProductService.prototype.AddOrUpdateProduct = function (product) {
        var url = "/api/product";
        var result = this.data.Post(url, product);
        return result;
    };
    ProductService.prototype.DeleteProduct = function (productId) {
        var url = '/api/product/' + productId;
        return this.data.Delete(url);
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "./src/app/services/question.services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_service__ = __webpack_require__("./src/app/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("./src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestionService = /** @class */ (function () {
    function QuestionService(data, storage) {
        this.data = data;
        this.storage = storage;
        this.question = new Array();
    }
    QuestionService.prototype.GetQuestionPage = function (pageIndex, pageSize) {
        var url = "/api/question/" + pageIndex + "/" + pageSize;
        console.log(url);
        return this.data.Get(url);
    };
    QuestionService.prototype.getQuestions = function () {
        return this.data.Get("/api/question");
    };
    QuestionService.prototype.getQuestionById = function (id) {
        return this.data.Get("/api/question/" + id);
    };
    QuestionService.prototype.AddOrUpdateQuestion = function (question) {
        var url = "/api/question";
        var result = this.data.Post(url, question);
        return result;
    };
    QuestionService.prototype.DeleteQuestion = function (id) {
        var url = '/api/question/' + id;
        return this.data.Delete(url);
    };
    QuestionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */]])
    ], QuestionService);
    return QuestionService;
}());



/***/ }),

/***/ "./src/app/services/report.services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_service__ = __webpack_require__("./src/app/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("./src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReportService = /** @class */ (function () {
    function ReportService(data, storage) {
        this.data = data;
        this.storage = storage;
        this.question = new Array();
    }
    ReportService.prototype.GetWalletPoints = function (pageIndex, pageSize) {
        var url = "/api/report/" + pageIndex + "/wallet/" + pageSize;
        return this.data.Get(url);
    };
    ReportService.prototype.GetUsers = function (pageIndex, pageSize) {
        var url = "/api/report/" + pageIndex + "/users/" + pageSize;
        return this.data.Get(url);
    };
    ReportService.prototype.GetUserPointViaSharing = function (pageIndex, pageSize) {
        var url = "/api/report/" + pageIndex + "/sharing/" + pageSize;
        return this.data.Get(url);
    };
    ReportService.prototype.GetUserPointViewatchedVideo = function (pageIndex, pageSize) {
        var url = "/api/report/" + pageIndex + "/video/" + pageSize;
        return this.data.Get(url);
    };
    ReportService.prototype.GetUserPointViaProductSurvey = function (pageIndex, pageSize) {
        var url = "/api/report/" + pageIndex + "/survey/" + pageSize;
        return this.data.Get(url);
    };
    ReportService.prototype.GetUserReceipts = function (pageIndex, pageSize) {
        var url = "/api/report/" + pageIndex + "/receipt/" + pageSize;
        return this.data.Get(url);
    };
    ReportService.prototype.GetUserReceiptById = function (id) {
        var url = "/api/receipt/user-receipt/" + id;
        return this.data.Get(url);
    };
    // not a reporting activity . 
    ReportService.prototype.DeleteUserReceiptById = function (id) {
        var url = "/api/receipt/" + id;
        return this.data.Delete(url);
    };
    //user-point
    ReportService.prototype.UpdateUserReceipt = function (model) {
        var url = "/api/receipt/user-point";
        return this.data.Post(url, model);
    };
    ReportService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */]])
    ], ReportService);
    return ReportService;
}());



/***/ }),

/***/ "./src/app/services/storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_Constants__ = __webpack_require__("./src/app/shared/Constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__ = __webpack_require__("./node_modules/angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StorageService = /** @class */ (function () {
    //Gets currently logged in User
    function StorageService(localStorageService) {
        this.localStorageService = localStorageService;
    }
    Object.defineProperty(StorageService.prototype, "User", {
        get: function () {
            if (!this.user) {
                this.user = this.Get(__WEBPACK_IMPORTED_MODULE_1__shared_Constants__["a" /* Constants */].UserKey);
                // this.user = this.localStorageService.get<User>(Constants.UserKey);
            }
            return this.user;
        },
        set: function (user) {
            this.user = user;
            this.Store(__WEBPACK_IMPORTED_MODULE_1__shared_Constants__["a" /* Constants */].UserKey, user);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(StorageService.prototype, "Token", {
        get: function () {
            if (!this.token) {
                this.token = this.Get(__WEBPACK_IMPORTED_MODULE_1__shared_Constants__["a" /* Constants */].OAuthTokenKey);
                //this.token = this.localStorageService.get<Token>(Constants.OAuthTokenKey);
            }
            return this.token;
        },
        set: function (token) {
            this.token = token;
            this.Store(__WEBPACK_IMPORTED_MODULE_1__shared_Constants__["a" /* Constants */].OAuthTokenKey, token);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angular_2_local_storage__["LocalStorageService"]])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/app/services/video.services.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_service__ = __webpack_require__("./src/app/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_service__ = __webpack_require__("./src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VideoService = /** @class */ (function () {
    function VideoService(data, storage) {
        this.data = data;
        this.storage = storage;
        this.Genres = new Array();
        this.Videos = new Array();
    }
    // Genre .. 
    VideoService.prototype.GetGenre = function (pageIndex, pageSize) {
        var url = "/api/video/genre/" + pageIndex + "/" + pageSize;
        console.log(url);
        return this.data.Get(url);
    };
    VideoService.prototype.getGenre = function () {
        return this.data.Get("/api/video/genre");
    };
    VideoService.prototype.getGenreById = function (id) {
        return this.data.Get("/api/video/genre/" + id);
    };
    VideoService.prototype.AddOrUpdateGenre = function (model) {
        var url = "/api/video/genre";
        var result = this.data.Post(url, model);
        return result;
    };
    VideoService.prototype.DeleteGenre = function (id) {
        var url = '/api/video/genre/' + id;
        return this.data.Delete(url);
    };
    // video  ...
    VideoService.prototype.GetVideos = function (pageIndex, pageSize) {
        var url = "/api/video/" + pageIndex + "/" + pageSize;
        console.log(url);
        return this.data.Get(url);
    };
    VideoService.prototype.getVideo = function () {
        return this.data.Get("/api/video");
    };
    VideoService.prototype.getVideoById = function (id) {
        return this.data.Get("/api/video/" + id);
    };
    VideoService.prototype.AddOrUpdateVideo = function (model) {
        var url = "/api/video";
        var result = this.data.Post(url, model);
        return result;
    };
    VideoService.prototype.DeleteVideo = function (id) {
        var url = '/api/video/' + id;
        return this.data.Delete(url);
    };
    VideoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */]])
    ], VideoService);
    return VideoService;
}());



/***/ }),

/***/ "./src/app/shared/Constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
var Constants;
(function (Constants) {
    //constant for fetching authorization from local browser keystore
    Constants.OAuthTokenKey = "jlocker";
    Constants.UserKey = "ShutterCart.User";
    Constants.Web_Address = "";
    Constants.LoginUrl = "/account/index";
    Constants.Roles = {
        Administrator: "Administrator",
        User: "User",
    };
    Constants.AppMonths = {
        January: "January",
        February: "February",
        March: "March",
        April: "April",
        May: "May",
        June: "June",
        July: "July",
        August: "August",
        September: "September",
        October: "October",
        November: "November",
        December: "December"
    };
    Constants.DATE_FMT = 'dd/MMM/yyyy';
    Constants.DATE_TIME_FMT = Constants.DATE_FMT + " hh:mm:ss";
})(Constants || (Constants = {}));


/***/ }),

/***/ "./src/app/shared/customheader.component.html":
/***/ (function(module, exports) {

module.exports = "  <div id=\"wrapper\">\r\n\r\n  <!-- Navigation -->\r\n  <nav class=\"navbar navbar-default navbar-static-top\" role=\"navigation\" style=\"margin-bottom: 0\">\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" [routerLink]=\"['/dashboard']\"><i class=\"fa fa-home\"> </i> NOVACART PORTAL</a>\r\n      <!--navbar navbar-inverse navbar-fixed-bottom-->\r\n    </div>\r\n    <!-- /.navbar-header -->\r\n    <ul class=\"nav navbar-top-links navbar-right\">\r\n      <li class=\"dropdown\">\r\n        <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\r\n          <i class=\"fa fa-user-md\"></i>   &nbsp;  {{firstName}} {{lastName}} &nbsp; <span class=\"caret\"></span>\r\n          <!--<i class=\"fa fa-user fa-fw\"></i> <i class=\"fa fa-caret-down\"></i>-->\r\n        </a>\r\n        <ul class=\"dropdown-menu dropdown-user\">\r\n          <li><a [routerLink]=\"['/profile']\"><i routerLinkActive=\"active\" class=\"fa fa-user-md\">&nbsp; </i>  Profile  </a></li>\r\n          <li class=\"divider\"></li>\r\n          <li>\r\n          <li><a [routerLink]=\"['/logout']\"><i class=\"fa fa-sign-out\">&nbsp; </i>  Sign out </a></li>\r\n        </ul>\r\n        <!-- /.dropdown-user -->\r\n      </li>\r\n    </ul>\r\n\r\n    <!-- /.navbar-top-links -->\r\n\r\n    <div class=\"navbar-default sidebar\" role=\"navigation\">\r\n      <div class=\"sidebar-nav navbar-collapse\">\r\n        <ul class=\"nav\" id=\"side-menu\">\r\n          <li>\r\n            <a [routerLink]=\"['/dashboard']\"><i class=\"fa fa-dashboard fa-fw\"> </i>&nbsp;Dashboard</a>\r\n            <!--<a href=\"index.html\"><i class=\"fa fa-dashboard fa-fw\"></i> Dashboard</a>-->\r\n          </li>\r\n          <li>\r\n            <a href=\"#\"><i class=\"fa fa-gear\"></i>&nbsp;Setup <span class=\"fa arrow\"></span></a>\r\n            <ul class=\"nav nav-second-level\">\r\n              <li>\r\n                <a [routerLink]=\"['/category']\"><i class=\"fa fa-plus\"> </i>&nbsp;Setup Category</a>\r\n              </li>\r\n              <li>\r\n                <a [routerLink]=\"['/product']\"><i class=\"fa fa-plus\"> </i>&nbsp;Setup Product</a>\r\n              </li>\r\n              <li><a [routerLink]=\"['/advert']\"><i class=\"fa fa-plus\"> </i>&nbsp;Create Adverts</a></li>\r\n              <li><a [routerLink]=\"['/question']\"><i class=\"fa fa-plus\"></i>&nbsp;Setup Question</a></li>\r\n              <li><a [routerLink]=\"['/genre']\"><i class=\"fa fa-plus\"> </i>&nbsp; Setup Genre</a></li>\r\n              <li><a [routerLink]=\"['/video-upload']\"><i class=\"fa fa-plus\"> </i>&nbsp;Setup Videos</a></li>\r\n              <li><a [routerLink]=\"['/manualreceipt']\"><i class=\"fa fa-plus\"> </i>&nbsp;Add User Point</a></li>\r\n            </ul>\r\n            <!-- /.nav-second-level -->\r\n          </li>\r\n          <li>\r\n            \r\n            <a href=\"#\"><i class=\"fa fa-user\"></i>&nbsp;Account Setup<span class=\"fa arrow\"></span></a>\r\n            <ul class=\"nav nav-second-level\">\r\n              <li> <a [routerLink]=\"['/create-user']\"><i class=\"fa fa-user-plus\"></i>&nbsp;Create User</a>\r\n              </li>\r\n            </ul>\r\n          </li>\r\n          <li>\r\n            <a href=\"#\"><i class=\"fa fa-search-plus\"></i>&nbsp;Reports<span class=\"fa arrow\"></span></a>\r\n            <ul class=\"nav nav-second-level\">\r\n              <li><a [routerLink]=\"['/wallet-report']\"><i class=\"fa fa-search\"> </i>&nbsp; Wallet Report</a></li>\r\n              <li><a [routerLink]=\"['/registered-users-reports']\"><i class=\"fa fa-search\"> </i>&nbsp; Registered Users</a></li>\r\n              <li><a [routerLink]=\"['/receipt-report']\"><i class=\"fa fa-search\"> </i>&nbsp; Receipts Report</a></li>\r\n              <li><a [routerLink]=\"['/shared-user-report']\"><i class=\"fa fa-search\"> </i>&nbsp; Sharing Point Report</a></li>\r\n              <li><a [routerLink]=\"['/video-watched-report']\"><i class=\"fa fa-search\"> </i>&nbsp; Video Point Report</a></li>\r\n              <li><a [routerLink]=\"['/product-survey-report']\"><i class=\"fa fa-search\"> </i>&nbsp; Survey Report</a></li>\r\n              <!--<li><a [routerLink]=\"['/user-point-report']\"><i class=\"fa fa-check\"> </i>&nbsp; User Point Report</a></li>-->\r\n            </ul>\r\n            <!-- /.nav-second-level -->\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <!-- /.sidebar-collapse -->\r\n    </div>\r\n    <!-- /.navbar-static-side -->\r\n  </nav>\r\n\r\n\r\n  <!-- /#page-wrapper -->\r\n\r\n</div>\r\ns\r\n"

/***/ }),

/***/ "./src/app/shared/customheader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_storage_service__ = __webpack_require__("./src/app/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__ = __webpack_require__("./node_modules/angular-2-local-storage/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomHeaderComponent = /** @class */ (function () {
    function CustomHeaderComponent(loaderService, storage, localStorageService, router) {
        this.loaderService = loaderService;
        this.storage = storage;
        this.localStorageService = localStorageService;
        this.router = router;
    }
    CustomHeaderComponent.prototype.ngOnInit = function () {
        try {
            if (this.storage.User != null) {
                this.firstName = this.storage.User.FirstName;
                this.lastName = this.storage.User.LastName;
            }
        }
        catch (_a) {
            this.storage.Clear();
            this.router.navigate(['/login']);
        }
        //http call starts
        this.loaderService.display(true);
        //http call ends
        this.loaderService.display(false);
    };
    CustomHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'customheader',
            template: __webpack_require__("./src/app/shared/customheader.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_loader_service__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_2__services_storage_service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_3_angular_2_local_storage__["LocalStorageService"], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], CustomHeaderComponent);
    return CustomHeaderComponent;
}());



/***/ }),

/***/ "./src/app/shared/custompipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("./node_modules/lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, field, value) {
        if (!items) {
            return [];
        }
        if (!field || !value) {
            return items;
        }
        return items.filter(function (singleItem) { return __WEBPACK_IMPORTED_MODULE_1_lodash__["includes"](singleItem[field], value); });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filter'
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "./src/app/shared/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"color:white\" align=\"center\" class=\"navbar navbar-inverse navbar-fixed-bottom\">\r\n  &copy; Copyright NovaCart | All right reserved. 2018\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(loaderService) {
        this.loaderService = loaderService;
    }
    FooterComponent.prototype.ngOnInit = function () {
        //http call starts
        this.loaderService.display(true);
        //http call ends
        this.loaderService.display(false);
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'footer',
            template: __webpack_require__("./src/app/shared/footer.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_loader_service__["a" /* LoaderService */]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Token; });
/* unused harmony export Operation */
/* unused harmony export Alert */
/* unused harmony export AlertType */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Product; });
/* unused harmony export Question */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Advert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return UserLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return User; });
/* unused harmony export PasswordChange */
/* unused harmony export UserRole */
/* unused harmony export Role */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return UserQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Genre; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return Video; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return WalletPoint; });
/* unused harmony export PointChannel */
/* unused harmony export Dashboard */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Receipt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return WalletModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return UserPointEarnedModel; });
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

var Operation = /** @class */ (function () {
    function Operation() {
    }
    return Operation;
}());

var Alert = /** @class */ (function () {
    function Alert() {
    }
    return Alert;
}());

var AlertType;
(function (AlertType) {
    AlertType[AlertType["Success"] = 0] = "Success";
    AlertType[AlertType["Error"] = 1] = "Error";
    AlertType[AlertType["Info"] = 2] = "Info";
    AlertType[AlertType["Warning"] = 3] = "Warning";
})(AlertType || (AlertType = {}));
var Category = /** @class */ (function () {
    function Category() {
    }
    return Category;
}());

var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());

var Question = /** @class */ (function () {
    function Question() {
    }
    return Question;
}());

var Advert = /** @class */ (function () {
    function Advert() {
    }
    return Advert;
}());

var UserLogin = /** @class */ (function () {
    function UserLogin() {
    }
    return UserLogin;
}());

var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());

var PasswordChange = /** @class */ (function () {
    function PasswordChange() {
    }
    return PasswordChange;
}());

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

var Role = /** @class */ (function () {
    function Role() {
    }
    return Role;
}());

var UserQuestion = /** @class */ (function () {
    function UserQuestion() {
    }
    return UserQuestion;
}());

var Genre = /** @class */ (function () {
    function Genre() {
    }
    return Genre;
}());

var Video = /** @class */ (function () {
    function Video() {
    }
    return Video;
}());

var WalletPoint = /** @class */ (function () {
    function WalletPoint() {
    }
    return WalletPoint;
}());

var PointChannel;
(function (PointChannel) {
    PointChannel[PointChannel["IsTotalAmount"] = 1] = "IsTotalAmount";
    PointChannel[PointChannel["IsQuestion"] = 2] = "IsQuestion";
    PointChannel[PointChannel["IsProduct"] = 3] = "IsProduct";
    PointChannel[PointChannel["IsVideoWatched"] = 4] = "IsVideoWatched";
    PointChannel[PointChannel["Shared"] = 5] = "Shared";
})(PointChannel || (PointChannel = {}));
var Dashboard = /** @class */ (function () {
    function Dashboard() {
        this.ReceiptModel = new Array();
    }
    return Dashboard;
}());

var Receipt = /** @class */ (function () {
    function Receipt() {
    }
    return Receipt;
}());

var WalletModel = /** @class */ (function () {
    function WalletModel() {
    }
    return WalletModel;
}());

var UserPointEarnedModel = /** @class */ (function () {
    function UserPointEarnedModel() {
    }
    return UserPointEarnedModel;
}());



/***/ }),

/***/ "./src/app/shared/sequencepage.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SequencePage; });
//Class that implements pagination
var SequencePage = /** @class */ (function () {
    function SequencePage(page, sequenceLength, pageSize, pageIndex) {
        this.Page = [];
        if (page == null || pageIndex < 0 || sequenceLength < 0)
            throw "invalid page";
        this.PageIndex = pageIndex || 0;
        this.SequenceLength = sequenceLength;
        this.Page = page;
        this.PageSize = pageSize || page.length;
        this.PageCount = sequenceLength == 0 ? 0 : (Math.floor(this.SequenceLength / this.PageSize) + (this.SequenceLength % this.PageSize > 0 ? 1 : 0));
    }
    /// <summary>
    /// Returns an array containing page indexes for pages immediately adjecent to the current page.
    /// The span indicates how many pages indexes to each side of the current page should be returned
    /// </summary>
    /// <param name="span"></param>
    /// <returns></returns>
    SequencePage.prototype.AdjacentIndexes = function (span) {
        if (span < 0)
            throw 'invalid span: ' + span;
        var fullspan = (span * 2) + 1, start = 0, count = 0;
        if (fullspan >= this.PageCount)
            count = this.PageCount;
        else {
            start = this.PageIndex - span;
            count = fullspan;
            if (start < 0)
                start = 0;
            if ((this.PageIndex + span) >= this.PageCount)
                start = this.PageCount - fullspan;
        }
        var pages = [];
        for (var indx = 0; indx < count; indx++)
            pages.push(indx + start);
        return pages;
    };
    return SequencePage;
}());



/***/ }),

/***/ "./src/app/videos/genre.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-fluid body-content center-block \">\r\n\r\n  <customheader></customheader>\r\n\r\n  <div class=\"container-fluid\" style=\"padding-left:50px\">\r\n    <div class=\"page-content-wrapper\">\r\n      <div class=\"row\">\r\n        <div id=\"page-wrapper\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n              <h1 class=\"page-header\">Setup Genre</h1>\r\n              <ul class=\"breadcrumb\">\r\n                <li><a [routerLink]=\"['/dashboard']\">Home</a></li>\r\n                <li> <a class=\"active\" [routerLink]=\"['/genre']\">Setup Genre</a></li>\r\n              </ul>\r\n            </div>\r\n            <!-- /.col-lg-12 -->\r\n          </div>\r\n          <!-- /.row -->\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-5\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"well\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-xs-12\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"widget\">\r\n                    <!-- Widget title -->\r\n                    <div class=\"widget-head\">\r\n                      <div class=\"clearfix\"></div>\r\n                    </div>\r\n                    <div class=\"widget-content referrer\" style=\"display: block;\">\r\n\r\n                      <form class=\"form-horizontal\" enctype=\"multipart/form-data\">\r\n                        <fieldset>\r\n                          <legend>Add Genre</legend>\r\n\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-3 control-label\">  Genre Name <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-9\">\r\n                              <input type=\"text\" class=\"form-control\" id=\"genre\" name=\"genre\" [(ngModel)]=\"genre.VideoGenre\" placeholder=\"Enter genre \" required>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <div class=\"col-lg-9 col-lg-offset-3\">\r\n                              <button type=\"submit\" class=\"btn btn-primary\" (click)=\"Ok()\"><i class=\"fa fa-save\"> </i> Save </button>\r\n                            </div>\r\n                          </div>\r\n                        </fieldset>\r\n                      </form>\r\n\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-7\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"well\">\r\n                  <fieldset>\r\n                    <legend>  Genre List</legend>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-xs-6\">\r\n                        <h1 class=\"page-title\"></h1>\r\n                      </div>\r\n                      <div class=\"col-xs-6\">\r\n                        <div class=\"page-actions\">\r\n                          <!--<a class=\"btn btn-primary pull-right\"><i class=\"fa fa-plus\"></i>Add Term</a>-->\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"widget\">\r\n                      <!-- Widget title -->\r\n                      <div class=\"widget-head\">\r\n                        <div class=\"pull-right col-md-4\">\r\n                          <div class=\"form-group\">\r\n                            <div class=\"input-group\">\r\n                              <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-search\"></i></div>\r\n                              <input type=\"text\" class=\"form-control\" name=\"searchString\" placeholder=\"Type to search...\" [(ngModel)]=\"searchString\">\r\n                            </div>\r\n                          </div>\r\n\r\n                        </div>\r\n                        <div class=\"clearfix\"></div>\r\n                      </div>\r\n                      <div class=\"widget-content referrer\" style=\"display: block;\">\r\n\r\n                        <!-- Widget content -->\r\n                        <table class=\"h6 table table-striped table-bordered table-hover\">\r\n                          <thead>\r\n                            <tr>\r\n                              <th>S/N</th>\r\n                              <th>Genre Name</th>\r\n                              <th>Action(s)</th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <!--| searchfilter: 'name' : txtFname.value-->\r\n                            <tr *ngFor=\"let item of genres | filter : 'VideoGenre' : searchString; let i=index \">\r\n                              <td>{{i + 1 }}</td>\r\n                              <td>{{item.VideoGenre}}</td>\r\n                              <td>\r\n                                <i><a (click)=\"onUpdate(item.Id)\"><i class=\"fa fa-edit\" style=\"font-size:18px\"></i> </a></i>&nbsp;\r\n                                <i><a (click)=\"onDelete(item.Id)\"><i class=\"fa fa-trash-o\" style=\"font-size:18px;color:red\"></i> </a></i>\r\n                              </td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                        <div *ngIf=\"!hasPage\" style=\"text-align: center; font-size:18px; margin-top:20px;\">\r\n                          <span class=\"text-muted\" style=\"font-size:22px;\">No gebre found</span>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                          <div class=\"col-lg-12\" style=\"text-align:right\">\r\n                            <ul class=\"pagination\">\r\n                              <li><a href=\"javascript:void(0)\" style=\"font-size:18px;background-color:aliceblue\" (click)=\"LoadFirstPage()\">&laquo;</a></li>\r\n                              <li *ngFor=\"let p of pageLinks\" style=\"font-size:18px\">\r\n                                <a href=\"javascript:void(0)\" class=\"page-link\" (click)=\"Get(p)\">\r\n                                  {{p + 1}}\r\n                                </a>\r\n                              </li>\r\n                              <li><a href=\"javascript:void(0)\" (click)=\"LoadLastPage()\" style=\"font-size:18px;background-color:aliceblue\">&raquo;</a></li>\r\n                            </ul>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </fieldset>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <!-- /.row -->\r\n          <!-- /.row -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<footer></footer>\r\n\r\n"

/***/ }),

/***/ "./src/app/videos/genre.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_model__ = __webpack_require__("./src/app/shared/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_sequencepage__ = __webpack_require__("./src/app/shared/sequencepage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_video_services__ = __webpack_require__("./src/app/services/video.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GenreComponent = /** @class */ (function () {
    function GenreComponent(services, router, toastr, vcr, loaderService, http) {
        this.services = services;
        this.router = router;
        this.toastr = toastr;
        this.vcr = vcr;
        this.loaderService = loaderService;
        this.http = http;
        this.genre = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["c" /* Genre */]();
        this.pageIndex = 1;
        this.pageSize = 100;
        this.pageLinks = [];
        this.genres = new Array();
        this.formData = new FormData();
        this.toastr.setRootViewContainerRef(vcr);
    }
    GenreComponent.prototype.ngOnInit = function () {
        this.LoadFirstPage();
    };
    GenreComponent.prototype.ngOnChanges = function (changes) {
        if (changes['genre']) {
            this.genres = this.Get(0);
        }
    };
    GenreComponent.prototype.LoadFirstPage = function () {
        var get = this.Get(0);
        this.hasPage = this.HasNoPage();
        return get;
    };
    GenreComponent.prototype.LoadLastPage = function () {
        if (this.data) {
            return this.Get((Math.ceil(this.data.SequenceLength / this.pageSize) - 1));
        }
    };
    GenreComponent.prototype.HasNoPage = function () {
        var result = this.data == null || typeof this.data == 'undefined' || this.data.Page.length == 0;
        return result;
    };
    GenreComponent.prototype.Get = function (pageIndex) {
        var _this = this;
        var self = this;
        this.loaderService.display(true);
        this.services.GetGenre(pageIndex, this.pageSize).subscribe(function (resp) {
            var _page = resp.Result;
            if (_page.PageSize == 0) {
                //<-- debug stuff
                self.pageLinks = [];
            }
            else {
                self.data = new __WEBPACK_IMPORTED_MODULE_5__shared_sequencepage__["a" /* SequencePage */](_page.Page, _page.SequenceLength, _page.PageSize, _page.PageIndex);
                self.pageLinks = self.data.AdjacentIndexes(2);
                console.log(self.pageLinks);
                self.genres = self.data.Page;
            }
            _this.loaderService.display(false);
            return self.genres;
        }, function (err) {
            self.data = new __WEBPACK_IMPORTED_MODULE_5__shared_sequencepage__["a" /* SequencePage */]([], 0);
            self.pageLinks = self.data.AdjacentIndexes(2);
            //this.toastr.error('Operation failed e.g UnAuthorized or Network Issue');
            _this.loaderService.display(false);
            return self.genres;
        });
        return self.genres;
    };
    GenreComponent.prototype.onUpdate = function (id) {
        var self = this;
        this.services.getGenreById(id).subscribe(function (c) {
            self.genre = c.Result;
            console.log(c.Result);
        });
        //this.product = this.products.filter(c => c.ProductId == id).pop();//.filter(n => this.name = n.Name);
        console.log(self.genre);
        this.router.navigate(['/genre']);
    };
    GenreComponent.prototype.onDelete = function (id) {
        var _this = this;
        var op = confirm('Are you sure?');
        if (op) {
            this.services.DeleteGenre(id).subscribe(function (c) {
                _this.genres = _this.Get(0);
                _this.toastr.success("Operation Successful");
                _this.router.navigate(['/genre']);
            });
        }
    };
    GenreComponent.prototype.onFileChanged = function (files) {
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
    GenreComponent.prototype.onFileUpload = function () {
        var formData = new FormData();
        //for (const file of this.files) {
        //  formData.append(name, file, file.name);
        //}
        //this.http.post('url', formData).subscribe(x => ....);
    };
    GenreComponent.prototype.Ok = function () {
        var self = this;
        if (!this.genre.VideoGenre) {
            this.toastr.error("Error, genre cannot be empty ");
            return;
        }
        this.loaderService.display(true);
        var self = this;
        this.services.AddOrUpdateGenre(self.genre).subscribe(function (c) {
            if (c.Succeeded) {
                self.Get(0);
                self.genre = null;
                // self.genre.VideoGenre = null;
                self.toastr.success('Operation is successful');
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__shared_sequencepage__["a" /* SequencePage */])
    ], GenreComponent.prototype, "data", void 0);
    GenreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "genre",
            template: __webpack_require__("./src/app/videos/genre.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__services_video_services__["a" /* VideoService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_4__services_loader_service__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]])
    ], GenreComponent);
    return GenreComponent;
}());



/***/ }),

/***/ "./src/app/videos/video.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_model__ = __webpack_require__("./src/app/shared/model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_loader_service__ = __webpack_require__("./src/app/services/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_sequencepage__ = __webpack_require__("./src/app/shared/sequencepage.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_video_services__ = __webpack_require__("./src/app/services/video.services.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var VideoComponent = /** @class */ (function () {
    function VideoComponent(services, router, toastr, vcr, loaderService, http) {
        this.services = services;
        this.router = router;
        this.toastr = toastr;
        this.vcr = vcr;
        this.loaderService = loaderService;
        this.http = http;
        this.video = new __WEBPACK_IMPORTED_MODULE_2__shared_model__["k" /* Video */]();
        this.pageIndex = 1;
        this.pageSize = 100;
        this.pageLinks = [];
        this.videos = new Array();
        this.formData = new FormData();
        this.genres = new Array();
        this.toastr.setRootViewContainerRef(vcr);
    }
    VideoComponent.prototype.ngOnInit = function () {
        var self = this;
        this.LoadFirstPage();
        this.services.getGenre().subscribe(function (c) {
            self.genres = c.Result;
        });
    };
    VideoComponent.prototype.ngOnChanges = function (changes) {
        this.videos = this.Get(0);
        if (changes['video']) {
        }
    };
    VideoComponent.prototype.LoadFirstPage = function () {
        var get = this.Get(0);
        this.hasPage = this.HasNoPage();
        return get;
    };
    VideoComponent.prototype.LoadLastPage = function () {
        if (this.data) {
            return this.Get((Math.ceil(this.data.SequenceLength / this.pageSize) - 1));
        }
    };
    VideoComponent.prototype.HasNoPage = function () {
        var result = this.data == null || typeof this.data == 'undefined' || this.data.Page.length == 0;
        return result;
    };
    VideoComponent.prototype.Get = function (pageIndex) {
        var _this = this;
        var self = this;
        this.loaderService.display(true);
        this.services.GetVideos(pageIndex, this.pageSize).subscribe(function (resp) {
            var _page = resp.Result;
            if (_page.PageSize == 0) {
                //<-- debug stuff
                self.pageLinks = [];
            }
            else {
                self.data = new __WEBPACK_IMPORTED_MODULE_5__shared_sequencepage__["a" /* SequencePage */](_page.Page, _page.SequenceLength, _page.PageSize, _page.PageIndex);
                self.pageLinks = self.data.AdjacentIndexes(2);
                console.log(self.pageLinks);
                self.videos = self.data.Page;
            }
            _this.loaderService.display(false);
            return self.videos;
        }, function (err) {
            self.data = new __WEBPACK_IMPORTED_MODULE_5__shared_sequencepage__["a" /* SequencePage */]([], 0);
            self.pageLinks = self.data.AdjacentIndexes(2);
            //this.toastr.error('Operation failed e.g UnAuthorized or Network Issue');
            _this.loaderService.display(false);
            return self.videos;
        });
        return self.videos;
    };
    // @ViewChild("fileInput") fileInput;
    //addFile(): void {
    //  let fi = this.fileInput.nativeElement;
    //  if (fi.files && fi.files[0]) {
    //    let fileToUpload = fi.files[0];
    //    //this.uploadService
    //    //  .upload(fileToUpload)
    //    //  .subscribe(res => {
    //    //    console.log(res);
    //    //  });
    //  }
    //}
    VideoComponent.prototype.onUpdate = function (id) {
        var self = this;
        this.services.getVideoById(id).subscribe(function (c) {
            self.video = c.Result;
            console.log(c.Result);
        });
        //this.product = this.products.filter(c => c.ProductId == id).pop();//.filter(n => this.name = n.Name);
        console.log(self.video);
        this.router.navigate(['/video-upload']);
    };
    VideoComponent.prototype.onDelete = function (id) {
        var _this = this;
        var op = confirm('Are you sure?');
        if (op) {
            this.services.DeleteVideo(id).subscribe(function (c) {
                _this.videos = _this.Get(0);
                _this.toastr.success("Operation Successful");
                _this.router.navigate(['/video-upload']);
            });
        }
    };
    VideoComponent.prototype.onFileChanged = function (files) {
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
    VideoComponent.prototype.Ok = function () {
        var self = this;
        if (!this.video.Author) {
            this.toastr.error("Error, author cannot be empty ");
            return;
        }
        if (!this.video.Title) {
            this.toastr.error("Error, title cannot be empty ");
            return;
        }
        //if (!this.video.Points) {
        //  this.toastr.error("Error, point cannot be empty ");
        //  return;
        //}
        if (!this.video.GenreId) {
            this.toastr.error("Error, please select genre Id ");
            return;
        }
        this.loaderService.display(true);
        var self = this;
        self.services.AddOrUpdateVideo(self.video).subscribe(function (c) {
            if (c.Succeeded) {
                console.log(self.formData);
                var req = new __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["e" /* HttpRequest */]('POST', "api/video/file/" + c.Result.Id, self.formData, {
                    reportProgress: true,
                });
                self.toastr.success('Operation is successful');
                self.http.request(req).subscribe(function (event) {
                    self.videos = self.Get(0);
                    if (event.type === __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["c" /* HttpEventType */].UploadProgress) {
                        self.uploadProgress = Math.round(100 * event.loaded / event.total);
                        // self.product.ProductId = 0;
                        self.loaderService.display(false);
                    }
                    else if (event instanceof __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["f" /* HttpResponse */]) {
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
            self.formData = new FormData();
        }, function (error) {
            self.toastr.error('Operation failed,please check the inputs');
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_5__shared_sequencepage__["a" /* SequencePage */])
    ], VideoComponent.prototype, "data", void 0);
    VideoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "videos",
            template: __webpack_require__("./src/app/videos/videos.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__services_video_services__["a" /* VideoService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_4__services_loader_service__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */]])
    ], VideoComponent);
    return VideoComponent;
}());



/***/ }),

/***/ "./src/app/videos/videos.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-fluid body-content center-block \">\r\n\r\n  <customheader></customheader>\r\n\r\n  <div class=\"container-fluid\" style=\"padding-left:50px\">\r\n    <div class=\"page-content-wrapper\">\r\n      <div class=\"row\">\r\n        <div id=\"page-wrapper\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n              <h1 class=\"page-header\">Setup Video</h1>\r\n              <ul class=\"breadcrumb\">\r\n                <li><a [routerLink]=\"['/dashboard']\">Home</a></li>\r\n                <li> <a class=\"active\" [routerLink]=\"['/video']\">Setup Video</a></li>\r\n              </ul>\r\n            </div>\r\n            <!-- /.col-lg-12 -->\r\n          </div>\r\n          <!-- /.row -->\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-5\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"well\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-xs-12\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"widget\">\r\n                    <!-- Widget title -->\r\n                    <div class=\"widget-head\">\r\n                      <div class=\"clearfix\"></div>\r\n                    </div>\r\n                    <div class=\"widget-content referrer\" style=\"display: block;\">\r\n\r\n                      <form class=\"form-horizontal\" enctype=\"multipart/form-data\">\r\n                        <fieldset>\r\n                          <legend>Add Video</legend>\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-3 control-label\">   Genre <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-9\">\r\n                              <select id=\"GenreId\" name=\"GenreId\" [(ngModel)]=\"video.GenreId\" class=\"form-control\">\r\n                                <option>--select --</option>\r\n                                <option *ngFor=\"let item of genres\" value=\"{{item.Id}}\">{{item.VideoGenre}}</option>\r\n                              </select>\r\n                            </div>\r\n                          </div>\r\n\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-3 control-label\">  Title <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-9\">\r\n                              <input type=\"text\" class=\"form-control\" id=\"Title\" name=\"Title\" [(ngModel)]=\"video.Title\" placeholder=\"Enter title\" required>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-3 control-label\">  Author <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-9\">\r\n                              <input type=\"text\" class=\"form-control\" id=\"Author\" name=\"Author\" [(ngModel)]=\"video.Author\" placeholder=\"Enter Author\" required>\r\n                            </div>\r\n                          </div>\r\n                          <!--<div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-3 control-label\">  Views <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-9\">\r\n                              <input type=\"text\" class=\"form-control\" id=\"Views\" name=\"Views\" [(ngModel)]=\"video.Views\" placeholder=\"Enter Views\" required>\r\n                            </div>\r\n                          </div>-->\r\n                          <!--<div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-3 control-label\">  Thumbnail <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-9\">\r\n                              <input #file2 type=\"file\" multiple (change)=\"onFileChanged(file.files)\" class=\"form-control\" />\r\n                              <span *ngIf=\"uploadProgress2 > 0 && uploadProgress2 < 100\">\r\n                                {{uploadProgress2}}%\r\n                              </span>\r\n\r\n                            </div>\r\n                          </div>-->\r\n                          <div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-3 control-label\"> Video/Thumbnail <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-9\">\r\n                              <!--<input type=\"file\" class=\"form-control\" id=\"VideoUrl\" name=\"VideoUrl\" [(ngModel)]=\"video.VideoUrl\" placeholder=\"Enter Video Url\" required>-->\r\n                              <input #file type=\"file\" multiple (change)=\"onFileChanged(file.files)\" class=\"form-control\" />\r\n                              <span *ngIf=\"uploadProgress > 0 && uploadProgress < 100\">\r\n                                {{uploadProgress}}%\r\n                              </span>\r\n\r\n                            </div>\r\n                          </div>\r\n                          <!--<div class=\"form-group\">\r\n                            <label for=\"select\" class=\"col-lg-3 control-label\"> Points <span style=\"color:red\">*</span> </label>\r\n                            <div class=\"col-lg-9\">\r\n                              <input type=\"text\" class=\"form-control\" id=\"Points\" name=\"Points\" [(ngModel)]=\"video.Points\" placeholder=\"Enter Points\" required>\r\n                            </div>\r\n                          </div>-->\r\n                          <div class=\"form-group\">\r\n                            <div class=\"col-lg-9 col-lg-offset-2\">\r\n                              <button type=\"submit\" class=\"btn btn-primary\" (click)=\"Ok()\"><i class=\"fa fa-save\"> </i> Save </button>\r\n                            </div>\r\n                          </div>\r\n                        </fieldset>\r\n                      </form>\r\n\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-7\">\r\n              <div class=\"col-md-12\">\r\n                <div class=\"well\">\r\n                  <fieldset>\r\n                    <legend>  Video List</legend>\r\n                    <div class=\"row\">\r\n                      <div class=\"col-xs-6\">\r\n                        <h1 class=\"page-title\"></h1>\r\n                      </div>\r\n                      <div class=\"col-xs-6\">\r\n                        <div class=\"page-actions\">\r\n                          <!--<a class=\"btn btn-primary pull-right\"><i class=\"fa fa-plus\"></i>Add Term</a>-->\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"widget\">\r\n                      <!-- Widget title -->\r\n                      <div class=\"widget-head\">\r\n                        <div class=\"pull-right col-md-4\">\r\n                          <div class=\"form-group\">\r\n                            <div class=\"input-group\">\r\n                              <div class=\"input-group-addon\"><i class=\"glyphicon glyphicon-search\"></i></div>\r\n                              <input type=\"text\" class=\"form-control\" name=\"searchString\" placeholder=\"Type to search...\" [(ngModel)]=\"searchString\">\r\n                            </div>\r\n                          </div>\r\n\r\n                        </div>\r\n                        <div class=\"clearfix\"></div>\r\n                      </div>\r\n                      <div class=\"widget-content referrer\" style=\"display: block;\">\r\n\r\n                        <!-- Widget content -->\r\n                        <table class=\"h6 table table-striped table-bordered table-hover\">\r\n                          <thead>\r\n                            <tr>\r\n                              <th>S/N</th>\r\n                              <th>Genre</th>\r\n                              <th>Title</th>\r\n                              <th>Author</th>\r\n                              <th>ThumbNail</th>\r\n                              <!--<th>Video Url </th>\r\n                              <th>Point </th>-->\r\n                              <th>Action(s)</th>\r\n                            </tr>\r\n                          </thead>\r\n                          <tbody>\r\n                            <!--| searchfilter: 'name' : txtFname.value-->\r\n                            <tr *ngFor=\"let item of videos | filter : 'Title' : searchString; let i=index \">\r\n                              <td>{{i + 1 }}</td>\r\n                              <td>{{item.Genre.VideoGenre}}</td>\r\n                              <td>{{item.Title}}</td>\r\n                              <td>{{item.Author}}</td>\r\n                              <td><img src=\"{{item.ThumbNail}}\" alt=\"Video thumbnail\" width=\"100\" height=\"100\" /></td>\r\n                              <!--<td>\r\n                                <a href=\"{{item.VideoUrl}}\" target=\"_blank\"> view</a>\r\n                              </td>\r\n                              <td>{{item.Points}}</td>-->\r\n                              \n\r\n                              <td>\r\n                                \n                                <i><a (click)=\"onUpdate(item.Id)\"><i class=\"fa fa-edit\" style=\"font-size:18px\"></i> </a></i>&nbsp;\r\n                                <i><a (click)=\"onDelete(item.Id)\"><i class=\"fa fa-trash-o\" style=\"font-size:18px;color:red\"></i> </a></i>\r\n                              </td>\r\n                            </tr>\r\n                          </tbody>\r\n                        </table>\r\n                        <div *ngIf=\"!hasPage\" style=\"text-align: center; font-size:18px; margin-top:20px;\">\r\n                          <span class=\"text-muted\" style=\"font-size:22px;\">No video found</span>\r\n                        </div>\r\n\r\n                        <div class=\"row\">\r\n                          <div class=\"col-lg-12\" style=\"text-align:right\">\r\n                            <ul class=\"pagination\">\r\n                              <li><a href=\"javascript:void(0)\" style=\"font-size:18px;background-color:aliceblue\" (click)=\"LoadFirstPage()\">&laquo;</a></li>\r\n                              <li *ngFor=\"let p of pageLinks\" style=\"font-size:18px\">\r\n                                <a href=\"javascript:void(0)\" class=\"page-link\" (click)=\"Get(p)\">\r\n                                  {{p + 1}}\r\n                                </a>\r\n                              </li>\r\n                              <li><a href=\"javascript:void(0)\" (click)=\"LoadLastPage()\" style=\"font-size:18px;background-color:aliceblue\">&raquo;</a></li>\r\n                            </ul>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </fieldset>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <!-- /.row -->\r\n          <!-- /.row -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<footer></footer>\r\n\r\n"

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map