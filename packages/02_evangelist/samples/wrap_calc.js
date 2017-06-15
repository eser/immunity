import * as evangelist from '../lib/';

let fnc = () => 5;
fnc = evangelist.wrap(fnc, (next) => next() * 2);
fnc = evangelist.wrap(fnc, (next) => next() + 1);

console.log(`fnc: ${fnc()}`);
