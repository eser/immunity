"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var prependToObject_1 = __importDefault(require("../prependToObject"));
describe('prependToObject', function () {
    test('basic', function () {
        var obj1 = { b: 2, c: 3 };
        var obj2 = { a: 1 };
        var result = prependToObject_1.default(obj1, obj2);
        expect(result).not.toBe(obj1);
        expect(result).not.toBe(obj2);
        expect(result).toEqual({ a: 1, b: 2, c: 3 });
    });
});
//# sourceMappingURL=prependToObject.js.map