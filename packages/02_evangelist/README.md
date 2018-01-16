# [evangelist](https://github.com/eserozvataf/jsmake-libraries)

[![npm version][npm-image]][npm-url]
[![npm download][download-image]][npm-url]
[![dependencies][dep-image]][dep-url]
[![license][license-image]][license-url]


## What is the Evangelist?

Evangelist is a modern JavaScript utility belt consists of reusable helper functions.

Plus, as a library, Evangelist is completely tree-shanking-friendly. Your favorite module bundler can easily inline the functionality you need with no extra configuration, instead of bundling the whole Evangelist package.


## Quick start

Execute `npm install evangelist` to install evangelist and its dependencies into your project directory.


## Usage

```js
import { decorate } from 'evangelist';

// decorate - calculator sample
let generator = () => 5;
generator = decorate(generator, (func) => func() * 2);
generator = decorate(generator, (func) => func() + 1);

console.log(`generated: ${generator()}`); // outputs: 'generated: 11'
```

```js
import { dispatcher } from 'evangelist';

// dispatcher - state sample
const add5 = (state, next) => next({ sum: state.sum + 5 });
const add4 = (state, next) => next({ sum: state.sum + 4 });

const state = dispatcher({ sum: 1 }, add5, add4);

console.log(`new state is: ${JSON.stringify(state)}`); // outputs 'new state is: {"sum":10}'
```

```js
import { pipe } from 'evangelist';

// pipe - combine sample
const lower = x => x.toLowerCase();
const chars = x => x.replace(/[^\w \-]+/g, '');
const spaces = x => x.split(' ');
const dashes = x => x.join('-');

const slug = pipe(lower, chars, spaces, dashes);

const message = slug('Hello World!');

console.log(`slug: ${message}`); // outputs 'slug: hello-world'
```


## List of modules

- decorate
- dispatch
- pipe


## Todo List

See [GitHub Projects](https://github.com/eserozvataf/jsmake-libraries/projects) for more.


## Requirements

* node.js (https://nodejs.org/)


## License

Apache 2.0, for further details, please see [LICENSE](LICENSE) file


## Contributing

See [contributors.md](contributors.md)

It is publicly open for any contribution. Bugfixes, new features and extra modules are welcome.

* To contribute to code: Fork the repo, push your changes to your fork, and submit a pull request.
* To report a bug: If something does not work, please report it using [GitHub Issues](https://github.com/eserozvataf/jsmake-libraries/issues).


## To Support

[Visit my patreon profile at patreon.com/eserozvataf](https://www.patreon.com/eserozvataf)


[npm-image]: https://img.shields.io/npm/v/evangelist.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/evangelist
[download-image]: https://img.shields.io/npm/dt/evangelist.svg?style=flat-square
[dep-image]: https://img.shields.io/david/eserozvataf/evangelist.svg?style=flat-square
[dep-url]: https://github.com/eserozvataf/jsmake-libraries
[license-image]: https://img.shields.io/npm/l/evangelist.svg?style=flat-square
[license-url]: https://github.com/eserozvataf/jsmake-libraries/blob/master/02_evangelist/LICENSE
