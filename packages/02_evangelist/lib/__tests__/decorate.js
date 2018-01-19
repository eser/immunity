"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const decorate_1 = require("../decorate");
test('decorate', () => {
    let generator = () => 5;
    generator = decorate_1.default(generator, (func) => func() * 2);
    generator = decorate_1.default(generator, (func) => func() + 1);
    const result = generator();
    expect(result).toEqual(11);
});
//# sourceMappingURL=decorate.js.map