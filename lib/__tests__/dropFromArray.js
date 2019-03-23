"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var dropFromArray_1 = tslib_1.__importDefault(require("../dropFromArray"));
describe('dropFromArray', function () {
    test('basic', function () {
        var arr1 = ['a', 'b', 'c'];
        var int1 = 1;
        var result = dropFromArray_1.default(arr1, int1);
        expect(result).not.toBe(arr1);
        expect(result).toHaveLength(2);
        expect(result).toEqual(['b', 'c']);
    });
    test('with generator', function () {
        var gen1 = function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, 'a'];
                    case 1:
                        _a.sent();
                        return [4, 'b'];
                    case 2:
                        _a.sent();
                        return [4, 'c'];
                    case 3:
                        _a.sent();
                        return [2];
                }
            });
        };
        var int1 = 1;
        var result = dropFromArray_1.default(gen1(), int1);
        expect(result).toHaveLength(2);
        expect(result).toEqual(['b', 'c']);
    });
});
//# sourceMappingURL=dropFromArray.js.map