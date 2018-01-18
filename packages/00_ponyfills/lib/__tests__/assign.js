"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assign_1 = require("../assign");
test('assign values right to left', () => {
    const obj1 = {};
    const obj2 = { test: true };
    const result = assign_1.default(obj1, obj2);
    expect(result).toBe(obj1);
    expect(result).not.toBe(obj2);
    expect(result).toEqual({ test: true });
});
//# sourceMappingURL=assign.js.map