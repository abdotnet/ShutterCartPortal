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
var storage_service_1 = require("../services/storage.service");
var router_1 = require("@angular/router");
var angular_2_local_storage_1 = require("angular-2-local-storage");
var dashboard_service_1 = require("../services/dashboard.service");
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
        core_1.Component({
            selector: "dashboard",
            templateUrl: "./dashboard.component.html",
            styleUrls: ['dashboard.component.css']
        }),
        __metadata("design:paramtypes", [dashboard_service_1.DashboardService, storage_service_1.StorageService, router_1.Router,
            angular_2_local_storage_1.LocalStorageService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map