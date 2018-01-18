"use strict";
const assign = require('../assign').default;
test('copy an object', () => {
    const obj1 = {};
    const obj2 = { test: true };
    const result = assign(obj1, obj2);
    expect(result).toEqual({ test: true });
});
//# sourceMappingURL=assign.js.map