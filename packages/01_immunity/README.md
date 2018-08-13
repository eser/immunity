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

appends new item(s) to an array or a generator.

```js
import appendToArray from 'immunity/lib/appendToArray';

const source = [ 'a', 'b' ];
const newOne = appendToArray(source, 'c');

// output: Result: ['a','b','c']
console.log(`Result: ${JSON.stringify(newOne)}`);
// output: Is Same: false
console.log(`Is Same: ${source === newOne}`);
```

### appendToObject(source, ...items)

appends new item(s) to an object.

```js
import appendToObject from 'immunity/lib/appendToObject';

const source = { a: 1, b: 2 };
const newOne = appendToObject(source, { c: 3 });

// output: Result: {'a':1,'b':2,'c':3}
console.log(`Result: ${JSON.stringify(newOne)}`);
// output: Is Same: false
console.log(`Is Same: ${source === newOne}`);
```

### copy(source)

copies an instance with its constructor.

```js
import copy from 'immunity/lib/copy';

class dummy {}

const source = new dummy();
const newOne = copy(source);

// output: Result: class dummy {}
console.log('Result:', newOne.constructor);
// output: Is Same: false
console.log(`Is Same: ${source === newOne}`);
```

### dropFromArray(source, number)

skips first n items from an array or a generator.

```js
import dropFromArray from 'immunity/lib/dropFromArray';

const source = [ 'a', 'b', 'c' ];
const newOne = dropFromArray(source, 1);

// output: Result: ['b','c']
console.log(`Result: ${JSON.stringify(newOne)}`);
// output: Is Same: false
console.log(`Is Same: ${source === newOne}`);
```

### dropFromObject(source, number)

skips first n items from an object.

```js
import dropFromObject from 'immunity/lib/dropFromObject';

const source = { a: 1, b: 2, c: 3 };
const newOne = dropFromObject(source, 1);

// output: Result: {'b':2,'c':3}
console.log(`Result: ${JSON.stringify(newOne)}`);
// output: Is Same: false
console.log(`Is Same: ${source === newOne}`);
```

### filterArray(instance, predicate)

returns matching items from an array or a generator.

```js
import filterArray from 'immunity/lib/filterArray';

const source = [ 1, 2, 3, 4, 5 ];
const newOne = filterArray(source, x => x <= 3);

// output: Result: [1,2,3]
console.log(`Result: ${JSON.stringify(newOne)}`);
// output: Is Same: false
console.log(`Is Same: ${source === newOne}`);
```

### filterObject(instance, predicate)

returns matching items from an object.

```js
import filterObject from 'immunity/lib/filterObject';

const source = { a: 1, b: 2, c: 3, d: 4, e: 5 };
const newOne = filterObject(source, x => x <= 3);

// output: Result: {'a':1,'b':2,'c':3}
console.log(`Result: ${JSON.stringify(newOne)}`);
// output: Is Same: false
console.log(`Is Same: ${source === newOne}`);
```

### mapArray(instance, predicate)

creates a new array with the results of calling a provided function on every element in the calling array.

```js
import mapArray from 'immunity/lib/mapArray';

const source = [ 1, 2, 3, 4, 5 ];
const newOne = mapArray(source, x => x - 1);

// output: Result: [0,1,2,3,4]
console.log(`Result: ${JSON.stringify(newOne)}`);
// output: Is Same: false
console.log(`Is Same: ${source === newOne}`);
```

### mapObject(instance, predicate)

creates a new object with the results of calling a provided function on every element in the calling object.

```js
import mapObject from 'immunity/lib/mapObject';

const source = { a: 1, b: 2, c: 3, d: 4, e: 5 };
const newOne = mapObject(source, (value, key) => ({ [key]: value - 1 }));

// output: Result: {'a':0,'b':1,'c':2,'d':3,'e':4}
console.log(`Result: ${JSON.stringify(newOne)}`);
// output: Is Same: false
console.log(`Is Same: ${source === newOne}`);
```

### mergeArrays(...sources)

merges two or more arrays into one.

