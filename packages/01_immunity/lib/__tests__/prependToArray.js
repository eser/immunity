"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var prependToArray_1 = tslib_1.__importDefault(require("../prependToArray"));
test('prependToArray', function () {
    var arr1 = ['b', 'c'];
    var val1 = 'a';
    var result = prependToArray_1.default(arr1, val1);
    expect(result).not.toBe(arr1);
    expect(result).toEqual(['a', 'b', 'c']);
});
test('prependToArray with generator', function () {
    var gen1 = function () {
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, 'b'];
                case 1:
                    _a.sent();
                    return [4, 'c'];
                case 2:
                    _a.sent();
                    return [2];
            }
        });
    };
    var val1 = 'a';
    var result = prependToArray_1.default(gen1(), val1);
    expect(result).toEqual(['a', 'b', 'c']);
});
//# sourceMappingURL=prependToArray.js.map