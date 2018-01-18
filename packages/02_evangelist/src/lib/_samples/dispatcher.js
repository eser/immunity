const dispatcher = require('../lib/dispatcher').default;

const initialState = { quarter: 1, year: 2018, sum: 1 };

const actionAdd5 = (state, next) => next({ ...state, sum: state.sum + 5 });
const actionDiv2 = (state, next) => next({ ...state, sum: state.sum / 2 });

dispatcher(initialState, [ actionAdd5, actionDiv2 ])
    .then(state => console.log(`new state is: ${JSON.stringify(state)}`));
