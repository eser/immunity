"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const emitter_1 = require("../emitter");
test('emitter', async () => {
    let sideEffectCounter = 0;
    const subscriberOne = (value) => sideEffectCounter += value;
    const subscriberTwo = (value) => sideEffectCounter += value * 2;
    const events = {
        calculate: [subscriberOne, subscriberTwo],
    };
    const result = await emitter_1.default(events, 'calculate', [5]);
    expect(sideEffectCounter).toEqual(15);
});
//# sourceMappingURL=emitter.js.map