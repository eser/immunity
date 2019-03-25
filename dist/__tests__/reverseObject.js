"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var reverseObject_1 = tslib_1.__importDefault(require("../reverseObject"));
describe('reverseObject', function () {
    test('basic', function () {
        var obj1 = { a: 1, b: 2, c: 3, d: 4, e: 5 };
        var result = reverseObject_1.default(obj1);
        expect(result).not.toBe(obj1);
        expect(Object.keys(result)).toHaveLength(5);
        expect(result).toEqual({ e: 5, d: 4, c: 3, b: 2, a: 1 });
    });
});
//# sourceMappingURL=reverseObject.js.map