"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var mergeArrays_1 = tslib_1.__importDefault(require("../mergeArrays"));
describe('mergeArrays', function () {
    test('basic', function () {
        var arr1 = [1, 2, 3];
        var arr2 = [4, 5];
        var result = mergeArrays_1.default(arr1, arr2);
        expect(result).not.toBe(arr1);
        expect(result).not.toBe(arr2);
        expect(result).toHaveLength(5);
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });
    test('with generator #1', function () {
        var gen1 = function gen() {
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
                        return [2];
                }
            });
        };
        var arr1 = [4, 5];
        var result = mergeArrays_1.default(gen1(), arr1);
        expect(result).not.toBe(arr1);
        expect(result).toHaveLength(5);
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });
    test('with generator #2', function () {
        var arr1 = [1, 2, 3];
        var gen1 = function gen() {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, 4];
                    case 1:
                        _a.sent();
                        return [4, 5];
                    case 2:
                        _a.sent();
                        return [2];
                }
            });
        };
        var result = mergeArrays_1.default(arr1, gen1());
        expect(result).not.toBe(arr1);
        expect(result).toHaveLength(5);
        expect(result).toEqual([1, 2, 3, 4, 5]);
    });
});
//# sourceMappingURL=mergeArrays.js.map