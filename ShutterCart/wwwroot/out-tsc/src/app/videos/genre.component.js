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
var video_services_1 = require("../services/video.services");
var GenreComponent = /** @class */ (function () {
    function GenreComponent(services, router, toastr, vcr, loaderService, http) {
        this.services = services;
        this.router = router;
        this.toastr = toastr;
        this.vcr = vcr;
        this.loaderService = loaderService;
        this.http = http;
        this.genre = new model_1.Genre();
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
                self.data = new sequencepage_1.SequencePage(_page.Page, _page.SequenceLength, _page.PageSize, _page.PageIndex);
                self.pageLinks = self.data.AdjacentIndexes(2);
                console.log(self.pageLinks);
                self.genres = self.data.Page;
            }
            _this.loaderService.display(false);
            return self.genres;
        }, function (err) {
            self.data = new sequencepage_1.SequencePage([], 0);
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
        core_1.Input(),
        __metadata("design:type", sequencepage_1.SequencePage)
    ], GenreComponent.prototype, "data", void 0);
    GenreComponent = __decorate([
        core_1.Component({
            selector: "genre",
            templateUrl: "./genre.component.html",
        }),
        __metadata("design:paramtypes", [video_services_1.VideoService, router_1.Router,
            ng2_toastr_1.ToastsManager, core_1.ViewContainerRef, loader_service_1.LoaderService, http_1.HttpClient])
    ], GenreComponent);
    return GenreComponent;
}());
exports.GenreComponent = GenreComponent;
//# sourceMappingURL=genre.component.js.map