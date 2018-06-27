"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toNodeStream(target) {
    return function (value) {
        return new Promise(function (resolve, reject) {
            var callback = function () { return resolve(value); };
            var result = target.write(value);
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