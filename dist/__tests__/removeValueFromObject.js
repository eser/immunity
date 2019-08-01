"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var removeValueFromObject_1 = __importDefault(require("../removeValueFromObject"));
describe('removeValueFromObject', function () {
    test('basic', function () {
        var arr1 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
        var val1 = 2;
        var val2 = 3;
        var result = removeValueFromObject_1.default(arr1, val1, val2);
        expect(result).not.toBe(arr1);
        expect(Object.keys(result)).toHaveLength(3);
        expect(result).toEqual({ a: 1, d: 4, e: 5 });
    });
});
//# sourceMappingURL=removeValueFromObject.js.map