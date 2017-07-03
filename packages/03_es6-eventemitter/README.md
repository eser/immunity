# [ES6-EventEmitter](https://github.com/eserozvataf/jsmake-libraries)

[![npm version][npm-image]][npm-url]
[![npm download][download-image]][npm-url]
[![dependencies][dep-image]][dep-url]
[![license][license-image]][license-url]


## What is the ES6-EventEmitter?

ES6-EventEmitter is an alternative implementation of node.js's event emitter module. While maintaining the same API with node.js version, it also runs on browser environment.


## Quick start

Execute `npm install es6-eventemitter` to install es6-eventemitter and its dependencies into your project directory.


## Usage

```js
import EventEmitter from 'es6-eventemitter';

const events = new EventEmitter();

// subscribe on event 'test'
events.on('test', (value) => { console.log(`event test: ${value}`); });

// invoke event 'test' with parameters
events.emit('test', 'hello world');
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


[npm-image]: https://img.shields.io/npm/v/es6-eventemitter.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/es6-eventemitter
[download-image]: https://img.shields.io/npm/dt/es6-eventemitter.svg?style=flat-square
[dep-image]: https://img.shields.io/david/eserozvataf/es6-eventemitter.svg?style=flat-square
[dep-url]: https://github.com/eserozvataf/jsmake-libraries
[license-image]: https://img.shields.io/npm/l/es6-eventemitter.svg?style=flat-square
[license-url]: https://github.com/eserozvataf/jsmake-libraries/blob/master/03_es6-eventemitter/LICENSE
