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
var rxjs_1 = require("rxjs");
require("rxjs/add/operator/map");
var model_1 = require("../shared/model");
var http_1 = require("@angular/common/http");
var storage_service_1 = require("./storage.service");
var router_1 = require("@angular/router");
var operators_1 = require("rxjs/operators");
var ErrorObservable_1 = require("rxjs/observable/ErrorObservable");
var loader_service_1 = require("./loader.service");
var angular_2_local_storage_1 = require("angular-2-local-storage");
var DataService = /** @class */ (function () {
    function DataService(http, storage, router, loaderService, localStorageService) {
        this.http = http;
        this.storage = storage;
        this.router = router;
        this.loaderService = loaderService;
        this.localStorageService = localStorageService;
        this.users = [];
        this.token = new model_1.Token();
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
        var httpOption = { headers: new http_1.HttpHeaders({ "Authorization": "Bearer " + _token.token }) };
        this.loaderService.display(true);
        //console.log(httpOption);
        // console.log(url);
        return this.http.get(url, httpOption).pipe(operators_1.tap(// Log the result or error
        function (// Log the result or error
            data) {
            _this.log(url, data);
            _this.loaderService.display(false);
        }, function (error) {
            _this.logError(url, error);
            _this.loaderService.display(false);
        }), operators_1.catchError(this.handleError));
    };
    DataService.prototype.Post = function (url, data) {
        var _this = this;
        var _token = this.storage.Token;
        var httpOption = { headers: new http_1.HttpHeaders({ "Authorization": "Bearer " + _token.token }) };
        this.loaderService.display(true);
        return this.http.post(url, data, httpOption).pipe(operators_1.tap(// Log the result or error
        function (// Log the result or error
            data) {
            _this.log(url, data);
            _this.loaderService.display(false);
        }, function (error) {
            _this.logError(url, error);
            _this.loaderService.display(false);
        }), operators_1.catchError(this.handleError));
        ;
    };
    DataService.prototype.Put = function (url, data) {
        var _this = this;
        var token = this.storage.Token;
        var httpOption = { headers: new http_1.HttpHeaders({ "Authorization": "Bearer " + token.token }) };
        this.loaderService.display(true);
        return this.http.put(url, data, httpOption).pipe(operators_1.tap(// Log the result or error
        function (// Log the result or error
            data) {
            _this.log(url, data);
            _this.loaderService.display(false);
        }, function (error) {
            _this.logError(url, error);
            _this.loaderService.display(false);
        }), operators_1.catchError(this.handleError));
        ;
    };
    DataService.prototype.Delete = function (url, data) {
        var _this = this;
        var token = this.storage.Token;
        var httpOption = { headers: new http_1.HttpHeaders({ "Authorization": "Bearer " + token.token }) };
        this.loaderService.display(true);
        return this.http.delete(url, httpOption).pipe(operators_1.tap(// Log the result or error
        function (// Log the result or error
            data) {
            _this.log(url, data);
            _this.loaderService.display(false);
        }, function (error) {
            _this.logError(url, error);
            _this.loaderService.display(false);
        }), operators_1.catchError(this.handleError));
        ;
    };
    DataService.prototype.GetWithOutToken = function (url, data) {
        var _this = this;
        this.loaderService.display(true);
        return this.http.get(url).pipe(operators_1.tap(// Log the result or error
        function (// Log the result or error
            data) {
            _this.log(url, data);
            _this.loaderService.display(false);
        }, function (error) {
            _this.logError(url, error);
            _this.loaderService.display(false);
        }), operators_1.catchError(this.handleError));
        ;
    };
    DataService.prototype.PostWithOutToken = function (url, data) {
        var _this = this;
        this.loaderService.display(true);
        return this.http.post(url, data).pipe(operators_1.tap(// Log the result or error
        function (// Log the result or error
            data) {
            _this.log(url, data);
            _this.loaderService.display(false);
        }, function (error) {
            _this.logError(url, error);
            _this.loaderService.display(false);
        }), operators_1.catchError(this.handleError));
    };
    DataService.prototype.PostBlob = function (url, blob) {
        var _this = this;
        this.loaderService.display(true);
        return this.http.post(url, { responseType: 'blob' }, blob).pipe(operators_1.tap(// Log the result or error
        function (// Log the result or error
            data) {
            _this.log(url, data);
            _this.loaderService.display(false);
        }, function (error) {
            _this.logError(url, error);
            _this.loaderService.display(false);
        }), operators_1.catchError(this.handleError));
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
        return new ErrorObservable_1.ErrorObservable('Something bad happened; please try again later.');
    };
    ;
    DataService.prototype._handleError = function (err) {
        var errorMsg = err.message || 'Unable to retrieve data';
        return rxjs_1.Observable.throw(errorMsg);
    };
    DataService.prototype.log = function (url, data) {
        //console.log(`Http operation was successfully called ${url}`);
    };
    DataService.prototype.logError = function (url, data) {
        console.log("Http operation failed " + url);
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient, storage_service_1.StorageService, router_1.Router,
            loader_service_1.LoaderService, angular_2_local_storage_1.LocalStorageService])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map