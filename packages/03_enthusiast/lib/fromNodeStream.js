"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DynamicIterator {
    constructor(source, size) {
        this.source = source;
        this.size = size;
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
exports.DynamicIterator = DynamicIterator;
function fromNodeStream(source, size) {
    return new Promise((resolve, reject) => {
        const dynamicIterator = new DynamicIterator(source, size);
        source.on('readable', () => {
            dynamicIterator.nextPointer = () => {
                const buffer = source.read(size);
                if (buffer === null) {
                    return null;
                }
                return { type: 'chunk', data: buffer };
            };
            resolve(dynamicIterator);
        });
    });
}
exports.default = fromNodeStream;
//# sourceMappingURL=fromNodeStream.js.map