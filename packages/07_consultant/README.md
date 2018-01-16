# [consultant](https://github.com/eserozvataf/jsmake-libraries)

[![npm version][npm-image]][npm-url]
[![npm download][download-image]][npm-url]
[![dependencies][dep-image]][dep-url]
[![license][license-image]][license-url]


## What is the Consultant?

Consultant is a JavaScript library which allows you gathering options from various sources such as command line, optstring or interactive menu.

Provides:

- Well-defined input model for operations require parameters.
- Declerative approach.
- Multiple methods for getting parameter (or options)
    - Parsing command line input like `cmd --parameter=value --option1 --option2`.
    - Interactive command line user interface to getting options directly from user.
- Prepares an help output based on model definition.


## Quick start

Execute `npm install consultant` to install consultant and its dependencies into your project directory.


## Usage

```js
import { Consultant } from 'consultant';

const rules = {
    label: 'sample menu',
    children: {
        plugins: {
            type: Consultant.types.command,
            aliases: [ 'p' ],
            id: 'plugins',
            label: 'Plugin commands',
            description: 'Add/list plugins',

            children: {
                add: {
                    type: Consultant.types.command,
                    id: 'plugins-add',
                    label: 'Add',
                    description: 'Adds a plugin'
                },
                repo: {
                    type: Consultant.types.stringParameter,
                    label: 'Repo',
                    description: 'Specifies repo address',
                    'default': 'http://github.com/eserozvataf/',
                    min: 0,
                    max: 1
                }
            }
        },
        makefile: {
            type: Consultant.types.stringParameter,
            aliases: [ 'f' ],
            label: 'Makefile',
            description: 'Load tasks from FILE',
            parameter: 'FILE',
            'default': [ 'makefile.js' ],
            min: 0,
            max: undefined,
            validate: (value) => value.length >= 3 || 'minimum 3 chars required'
        },
        tasks: {
            type: Consultant.types.booleanParameter,
            aliases: [ 't' ],
            label: 'Tasks',
            description: 'Lists defined tasks',
            'default': false
        },
        verbosity: {
            type: Consultant.types.stringParameter,
            label: 'Verbosity',
            description: 'Sets verbosity of log messages [debug, warn, info, error]',
            'default': 'info',
            values: [ 'debug', 'warn', 'info', 'error' ],
            min: 0,
            max: 1
        },
        version: {
            type: Consultant.types.booleanParameter,
            aliases: [ 'v' ],
            label: 'Version',
            description: 'Displays the jsmake version',
            'default': false
        },
        help: {
            type: Consultant.types.booleanParameter,
            aliases: [ 'h', '?' ],
            label: 'Help',
            description: 'Displays this help message',
            'default': false
        }
    }
};

const params = new Consultant(rules);

// string parsing
const input1 = await params.fromString('plugins add --makefile testfile.js');
console.log(input1.commandId); // plugins-add
console.log(input1.values.makefile); // [ 'testfile.js' ]

// command line parsing
const input2 = await params.fromCommandLine();
console.log(input2.values.verbosity); // info

// command line user interface
const input3 = await params.fromInquiry();
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


[npm-image]: https://img.shields.io/npm/v/consultant.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/consultant
[download-image]: https://img.shields.io/npm/dt/consultant.svg?style=flat-square
[dep-image]: https://img.shields.io/david/eserozvataf/consultant.svg?style=flat-square
[dep-url]: https://github.com/eserozvataf/jsmake-libraries
[license-image]: https://img.shields.io/npm/l/consultant.svg?style=flat-square
[license-url]: https://github.com/eserozvataf/jsmake-libraries/blob/master/08_consultant/LICENSE
