"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CustomIterator {
    constructor(nextPointer) {
        this.nextPointer = nextPointer;
    }
    next() {
        const result = this.nextPointer();
        if (result !== null) {
            return { done: false, value: result };
        }
        return { done: true, value: null };
    }
    [Symbol.iterator]() {
        return this;
    }
}
exports.default = CustomIterator;
//# sourceMappingURL=customIterator.js.map