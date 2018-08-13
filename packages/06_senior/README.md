# [senior](https://github.com/eserozvataf/jsmake-libraries)

[![npm version][npm-image]][npm-url]
[![npm download][download-image]][npm-url]
[![dependencies][dep-image]][dep-url]
[![license][license-image]][license-url]


## What is the Senior?

Senior is a lightweight plugin host which allows npm modules to be installed and uninstalled on demand.


## Quick start

Execute `npm install senior` to install senior and its dependencies into your project directory.


## Usage

```js
import Senior from 'senior';

const pmOptions = {
    name: 'myApp',
    modulePrefix: 'myApp-',
    homePath: '',
};

const pm = Senior('npm');

// install plugin from npm
pm.install('myApp-plugin-first', pmOptions);

// executes all installed plugins
pm.loadAll(pmOptions);
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


[npm-image]: https://img.shields.io/npm/v/senior.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/senior
[download-image]: https://img.shields.io/npm/dt/senior.svg?style=flat-square
[dep-image]: https://img.shields.io/david/eserozvataf/senior.svg?style=flat-square
[dep-url]: https://github.com/eserozvataf/jsmake-libraries
[license-image]: https://img.shields.io/npm/l/senior.svg?style=flat-square
[license-url]: https://github.com/eserozvataf/jsmake-libraries/blob/master/06_senior/LICENSE
