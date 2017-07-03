# [cofounder](https://github.com/eserozvataf/jsmake-libraries)

[![npm version][npm-image]][npm-url]
[![npm download][download-image]][npm-url]
[![dependencies][dep-image]][dep-url]
[![license][license-image]][license-url]


## What is the CoFounder?

This project is designed to offer additional file system functionalities apart from node.js's bundled fs library.

Plug, as a library, CoFounder is completely tree-shanking-friendly. Your favorite module bundler can easily inline the functionality you need with no extra configuration, instead of bundling the whole CoFounder package.


## Why CoFounder?

I like standartization in general concepts like file system access. I have several node.js projects and most of the time I try to keep my code design similar, portable and shareable for applicability to other scenerios. CoFounder is the one of the products that I have developed with this mindset.

As an file system library it offers,

- scanDir method to enumerate files and filestats by directory,
- glob method to enumerate matching files,
- rm method to delete matching files,
- rmdir method to delete directories recursively,
- mkdir method to make directory recursively,
- writeFile method to ensures target directory is made first then writes content to file,


## Quick start

Execute `npm install cofounder` to install cofounder and its dependencies into your project directory.


## List of modules

- fs.cp
- fs.cpP
- fs.glob
- fs.globParent
- fs.globParentOf
- fs.lstat
- fs.mkdir
- fs.mkdirP
- fs.mv
- fs.mvP
- fs.readdir
- fs.readFile
- fs.rm
- fs.rmdir
- fs.rmdirP
- fs.rmP
- fs.writeFile
- fs.writeFileP
- json.loadFile
- json.saveFile
- os.shell


## Todo List

- Buffered glob copy
- Move and rename

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


[npm-image]: https://img.shields.io/npm/v/cofounder.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/cofounder
[download-image]: https://img.shields.io/npm/dt/cofounder.svg?style=flat-square
[dep-image]: https://img.shields.io/david/eserozvataf/cofounder.svg?style=flat-square
[dep-url]: https://github.com/eserozvataf/jsmake-libraries
[license-image]: https://img.shields.io/npm/l/cofounder.svg?style=flat-square
[license-url]: https://github.com/eserozvataf/jsmake-libraries/blob/master/05_cofounder/LICENSE
