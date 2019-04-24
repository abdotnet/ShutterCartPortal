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
var loader_service_1 = require("../services/loader.service");
var storage_service_1 = require("../services/storage.service");
var angular_2_local_storage_1 = require("angular-2-local-storage");
var router_1 = require("@angular/router");
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
        core_1.Component({
            selector: 'customheader',
            templateUrl: './customheader.component.html'
        }),
        __metadata("design:paramtypes", [loader_service_1.LoaderService, storage_service_1.StorageService, angular_2_local_storage_1.LocalStorageService, router_1.Router])
    ], CustomHeaderComponent);
    return CustomHeaderComponent;
}());
exports.CustomHeaderComponent = CustomHeaderComponent;
//# sourceMappingURL=customheader.component.js.map