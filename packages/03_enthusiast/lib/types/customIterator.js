"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomIterator = (function () {
    function CustomIterator(nextPointer) {
        this.nextPointer = nextPointer;
    }
    CustomIterator.prototype.next = function () {
        var result = this.nextPointer();
        if (result !== null) {
            return { done: false, value: result };
        }
        return { done: true, value: null };
    };
    CustomIterator.prototype[Symbol.iterator] = function () {
        return this;
    };
    return CustomIterator;
}());
exports.default = CustomIterator;
//# sourceMappingURL=customIterator.js.map