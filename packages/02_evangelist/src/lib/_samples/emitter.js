const emitter = require('../lib/emitter').default;

const subscriberOne = (value) => console.log(`subscriberOne had value ${value}`);
const subscriberTwo = (value) => console.log(`subscriberTwo had value ${value}`);

const events = {
    printToConsole: [ subscriberOne, subscriberTwo ],
};

emitter(events, 'printToConsole', [ 5 ]);
