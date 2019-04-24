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
var VideoComponent = /** @class */ (function () {
    function VideoComponent(services, router, toastr, vcr, loaderService, http) {
        this.services = services;
        this.router = router;
        this.toastr = toastr;
        this.vcr = vcr;
        this.loaderService = loaderService;
        this.http = http;
        this.video = new model_1.Video();
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
                self.data = new sequencepage_1.SequencePage(_page.Page, _page.SequenceLength, _page.PageSize, _page.PageIndex);
                self.pageLinks = self.data.AdjacentIndexes(2);
                console.log(self.pageLinks);
                self.videos = self.data.Page;
            }
            _this.loaderService.display(false);
            return self.videos;
        }, function (err) {
            self.data = new sequencepage_1.SequencePage([], 0);
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
                var req = new http_1.HttpRequest('POST', "api/video/file/" + c.Result.Id, self.formData, {
                    reportProgress: true,
                });
                self.toastr.success('Operation is successful');
                self.http.request(req).subscribe(function (event) {
                    self.videos = self.Get(0);
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
            self.formData = new FormData();
        }, function (error) {
            self.toastr.error('Operation failed,please check the inputs');
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", sequencepage_1.SequencePage)
    ], VideoComponent.prototype, "data", void 0);
    VideoComponent = __decorate([
        core_1.Component({
            selector: "videos",
            templateUrl: "./videos.component.html",
        }),
        __metadata("design:paramtypes", [video_services_1.VideoService, router_1.Router,
            ng2_toastr_1.ToastsManager, core_1.ViewContainerRef, loader_service_1.LoaderService, http_1.HttpClient])
    ], VideoComponent);
    return VideoComponent;
}());
exports.VideoComponent = VideoComponent;
//# sourceMappingURL=video.component.js.map