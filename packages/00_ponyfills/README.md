# [ponyfills](https://github.com/eserozvataf/jsmake-libraries)

[![npm version][npm-image]][npm-url]
[![npm download][download-image]][npm-url]
[![dependencies][dep-image]][dep-url]
[![license][license-image]][license-url]


## What is the Ponyfills?

Ponyfills provides a set of modules, which work natively in modern node.js runtime and modern browsers, however, it needs extra fallback code in order to run in some environments.

It simply tests the availability of native functionality first, then delivers the closest/best alternative implementation if native ones are not available.

Compared to its alternatives, ponyfills doesn't assign its modules anywhere or doesn't patch anything in the runtime environment. Instead, it just delivers the required functionality with ES6 modules or commonjs.

Plus, as a library, Ponyfills is completely tree-shanking-friendly. Your favorite module bundler can easily inline the functionality you need with no extra configuration, instead of bundling the whole Ponyfills package.


## Quick start

Execute `npm install ponyfills` to install ponyfills and its dependencies into your project directory.


## Usage of modules

### assign(target, ...sources) (Object.assign)

The `assign` method is used to copy the values of all enumerable own properties from one or more source objects to a target object. It will return the target object. (Source: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign))

For example, to ensure Object.assign will be work:

```js
import assign from 'ponyfills/lib/assign';

const test = assign({}, { test: true });

console.log(`Result: ${test}`);
console.log(`Is Native: ${assign === Object.assign}`);
```

Alternative usage I:

```js
import { assign } from 'ponyfills';

const test = ponyfills.assign({}, { test: true });
```

Alternative usage II:

```js
import * as ponyfills from 'ponyfills';

const test = assign({}, { test: true });
```


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
