"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function pathNotation(sourceObj, targetPath, defaultValue, delimiter) {
    if (delimiter === void 0) { delimiter = '.'; }
    var targetPath_ = targetPath.split(delimiter);
    var sourceObj_ = sourceObj;
    while (targetPath_.length > 0) {
        var property = targetPath_.shift();
        if (property === undefined || !(property in sourceObj_)) {
            return defaultValue;
        }
        sourceObj_ = sourceObj_[property];
    }
    return sourceObj_;
}
exports.default = pathNotation;
//# sourceMappingURL=pathNotation.js.map