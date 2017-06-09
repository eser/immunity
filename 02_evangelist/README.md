# [evangelist](https://github.com/eserozvataf/jsmake-libraries)

[![npm version][npm-image]][npm-url]
[![npm download][download-image]][npm-url]
[![dependencies][dep-image]][dep-url]
[![license][license-image]][license-url]


## What is the Evangelist?

Evangelist is a JavaScript library which allows you to override or wrap any function with another one.


## Example Usage

```js
import evangelist from 'evangelist';

// wrap - calculator sample
let fnc = () => 5;
fnc = evangelist.wrap(fnc, (next) => next() * 2);
fnc = evangelist.wrap(fnc, (next) => next() + 1);

console.log(`fnc: ${fnc()}`); // outputs: 'fnc: 11'

// pipe - combine sample
const lower = x => x.toLowerCase();
const chars = x => x.replace(/[^\w \-]+/g, '');
const spaces = x => x.split(' ');
const dashes = x => x.join('-');

const slug = evangelist.pipe(lower, chars, spaces, dashes);

const message = slug('Hello World!');

console.log(`slug: ${message}`); // outputs 'slug: hello-world'
```


## Quick start

Execute `npm install evangelist` to install evangelist and its dependencies into your project directory.


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
