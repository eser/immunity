"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const copy_1 = require("../copy");
class dummy {
}
test('copy', () => {
    const obj1 = new dummy();
    const result = copy_1.default(obj1);
    expect(result).not.toBe(obj1);
    expect(result).toBeInstanceOf(dummy);
    expect(result).toEqual({});
});
//# sourceMappingURL=copy.js.map