"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const iterate_1 = require("../iterate");
const compose_1 = require("../compose");
test('iterate', async () => {
    const gen1 = function* () {
        yield 1;
        yield 2;
        yield 3;
    };
    let total = 0;
    const func1 = x => { total += x; };
    const result = await iterate_1.default(gen1(), func1);
    expect(total).toEqual(6);
});
test('iterate async', async () => {
    const delay = (ms, value) => new Promise((resolve, reject) => {
        setTimeout(() => resolve(value), ms);
    });
    const gen1 = function* () {
        yield 1;
        yield 2;
        yield 3;
    };
    let total = 0;
    const func1 = async function (x) {
        total += await delay(10, x);
    };
    const result = await iterate_1.default(gen1(), func1);
    expect(total).toEqual(6);
});
test('iterate with compose', async () => {
    const gen1 = function* () {
        yield { value: 1 };
        yield { value: 2 };
        yield { value: 3 };
    };
    let total = 0;
    const getValue = x => Promise.resolve(x.value);
    const add5 = async (value) => await value + 5;
    const sumWithTotal = async (value) => { total += await value; };
    const result = await iterate_1.default(gen1(), compose_1.default(getValue, add5, sumWithTotal));
    expect(total).toEqual(21);
});
//# sourceMappingURL=iterate.js.map