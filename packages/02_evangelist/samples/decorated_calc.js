const decorate = require('../lib/decorate').default;

let generator = () => 5;
generator = decorate(generator, (func) => func() * 2);
generator = decorate(generator, (func) => func() + 1);

console.log(`generated: ${generator()}`);
