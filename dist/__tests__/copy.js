"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var copy_1 = tslib_1.__importDefault(require("../copy"));
var Dummy = (function () {
    function Dummy(prop) {
        this.prop = prop;
    }
    return Dummy;
}());
describe('copy', function () {
    test('basic', function () {
        var obj1 = new Dummy({ value: 5 });
        var result = copy_1.default(obj1);
        expect(result).not.toBe(obj1);
        expect(result).toBeInstanceOf(Dummy);
        expect(result).toEqual({ prop: { value: 5 } });
    });
});
//# sourceMappingURL=copy.js.map