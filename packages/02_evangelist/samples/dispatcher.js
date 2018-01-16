const dispatcher = require('../lib/dispatcher').default;

const add5 = (state, next) => next({ sum: state.sum + 5 });
const add4 = (state, next) => next({ sum: state.sum + 4 });

const state = dispatcher({ sum: 1 }, add5, add4);

console.log(`new state is: ${JSON.stringify(state)}`);
