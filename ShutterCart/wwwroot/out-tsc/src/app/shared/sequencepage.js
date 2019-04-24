"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Class that implements pagination
var SequencePage = /** @class */ (function () {
    function SequencePage(page, sequenceLength, pageSize, pageIndex) {
        this.Page = [];
        if (page == null || pageIndex < 0 || sequenceLength < 0)
            throw "invalid page";
        this.PageIndex = pageIndex || 0;
        this.SequenceLength = sequenceLength;
        this.Page = page;
        this.PageSize = pageSize || page.length;
        this.PageCount = sequenceLength == 0 ? 0 : (Math.floor(this.SequenceLength / this.PageSize) + (this.SequenceLength % this.PageSize > 0 ? 1 : 0));
    }
    /// <summary>
    /// Returns an array containing page indexes for pages immediately adjecent to the current page.
    /// The span indicates how many pages indexes to each side of the current page should be returned
    /// </summary>
    /// <param name="span"></param>
    /// <returns></returns>
    SequencePage.prototype.AdjacentIndexes = function (span) {
        if (span < 0)
            throw 'invalid span: ' + span;
        var fullspan = (span * 2) + 1, start = 0, count = 0;
        if (fullspan >= this.PageCount)
            count = this.PageCount;
        else {
            start = this.PageIndex - span;
            count = fullspan;
            if (start < 0)
                start = 0;
            if ((this.PageIndex + span) >= this.PageCount)
                start = this.PageCount - fullspan;
        }
        var pages = [];
        for (var indx = 0; indx < count; indx++)
            pages.push(indx + start);
        return pages;
    };
    return SequencePage;
}());
exports.SequencePage = SequencePage;
//# sourceMappingURL=sequencepage.js.map