```js
import mergeArrays from 'immunity/lib/mergeArrays';

const source1 = [ 1, 2, 3 ];
const source2 = [ 4, 5 ];
const newOne = mergeArrays(source1, source2);

// output: Result: [1,2,3,4,5]
console.log(`Result: ${JSON.stringify(newOne)}`);
// output: Is Same: false
console.log(`Is Same: ${source === newOne}`);
```

### mergeObjects(...sources)

merges two or more objects into one.

```js
import mergeObjects from 'immunity/lib/mergeObjects';

const source1 = { a: 1, b: 2, c: 3 };
const source2 = { d: 4, e: 5 };
const newOne = mergeObjects(source1, source2);

// output: Result: {'a':1,'b':2,'c':3,'d':4,'e':5}
console.log(`Result: ${JSON.stringify(newOne)}`);
// output: Is Same: false
console.log(`Is Same: ${source === newOne}`);
```

### pickFromArray(source, items)

returns matching and not matching items from an array or a generator.

```js
import pickFromArray from 'immunity/lib/pickFromArray';

const source = [ 1, 2, 3, 4, 5 ];
const newOne = pickFromArray(source, [ 2, 3, 6 ]);

// output: Result: {'items':[2,3],'rest':[1,4,5]}
console.log(`Result: ${JSON.stringify(newOne)}`);
// output: Is Same: false
console.log(`Is Same: ${source === newOne}`);
```

### pickFromObject(source, keys)

returns matching and not matching items from an object.

```js
import pickFromObject from 'immunity/lib/pickFromObject';

const source = { a: 1, b: 2, c: 3, d: 4, e: 5 };
const newOne = pickFromObject(source, [ 'b', 'c', 'f' ]);

// output: Result: {'items':{'b':2,'c':3},'rest':{'a':1,'d':4,'e':5}}
console.log(`Result: ${JSON.stringify(newOne)}`);
// output: Is Same: false
console.log(`Is Same: ${source === newOne}`);
```

### prependToArray(source, ...items)

prepends new item(s) to an array or a generator.

```js
import prependToArray from 'immunity/lib/prependToArray';

const source = [ 'b', 'c' ];
const newOne = prependToArray(source, 'a');

// output: Result: ['a','b','c']
console.log(`Result: ${JSON.stringify(newOne)}`);
// output: Is Same: false
console.log(`Is Same: ${source === newOne}`);
```

### prependToObject(source, ...items)

prepends new item(s) to an object.

```js
import prependToObject from 'immunity/lib/prependToObject';

const source = { b: 2, c: 3 };
const newOne = prependToObject(source, { a: 1 });

// output: Result: {'a':1,'b':2,'c':3}
console.log(`Result: ${JSON.stringify(newOne)}`);
// output: Is Same: false
console.log(`Is Same: ${source === newOne}`);
```

### removeFirstMatchFromArray(source, predicate)

removes first matching item from an array or a generator.

```js
import removeFirstMatchFromArray from 'immunity/lib/removeFirstMatchFromArray';

const source = [ 1, 5, 2, 3, 4, 5 ];
const newOne = removeFirstMatchFromArray(source, x => x === 5);

// output: Result: [1,2,3,4,5]
console.log(`Result: ${JSON.stringify(newOne)}`);
// output: Is Same: false
console.log(`Is Same: ${source === newOne}`);
```

### removeFirstMatchFromObject(source, predicate)

removes first matching item from an object.

```js
import removeFirstMatchFromObject from 'immunity/lib/removeFirstMatchFromObject';

const source = { a: 1, f: 5, b: 2, c: 3, d: 4, e: 5 };
const newOne = removeFirstMatchFromObject(source, x => x === 5);

// output: Result: {'a':1,'b':2,'c':3,'d':4,'e':5}
console.log(`Result: ${JSON.stringify(newOne)}`);
// output: Is Same: false
console.log(`Is Same: ${source === newOne}`);
```

### removeFromArray(source, ...items)

removes specified item(s) from an array or a generator.

```js
import removeFromArray from 'immunity/lib/removeFromArray';

const source = [ 1, 2, 3, 4, 5 ];
const newOne = removeFromArray(source, 2, 3);

// output: Result: [1,4,5]
console.log(`Result: ${JSON.stringify(newOne)}`);
// output: Is Same: false
console.log(`Is Same: ${source === newOne}`);
```

