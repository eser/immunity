const pipe = require('../lib/pipe').default;

const lower = x => x.toLowerCase();
const chars = x => x.replace(/[^\w \-]+/g, '');
const spaces = x => x.split(' ');
const dashes = x => x.join('-');

const slug = pipe(lower, chars, spaces, dashes);

const message = slug('Hello World!');

console.log(`slug: ${message}`);
