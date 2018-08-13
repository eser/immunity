# [jsmake-libraries](https://github.com/eserozvataf/jsmake-libraries)

monorepo of libraries that empower [jsmake](https://github.com/eserozvataf/jsmake)


## Quick start

Each project has own installation instructions and license details in its own directory.


| Library                                            | Status   | Description                                                                    |
| -------------------------------------------------- | -------- | -------------------------------------------------------------------------------------- |
| [ponyfills](packages/00_ponyfills/)                   | Released | Delivers ponyfills as modules, uses native alternatives first when available           |
| [immunity](packages/01_immunity/)                    | Released | Library of methods for maintaining immutable data structures                           |
| [evangelist](packages/02_evangelist/)                  | Released | Library of helpers that are useful for functional programming                          |
| [enthusiast](packages/03_enthusiast/)                  | Released | A functional stream library implementation runs on browsers and node.js                |
| [servicemanager](packages/04_servicemanager/)              | Released | Most basic implementation of dependency injection container for JavaScript             |
| [cofounder](packages/05_cofounder/)                   | Released | Library of methods offers additional functionalities besides node.js's fs library      |
| [senior](packages/06_senior/)                      | Beta     | Plugin host and manager for installable/removable npm packages                         |
| [maester](packages/07_maester/)                     | Beta     | Async logging and exception handling library runs on browsers and node.js              |
| [consultant](packages/08_consultant/)                  | Beta     | Gathers structural and validateable input from command line or interactive menu        |


## Contributing to monorepo

It is publicly open for any contribution. Bugfixes, new features and extra modules are welcome.

* To contribute to code: Fork the repo, push your changes to your fork, and submit a pull request.
* To report a bug: If something does not work, please report it using [GitHub Issues](https://github.com/eserozvataf/jsmake-libraries/issues).


### Requirements

* node.js (https://nodejs.org/)


### Installation

```sh
# install/update lerna installation
npm install -g lerna

# clone project repository
git clone https://github.com/eserozvataf/jsmake-libraries

# initialize monorepo
cd jsmake-libraries
lerna bootstrap
```


## To Support

[Visit my patreon profile at patreon.com/eserozvataf](https://www.patreon.com/eserozvataf)
