"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function toNodeStream(target) {
    return function (value) {
        return new Promise(function (resolve, reject) {
            var errorCallback = function (err) { return reject(err); };
            target.on('error', errorCallback);
            target.write(value, function () { return resolve(value); });
            target.removeListener('error', errorCallback);
        });
    };
}
exports.default = toNodeStream;
//# sourceMappingURL=toNodeStream.js.map