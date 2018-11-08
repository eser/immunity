"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var splitLastArray_1 = tslib_1.__importDefault(require("../splitLastArray"));
test('splitLastArray', function () {
    var arr1 = [1, 2, 3, 4, 5];
    var val1 = 2;
    var result = splitLastArray_1.default(arr1, val1);
    expect(result.items).not.toBe(arr1);
    expect(result.items).toHaveLength(2);
    expect(result.items).toEqual([4, 5]);
    expect(result.rest).not.toBe(arr1);
    expect(result.rest).toHaveLength(3);
    expect(result.rest).toEqual([1, 2, 3]);
});
//# sourceMappingURL=splitLastArray.js.map