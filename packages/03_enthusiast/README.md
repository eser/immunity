# [enthusiast](https://github.com/eserozvataf/jsmake-libraries)

[![npm version][npm-image]][npm-url]
[![npm download][download-image]][npm-url]
[![dependencies][dep-image]][dep-url]
[![license][license-image]][license-url]


## What is the Enthusiast?

Enthusiast is a stream library implementation that utilizes generator functions to make streams work in functional way.

Additionally, as a library, Enthusiast is completely tree-shanking-friendly. Your favorite module bundler can easily inline the functionality you need with no extra configuration, instead of bundling the whole Enthusiast package.


## Quick start

Execute `npm install enthusiast` to install enthusiast and its dependencies into your project directory.


## Usage of modules

### Reading a stream

```js
import fromNodeStream from 'enthusiast/lib/fromNodeStream';
import iterate from 'evangelist/lib/iterate';
import * as fs from 'fs';

iterate(
    // open file and read 512 bytes buffer on each generator call
    fromNodeStream(fs.createReadStream('./test.txt'), 512),
    item => {
        console.log(item.data.toString('utf8'));
    },
);
```

### Writing to a stream

```js
import toNodeStream from 'enthusiast/lib/toNodeStream';
import compose from 'evangelist/lib/compose';
import * as fs from 'fs';

const logFormatter = (logEntry) => `${Date.now()} ${logEntry}\n`;

const writeLog = compose(
    logFormatter,
    toNodeStream(fs.createWriteStream(‘./logFile’)),
);

writeLog('a sample log entry');
```

### Transforming a stream

```js
import fromNodeStream from 'enthusiast/lib/fromNodeStream';
import toNodeStream from 'enthusiast/lib/toNodeStream';
import iterate from 'evangelist/lib/iterate';
import compose from 'evangelist/lib/compose';
import * as fs from 'fs';

iterate(
    // open file and read 512 bytes buffer on each generator call
    fromNodeStream(fs.createReadStream('./test.txt'), 512),
    compose(
        gzip(),
        toNodeStream(fs.createWriteStream('./test.txt.gz')),
    ),
);
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


[npm-image]: https://img.shields.io/npm/v/enthusiast.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/enthusiast
[download-image]: https://img.shields.io/npm/dt/enthusiast.svg?style=flat-square
[dep-image]: https://img.shields.io/david/eserozvataf/enthusiast.svg?style=flat-square
[dep-url]: https://github.com/eserozvataf/jsmake-libraries
[license-image]: https://img.shields.io/npm/l/enthusiast.svg?style=flat-square
[license-url]: https://github.com/eserozvataf/jsmake-libraries/blob/master/04_enthusiast/LICENSE
