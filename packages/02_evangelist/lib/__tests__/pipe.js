"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pipe_1 = require("../pipe");
test('pipe', () => {
    const lower = x => x.toLowerCase();
    const chars = x => x.replace(/[^\w \-]+/g, '');
    const spaces = x => x.split(' ');
    const dashes = x => x.join('-');
    const slug = pipe_1.default(lower, chars, spaces, dashes);
    const result = slug('Hello World!');
    expect(result).toEqual('hello-world');
});
//# sourceMappingURL=pipe.js.map