"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
// router .. 
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var login_component_1 = require("./accounts/login.component");
var dashboard_component_1 = require("./dashboard/dashboard.component");
var category_component_1 = require("./category/category.component");
var ng2_toastr_1 = require("ng2-toastr/ng2-toastr");
var animations_1 = require("@angular/platform-browser/animations");
var customheader_component_1 = require("./shared/customheader.component");
var footer_component_1 = require("./shared/footer.component");
var logout_component_1 = require("./accounts/logout.component");
var angular_2_local_storage_1 = require("angular-2-local-storage");
var angular_webstorage_service_1 = require("angular-webstorage-service");
var custompipe_1 = require("./shared/custompipe");
var product_component_1 = require("./Products/product.component");
var advert_component_1 = require("./advert/advert.component");
var question_component_1 = require("./questions/question.component");
var genre_component_1 = require("./videos/genre.component");
var video_component_1 = require("./videos/video.component");
var user_component_1 = require("./accounts/user.component");
var profile_component_1 = require("./accounts/profile.component");
var userpointreport_component_1 = require("./reports/userpointreport.component");
var getusers_component_1 = require("./reports/getusers.component");
var productsurvey_component_1 = require("./reports/productsurvey.component");
var userpointsharing_component_1 = require("./reports/userpointsharing.component");
var user_receipts_component_1 = require("./reports/user-receipts.component");
var watched_video_component_1 = require("./reports/watched-video.component");
var manualreceipt_component_1 = require("./reports/manualreceipt.component");
var category_service_1 = require("./services/category.service");
var data_service_1 = require("./services/data.service");
var account_service_1 = require("./services/account.service");
var storage_service_1 = require("./services/storage.service");
var loader_service_1 = require("./services/loader.service");
var product_services_1 = require("./services/product.services");
var dashboard_service_1 = require("./services/dashboard.service");
var advert_service_1 = require("./services/advert.service");
var question_services_1 = require("./services/question.services");
var video_services_1 = require("./services/video.services");
var report_services_1 = require("./services/report.services");
var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'login', component: login_component_1.Login },
    { path: 'category', component: category_component_1.CategoryComponent },
    { path: 'product', component: product_component_1.ProductComponent },
    { path: 'advert', component: advert_component_1.AdvertComponent },
    { path: 'question', component: question_component_1.QuestionComponent },
    { path: 'genre', component: genre_component_1.GenreComponent },
    { path: 'video-upload', component: video_component_1.VideoComponent },
    { path: 'create-user', component: user_component_1.UserComponent },
    { path: 'profile', component: profile_component_1.ProfileComponent },
    { path: 'wallet-report', component: userpointreport_component_1.UserPointComponent },
    { path: 'registered-users-reports', component: getusers_component_1.GetUserComponent },
    { path: 'product-survey-report', component: productsurvey_component_1.ProductSurveyComponent },
    { path: 'shared-user-report', component: userpointsharing_component_1.UserPointSharingComponent },
    { path: 'receipt-report', component: user_receipts_component_1.UserReceiptsComponent },
    { path: 'video-watched-report', component: watched_video_component_1.WatchedVideosComponent },
    { path: 'manualreceipt', component: manualreceipt_component_1.ManualReceiptComponent },
    { path: 'logout', component: logout_component_1.Logout },
    { path: '**', component: dashboard_component_1.DashboardComponent }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                login_component_1.Login,
                customheader_component_1.CustomHeaderComponent,
                footer_component_1.FooterComponent,
                logout_component_1.Logout,
                category_component_1.CategoryComponent,
                custompipe_1.FilterPipe,
                product_component_1.ProductComponent,
                advert_component_1.AdvertComponent,
                question_component_1.QuestionComponent,
                genre_component_1.GenreComponent,
                video_component_1.VideoComponent,
                user_component_1.UserComponent,
                profile_component_1.ProfileComponent,
                userpointreport_component_1.UserPointComponent,
                getusers_component_1.GetUserComponent,
                productsurvey_component_1.ProductSurveyComponent,
                userpointsharing_component_1.UserPointSharingComponent,
                user_receipts_component_1.UserReceiptsComponent,
                watched_video_component_1.WatchedVideosComponent,
                manualreceipt_component_1.ManualReceiptComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(routes, {
                    useHash: true,
                    enableTracing: false // for debburgin route ..
                }),
                ng2_toastr_1.ToastModule.forRoot(),
                animations_1.BrowserAnimationsModule,
                angular_2_local_storage_1.LocalStorageModule.withConfig({ prefix: 'my-app', storageType: 'localStorage' }),
                angular_webstorage_service_1.StorageServiceModule
            ],
            exports: [
                router_1.RouterModule,
                custompipe_1.FilterPipe
            ],
            providers: [data_service_1.DataService, dashboard_service_1.DashboardService, account_service_1.AccountService, storage_service_1.StorageService,
                loader_service_1.LoaderService, category_service_1.CategoryService, product_services_1.ProductService, advert_service_1.AdvertService, question_services_1.QuestionService,
                video_services_1.VideoService, report_services_1.ReportService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map