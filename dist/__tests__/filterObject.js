"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var filterObject_1 = __importDefault(require("../filterObject"));
describe('filterObject', function () {
    test('basic', function () {
        var obj1 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
        var func1 = function (x) { return x <= 3; };
        var result = filterObject_1.default(obj1, func1);
        expect(result).not.toBe(obj1);
        expect(Object.keys(result)).toHaveLength(3);
        expect(result).toEqual({ a: 1, b: 2, c: 3 });
    });
});
//# sourceMappingURL=filterObject.js.map