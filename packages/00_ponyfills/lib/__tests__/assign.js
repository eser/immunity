"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var assign_1 = tslib_1.__importDefault(require("../assign"));
test('assign values right to left', function () {
    var obj1 = {};
    var obj2 = { test: true };
    var result = assign_1.default(obj1, obj2);
    expect(result).toBe(obj1);
    expect(result).not.toBe(obj2);
    expect(result).toEqual({ test: true });
});
//# sourceMappingURL=assign.js.map