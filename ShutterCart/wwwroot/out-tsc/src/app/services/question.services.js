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
        core_1.Injectable(),
        __metadata("design:paramtypes", [data_service_1.DataService, storage_service_1.StorageService])
    ], QuestionService);
    return QuestionService;
}());
exports.QuestionService = QuestionService;
//# sourceMappingURL=question.services.js.map