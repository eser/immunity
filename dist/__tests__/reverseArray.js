"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var reverseArray_1 = tslib_1.__importDefault(require("../reverseArray"));
describe('reverseArray', function () {
    test('basic', function () {
        var arr1 = [1, 2, 3, 4, 5];
        var result = reverseArray_1.default(arr1);
        expect(result).not.toBe(arr1);
        expect(result).toHaveLength(5);
        expect(result).toEqual([5, 4, 3, 2, 1]);
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
        var result = reverseArray_1.default(gen1());
        expect(result).toHaveLength(5);
        expect(result).toEqual([5, 4, 3, 2, 1]);
    });
});
//# sourceMappingURL=reverseArray.js.map