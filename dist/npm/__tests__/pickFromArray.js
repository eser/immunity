"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var pickFromArray_1 = tslib_1.__importDefault(require("../pickFromArray"));
describe('pickFromArray', function () {
    test('basic', function () {
        var arr1 = [1, 2, 3, 4, 5];
        var arr2 = [2, 3, 6];
        var result = pickFromArray_1.default(arr1, arr2);
        expect(result.items).not.toBe(arr1);
        expect(result.items).not.toBe(arr2);
        expect(result.items).toHaveLength(2);
        expect(result.items).toEqual([2, 3]);
        expect(result.rest).not.toBe(arr1);
        expect(result.rest).not.toBe(arr2);
        expect(result.rest).toHaveLength(3);
        expect(result.rest).toEqual([1, 4, 5]);
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
        var arr1 = [2, 3, 6];
        var result = pickFromArray_1.default(gen1(), arr1);
        expect(result.items).not.toBe(arr1);
        expect(result.items).toHaveLength(2);
        expect(result.items).toEqual([2, 3]);
        expect(result.rest).not.toBe(arr1);
        expect(result.rest).toHaveLength(3);
        expect(result.rest).toEqual([1, 4, 5]);
    });
    test('with generator #2', function () {
        var arr1 = [1, 2, 3, 4, 5];
        var gen1 = function gen() {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, 2];
                    case 1:
                        _a.sent();
                        return [4, 3];
                    case 2:
                        _a.sent();
                        return [4, 6];
                    case 3:
                        _a.sent();
                        return [2];
                }
            });
        };
        var result = pickFromArray_1.default(arr1, gen1());
        expect(result.items).not.toBe(arr1);
        expect(result.items).toHaveLength(2);
        expect(result.items).toEqual([2, 3]);
        expect(result.rest).not.toBe(arr1);
        expect(result.rest).toHaveLength(3);
        expect(result.rest).toEqual([1, 4, 5]);
    });
});
//# sourceMappingURL=pickFromArray.js.map