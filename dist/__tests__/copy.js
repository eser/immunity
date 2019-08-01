"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var copy_1 = __importDefault(require("../copy"));
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