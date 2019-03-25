"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var removeFromArray_1 = tslib_1.__importDefault(require("../removeFromArray"));
describe('removeFromArray', function () {
    test('basic', function () {
        var arr1 = [1, 2, 3, 4, 5];
        var val1 = 2;
        var val2 = 3;
        var result = removeFromArray_1.default(arr1, val1, val2);
        expect(result).not.toBe(arr1);
        expect(result).toHaveLength(3);
        expect(result).toEqual([1, 4, 5]);
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
        var val1 = 2;
        var val2 = 3;
        var result = removeFromArray_1.default(gen1(), val1, val2);
        expect(result).toHaveLength(3);
        expect(result).toEqual([1, 4, 5]);
    });
});
//# sourceMappingURL=removeFromArray.js.map