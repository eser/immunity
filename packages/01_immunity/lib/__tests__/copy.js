"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var copy_1 = tslib_1.__importDefault(require("../copy"));
var dummy = (function () {
    function dummy() {
    }
    return dummy;
}());
test('copy', function () {
    var obj1 = new dummy();
    var result = copy_1.default(obj1);
    expect(result).not.toBe(obj1);
    expect(result).toBeInstanceOf(dummy);
    expect(result).toEqual({});
});
//# sourceMappingURL=copy.js.map