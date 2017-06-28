# [ponyfills](https://github.com/eserozvataf/jsmake-libraries)

[![npm version][npm-image]][npm-url]
[![npm download][download-image]][npm-url]
[![dependencies][dep-image]][dep-url]
[![license][license-image]][license-url]


## What is the Ponyfills?

Ponyfills provides a set of modules exports native versions or their alternate implementations if native ones are not available.

For example, to ensure Object.assign's availability:

```
import { assign } from 'polyfills';

const test = assign({}, { test: true });

console.log(`Result: ${test}`);
console.log(`Is Native: ${assign == Object.assign}`);
```


## Quick start

Execute `npm install ponyfills` to install ponyfills and its dependencies into your project directory.


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


[npm-image]: https://img.shields.io/npm/v/ponyfills.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/ponyfills
[download-image]: https://img.shields.io/npm/dt/ponyfills.svg?style=flat-square
[dep-image]: https://img.shields.io/david/eserozvataf/ponyfills.svg?style=flat-square
[dep-url]: https://github.com/eserozvataf/jsmake-libraries
[license-image]: https://img.shields.io/npm/l/ponyfills.svg?style=flat-square
[license-url]: https://github.com/eserozvataf/jsmake-libraries/blob/master/00_ponyfills/LICENSE