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
var question_services_1 = require("../services/question.services");
var QuestionComponent = /** @class */ (function () {
    function QuestionComponent(services, router, toastr, vcr, loaderService, http) {
        this.services = services;
        this.router = router;
        this.toastr = toastr;
        this.vcr = vcr;
        this.loaderService = loaderService;
        this.http = http;
        this.product = new model_1.Product();
        this.pageIndex = 1;
        this.pageSize = 100;
        this.pageLinks = [];
        this.questions = new Array();
        this.formData = new FormData();
        this.question = new model_1.UserQuestion();
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
                self.data = new sequencepage_1.SequencePage(_page.Page, _page.SequenceLength, _page.PageSize, _page.PageIndex);
                self.pageLinks = self.data.AdjacentIndexes(2);
                console.log(self.pageLinks);
                self.questions = self.data.Page;
                return self.questions;
            }
            _this.loaderService.display(false);
        }, function (err) {
            self.data = new sequencepage_1.SequencePage([], 0);
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
                self.question = new model_1.UserQuestion();
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
        core_1.Input(),
        __metadata("design:type", sequencepage_1.SequencePage)
    ], QuestionComponent.prototype, "data", void 0);
    QuestionComponent = __decorate([
        core_1.Component({
            selector: "question",
            templateUrl: "./question.component.html",
        }),
        __metadata("design:paramtypes", [question_services_1.QuestionService, router_1.Router,
            ng2_toastr_1.ToastsManager, core_1.ViewContainerRef, loader_service_1.LoaderService, http_1.HttpClient])
    ], QuestionComponent);
    return QuestionComponent;
}());
exports.QuestionComponent = QuestionComponent;
//# sourceMappingURL=question.component.js.map