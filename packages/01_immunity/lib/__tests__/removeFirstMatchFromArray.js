"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var removeFirstMatchFromArray_1 = tslib_1.__importDefault(require("../removeFirstMatchFromArray"));
test('removeFirstMatchFromArray', function () {
    var arr1 = [1, 5, 2, 3, 4, 5];
    var func1 = function (x) { return x === 5; };
    var result = removeFirstMatchFromArray_1.default(arr1, func1);
    expect(result).not.toBe(arr1);
    expect(result).toHaveLength(5);
    expect(result).toEqual([1, 2, 3, 4, 5]);
});
test('removeFirstMatchFromArray with generator', function () {
    var gen1 = function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, 1];
                case 1:
                    _a.sent();
                    return [4, 5];
                case 2:
                    _a.sent();
                    return [4, 2];
                case 3:
                    _a.sent();
                    return [4, 3];
                case 4:
                    _a.sent();
                    return [4, 4];
                case 5:
                    _a.sent();
                    return [4, 5];
                case 6:
                    _a.sent();
                    return [2];
            }
        });
    };
    var func1 = function (x) { return x === 5; };
    var result = removeFirstMatchFromArray_1.default(gen1(), func1);
    expect(result).toHaveLength(5);
    expect(result).toEqual([1, 2, 3, 4, 5]);
});
//# sourceMappingURL=removeFirstMatchFromArray.js.map