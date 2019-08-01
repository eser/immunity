"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var appendToObject_1 = __importDefault(require("../appendToObject"));
describe('appendToObject', function () {
    test('basic', function () {
        var obj1 = { a: 1, b: 2 };
        var obj2 = { c: 3 };
        var result = appendToObject_1.default(obj1, obj2);
        expect(result).not.toBe(obj1);
        expect(result).not.toBe(obj2);
        expect(result).toEqual({ a: 1, b: 2, c: 3 });
    });
});
//# sourceMappingURL=appendToObject.js.map