### removeKeyFromObject(source, ...keys)

removes items with specified key(s) from an object.

```js
import removeKeyFromObject from 'immunity/lib/removeKeyFromObject';

const source = { a: 1, b: 2, c: 3, d: 4, e: 5 };
const newOne = removeKeyFromObject(source, 'b', 'c');

// output: Result: {'a':1,'d':4,'e':5}
console.log(`Result: ${JSON.stringify(newOne)}`);
// output: Is Same: false
console.log(`Is Same: ${source === newOne}`);
```

### removeValueFromObject(source, ...values)

removes items with specified value(s) from an object or a generator.

```js
import removeValueFromObject from 'immunity/lib/removeValueFromObject';

const source = { a: 1, b: 2, c: 3, d: 4, e: 5 };
const newOne = removeValueFromObject(source, 2, 3);

// output: Result: {'a':1,'d':4,'e':5}
console.log(`Result: ${JSON.stringify(newOne)}`);
// output: Is Same: false
console.log(`Is Same: ${source === newOne}`);
```

### reverseArray(source)

reverses an array or a generator content.

```js
import reverseArray from 'immunity/lib/reverseArray';

const source = [ 1, 2, 3, 4, 5 ];
const newOne = reverseArray(source);

// output: Result: [5,4,3,2,1]
console.log(`Result: ${JSON.stringify(newOne)}`);
// output: Is Same: false
console.log(`Is Same: ${source === newOne}`);
```

### reverseObject(source)

reverses an object content.

```js
import reverseObject from 'immunity/lib/reverseObject';

const source = { a: 1, b: 2, c: 3, d: 4, e: 5 };
const newOne = reverseObject(source);

// output: Result: {'e':5,'d':4,'c':3,'b':2,'a':1}
console.log(`Result: ${JSON.stringify(newOne)}`);
// output: Is Same: false
console.log(`Is Same: ${source === newOne}`);
```

### splitArray(source, number)

splits an array or a generator content from specified index.

```js
import splitArray from 'immunity/lib/splitArray';

const source = [ 1, 2, 3, 4, 5 ];
const newOne = splitArray(source, 3);

// output: Result: {'items':[1,2,3],'rest':[4,5]}
console.log(`Result: ${JSON.stringify(newOne)}`);
// output: Is Same: false
console.log(`Is Same: ${source === newOne}`);
```

### splitObject(source, number)

splits an object content from specified index.

```js
import splitObject from 'immunity/lib/splitObject';

const source = { a: 1, b: 2, c: 3, d: 4, e: 5 };
const newOne = splitObject(source, 3);

// output: Result: {'items':{'a':1,'b':2,'c':3},'rest':{'d':4,'e':5}}
console.log(`Result: ${JSON.stringify(newOne)}`);
// output: Is Same: false
console.log(`Is Same: ${source === newOne}`);
```

### takeFromArray(source, number)

takes first n items from an array or a generator.

```js
import takeFromArray from 'immunity/lib/takeFromArray';

const source = [ 'a', 'b', 'c' ];
const newOne = takeFromArray(source, 2);

// output: Result: ['a','b']
console.log(`Result: ${JSON.stringify(newOne)}`);
// output: Is Same: false
console.log(`Is Same: ${source === newOne}`);
```

### takeFromObject(source, number)

takes first n items from an object.

```js
import takeFromObject from 'immunity/lib/takeFromObject';

const source = { a: 1, b: 2, c: 3 };
const newOne = takeFromObject(source, 2);

// output: Result: {'a':1,'b':2}
console.log(`Result: ${JSON.stringify(newOne)}`);
// output: Is Same: false
console.log(`Is Same: ${source === newOne}`);
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


[npm-image]: https://img.shields.io/npm/v/immunity.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/immunity
[download-image]: https://img.shields.io/npm/dt/immunity.svg?style=flat-square
[dep-image]: https://img.shields.io/david/eserozvataf/immunity.svg?style=flat-square
[dep-url]: https://github.com/eserozvataf/jsmake-libraries
[license-image]: https://img.shields.io/npm/l/immunity.svg?style=flat-square
[license-url]: https://github.com/eserozvataf/jsmake-libraries/blob/master/01_immunity/LICENSE
