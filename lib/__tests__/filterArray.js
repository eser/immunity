"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var filterArray_1 = tslib_1.__importDefault(require("../filterArray"));
describe('filterArray', function () {
    test('basic', function () {
        var arr1 = [1, 2, 3, 4, 5];
        var func1 = function (x) { return x <= 3; };
        var result = filterArray_1.default(arr1, func1);
        expect(result).not.toBe(arr1);
        expect(result).toHaveLength(3);
        expect(result).toEqual([1, 2, 3]);
    });
    test('with generator', function () {
        var gen1 = function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, 1];
                    case 1:
                        _a.sent();
                        return [4, 2];
                    case 2:
                        _a.sent();
                        return [4, 3];
                    case 3:
                        _a.sent();
                        return [4, 4];
                    case 4:
                        _a.sent();
                        return [4, 5];
                    case 5:
                        _a.sent();
                        return [2];
                }
            });
        };
        var func1 = function (x) { return x <= 3; };
        var result = filterArray_1.default(gen1(), func1);
        expect(result).toHaveLength(3);
        expect(result).toEqual([1, 2, 3]);
    });
});
//# sourceMappingURL=filterArray.js.map