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
        core_1.Injectable(),
        __metadata("design:paramtypes", [data_service_1.DataService, storage_service_1.StorageService])
    ], ReportService);
    return ReportService;
}());
exports.ReportService = ReportService;
//# sourceMappingURL=report.services.js.map