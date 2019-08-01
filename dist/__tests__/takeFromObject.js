"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var takeFromObject_1 = __importDefault(require("../takeFromObject"));
describe('takeFromObject', function () {
    test('basic', function () {
        var obj1 = { a: 1, b: 2, c: 3 };
        var int1 = 2;
        var result = takeFromObject_1.default(obj1, int1);
        expect(result).not.toBe(obj1);
        expect(Object.keys(result)).toHaveLength(2);
        expect(result).toEqual({ a: 1, b: 2 });
    });
});
//# sourceMappingURL=takeFromObject.js.map