"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PagedList = /** @class */ (function () {
    function PagedList(list, itemsPerPage) {
        if (itemsPerPage === void 0) { itemsPerPage = 10; }
        this.page = 1;
        this.itemsPerPage = itemsPerPage;
        this.Bind(list);
    }
    PagedList.prototype.Bind = function (list) {
        var _this = this;
        this.list = list;
        this.list.Count().subscribe(function (i) {
            _this.count = i;
            _this.numOfPages = Math.floor(i / _this.itemsPerPage);
            if (i % _this.itemsPerPage > 0)
                _this.numOfPages++;
        });
        this.Fetch();
    };
    PagedList.prototype.NextPage = function () {
        if (this.page < this.numOfPages) {
            this.page++;
            this.Fetch();
        }
    };
    PagedList.prototype.CurrentPage = function () {
        return this.page;
    };
    PagedList.prototype.previousPage = function () {
        if (this.page > 1) {
            this.page--;
            this.Fetch();
        }
    };
    PagedList.prototype.Goto = function (page) {
        if (page > 0 && page <= this.numOfPages) {
            this.page = page;
            this.Fetch();
        }
    };
    PagedList.prototype.Count = function () {
        return this.count;
    };
    PagedList.prototype.Pages = function () {
        return this.numOfPages;
    };
    PagedList.prototype.Items = function () {
        return this.items;
    };
    PagedList.prototype.ItemsPerPage = function () {
        return this.itemsPerPage;
    };
    PagedList.prototype.Fetch = function () {
        var _this = this;
        this.list.Slice((this.page - 1) * this.itemsPerPage, this.itemsPerPage).subscribe(function (i) { return _this.items = i; });
    };
    return PagedList;
}());
exports.PagedList = PagedList;
//# sourceMappingURL=paging.js.map