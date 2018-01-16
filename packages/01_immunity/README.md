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


## Usage of modules

### appendToArray(source, ...items)

For example, to append a new item to an existing array:

```js
import appendToArray from 'immunity/lib/appendToArray';

const source = [ 'a', 'b' ];
const newOne = appendToArray(source, 'c');

console.log(`Result: ${newOne}`);
console.log(`Is Same: ${source === newOne}`);
```

### appendToObject(source, ...items)

Will be documented

### copy(source)

Will be documented

### dropFromArray(source, number)

Will be documented

### dropFromObject(source, number)

Will be documented

### filterArray(instance, predicate)

Will be documented

### filterObject(instance, predicate)

Will be documented

### mergeArrays(...sources)

Will be documented

### mergeObjects(...sources)

Will be documented

### pickFromArray(source, items)

Will be documented

### pickFromObject(source, keys)

Will be documented

### prependToArray(source, ...items)

Will be documented

### prependToObject(source, ...items)

Will be documented

### removeFirstMatchFromArray(source, predicate)

Will be documented

### removeFirstMatchFromObject(source, predicate)

Will be documented

### removeFromArray(source, ...items)

Will be documented

### removeKeyFromObject(source, ...keys)

Will be documented

### removeValueFromObject(source, ...values)

Will be documented

### reverseArray(source)

Will be documented

### reverseObject(source)

Will be documented

### splitArray(source, number)

Will be documented

### splitObject(source, number)

Will be documented

### takeFromArray(source, number)

Will be documented

### takeFromObject(source, number)

Will be documented


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
