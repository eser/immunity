# [immunity](https://github.com/eserozvataf/jsmake-libraries)

[![npm version][npm-image]][npm-url]
[![npm download][download-image]][npm-url]
[![dependencies][dep-image]][dep-url]
[![license][license-image]][license-url]


## What is the Immunity?

Immunity is a set of helper methods in order to construct a new version of data without mutating/updating existing data structure in-place.

Compared to its alternatives, immunity only provides utility functions instead of delivering new data types/structures as a solution.

Additionally, as a library, Immunity is completely tree-shanking-friendly. Your favorite module bundler can easily inline the functionality you need with no extra configuration, instead of bundling the whole Immunity package.


## Quick start

Execute `npm install immunity` to install immunity and its dependencies into your project directory.


## Usage

For example, to append a new item to an existing array:

```js
import { appendToArray } from 'immunity';

const source = [ 'a', 'b' ];
const newOne = appendToArray(source, 'c');

console.log(`Result: ${newOne}`);
console.log(`Is Same: ${source === newOne}`);
```

Alternative usage I:

```js
import * as immunity from 'immunity';

const source = [ 'a', 'b' ];
const newOne = immunity.appendToArray(source, 'c');
```

Alternative usage II:

```js
import appendToArray from 'immunity/lib/appendToArray';

const source = [ 'a', 'b' ];
const newOne = appendToArray(source, 'c');
```


## List of modules

- appendToArray
- appendToObject
- copy
- dropFromArray
- dropFromObject
- filterArray
- filterObject
- mergeArrays
- mergeObjects
- pickFromArray
- pickFromObject
- prependToArray
- prependToObject
- removeFirstMatchFromArray
- removeFirstMatchFromObject
- removeFromArray
- removeKeyFromObject
- removeValueFromObject
- reverseArray
- reverseObject
- splitArray
- splitObject
- takeFromArray
- takeFromObject


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


[npm-image]: https://img.shields.io/npm/v/immunity.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/immunity
[download-image]: https://img.shields.io/npm/dt/immunity.svg?style=flat-square
[dep-image]: https://img.shields.io/david/eserozvataf/immunity.svg?style=flat-square
[dep-url]: https://github.com/eserozvataf/jsmake-libraries
[license-image]: https://img.shields.io/npm/l/immunity.svg?style=flat-square
[license-url]: https://github.com/eserozvataf/jsmake-libraries/blob/master/01_immunity/LICENSE
