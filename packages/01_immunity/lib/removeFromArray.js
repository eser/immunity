"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function removeFromArray(instance, ...values) {
    return instance.filter((item) => values.indexOf(item) === -1);
}
exports.removeFromArray = removeFromArray;
;
exports.default = removeFromArray;
//# sourceMappingURL=removeFromArray.js.map