# [ServiceManager](https://github.com/eserozvataf/jsmake-libraries)

[![npm version][npm-image]][npm-url]
[![npm download][download-image]][npm-url]
[![dependencies][dep-image]][dep-url]
[![license][license-image]][license-url]


## What is the ServiceManager?

ServiceManager is probably the most basic implementation of dependency injection container for JavaScript.


## Quick start

Execute `npm install servicemanager` to install servicemanager and its dependencies into your project directory.


## Usage

### Basics

To register objects to service manager:

```js
import services, { ServiceLifetime } from 'servicemanager';
// or const { default: services, ServiceLifetime } = require('servicemanager');

services.set('ResourceManager', DefaultResourceManager);
services.set('CacheManager', CustomCacheManager, ServiceLifetime.Transient);
services.set('SessionManager', mySessionManager, ServiceLifetime.Singleton);
```

To get objects back from service manager:

```js
import services from 'servicemanager';
// or const services = require('servicemanager').default;

// returns a new instance for DefaultResourceManager
const resourceManager = services.get('ResourceManager');

// returns a new instance for CustomCacheManager
const cacheManager = services.get('CacheManager');

// returns the same session manager object that referenced by mySessionManager
const sessionManager = services.get('SessionManager');
```

Alternatively, to get all needed instances at once:

```js
import services from 'servicemanager';
// or const services = require('servicemanager').default;

const [ resourceManager, cacheManager, sessionManager ] = services.getRange('ResourceManager', 'CacheManager', 'SessionManager');
```

...Or, to have them in more promise-friendly way:

```js
import services from 'servicemanager';
// or const services = require('servicemanager').default;

services.ensure([ 'ResourceManager', 'CacheManager', 'SessionManager' ], (resourceManager, cacheManager, sessionManager) => {
    // awaits promisified generator functions first,
    // then services dependencies as parameters
});
```

*** Note: Service names can be anything including objects, symbols or strings.

### Advanced

Using resolvers:

```js
import { ServiceManager } from 'servicemanager';
// or const ServiceManager = require('servicemanager').ServiceManager;

const resolver = (dependency, resolve) => {
    const filename = `modules/${dependency}`;
    const result = require(filename);

    resolve(result);
};

const services = new ServiceManager(resolver);

// loads modules/module1 and modules/module2
const [ module1, module2 ] = services.getOrResolveRange('module1', 'module2');
```

### API

**ServiceManager.prototype methods**

```
constructor(resolver?: ServiceResolver)

set(dependency: any, target: any, lifetime: ServiceLifetime = ServiceLifetime.Transient, tags: Array<string> = []): void

setRange(...declarations: Array<ServiceDeclaration>): void

get(dependency: any): any

getRange(...dependencies: Array<any>): Array<any>

getOrResolve(dependency: any): any

getOrResolveRange(...dependencies: Array<any>): any

ensure(dependencies: Array<any>, callback: (...services: Array<any>) => any): Promise<any>

filter(predicate: FilterPredicate): Array<string>

filterByTag(tag: string): Array<string>
```


## Mechanics

Transient services call generator/dependency target each time they are requested,
whereas, Singleton services are registered when they are defined.

```js
import services, { ServiceLifetime } from 'servicemanager';
// or const { default: services, ServiceLifetime } = require('servicemanager');

const date1 = Symbol('date1');
const date2 = Symbol('date2');

services.set(date1, () => new Date(), ServiceLifetime.Transient);
services.set(date2, new Date(), ServiceLifetime.Singleton);

console.log(services.get(date1)); // calls and returns new Date()
console.log(services.get(date1)); // calls and returns new Date() again,
console.log(services.get(date2)); // no calls, returns stored date.
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


[npm-image]: https://img.shields.io/npm/v/servicemanager.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/servicemanager
[download-image]: https://img.shields.io/npm/dt/servicemanager.svg?style=flat-square
[dep-image]: https://img.shields.io/david/eserozvataf/servicemanager.svg?style=flat-square
[dep-url]: https://github.com/eserozvataf/jsmake-libraries
[license-image]: https://img.shields.io/npm/l/servicemanager.svg?style=flat-square
[license-url]: https://github.com/eserozvataf/jsmake-libraries/blob/master/04_servicemanager/LICENSE
