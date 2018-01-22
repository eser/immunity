"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toNodeStream(target) {
    return (value) => {
        return new Promise((resolve, reject) => {
            const callback = () => resolve(value);
            const result = target.write(value);
            if (result) {
                target.once('drain', callback);
            }
            else {
                process.nextTick(callback);
            }
        });
    };
}
exports.default = toNodeStream;
//# sourceMappingURL=toNodeStream.js.map