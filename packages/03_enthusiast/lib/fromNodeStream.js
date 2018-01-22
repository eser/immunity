"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const customIterator_1 = require("./types/customIterator");
exports.CustomIterator = customIterator_1.default;
function fromNodeStream(source, size) {
    return new Promise((resolve, reject) => {
        source.on('readable', () => {
            const nextPointer = () => {
                const buffer = source.read(size);
                if (buffer === null) {
                    return null;
                }
                return { type: 'chunk', data: buffer };
            };
            resolve(new customIterator_1.default(nextPointer));
        });
    });
}
exports.default = fromNodeStream;
//# sourceMappingURL=fromNodeStream.js.map