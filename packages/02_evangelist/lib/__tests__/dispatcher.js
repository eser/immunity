"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dispatcher_1 = require("../dispatcher");
test('dispatcher', async () => {
    const initialState = { quarter: 1, year: 2018, sum: 1 };
    const actionAdd5 = (state, next) => next(Object.assign({}, state, { sum: state.sum + 5 }));
    const actionDiv2 = (state, next) => next(Object.assign({}, state, { sum: state.sum / 2 }));
    const result = await dispatcher_1.default(initialState, [actionAdd5, actionDiv2]);
    expect(result).toEqual({ quarter: 1, year: 2018, sum: 3 });
});
//# sourceMappingURL=dispatcher.js.map