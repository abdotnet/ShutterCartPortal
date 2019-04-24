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
require("rxjs/add/operator/map");
var storage_service_1 = require("./storage.service");
var data_service_1 = require("./data.service");
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
        core_1.Injectable(),
        __metadata("design:paramtypes", [data_service_1.DataService, storage_service_1.StorageService])
    ], VideoService);
    return VideoService;
}());
exports.VideoService = VideoService;
//# sourceMappingURL=video.services.js.map