# [maester](https://github.com/eserozvataf/jsmake-libraries)

[![npm version][npm-image]][npm-url]
[![npm download][download-image]][npm-url]
[![dependencies][dep-image]][dep-url]
[![license][license-image]][license-url]


## What is the Maester?

This project is designed to take over all exception handling and logging features that a node.js application needs.


## Why Maester?

I like standartization in general concepts like error handling and logging. I have several node.js projects and most of the time I try to keep my code design similar, portable and shareable for applicability to other scenerios. Maester is the one of the products that I have developed with this mindset.

As an exception handling and logging library,

- Delivers base exception and logger classes,
- Provides a logging interface can be called in any module,
- Event-based system can be easily subscribed by other parties,
- Built-in and extensible loggers/appenders can be attached or detached at any time,
- Customizable severity levels,


## Quick start

Execute `npm install maester` to install maester and its dependencies into your project directory.


## Todo List

- FileLogger, RollingFileLogger, StreamLogger etc.
- Message formatters
- Exception formatters

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


[npm-image]: https://img.shields.io/npm/v/maester.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/maester
[download-image]: https://img.shields.io/npm/dt/maester.svg?style=flat-square
[dep-image]: https://img.shields.io/david/eserozvataf/maester.svg?style=flat-square
[dep-url]: https://github.com/eserozvataf/jsmake-libraries
[license-image]: https://img.shields.io/npm/l/maester.svg?style=flat-square
[license-url]: https://github.com/eserozvataf/jsmake-libraries/blob/master/06_maester/LICENSE
