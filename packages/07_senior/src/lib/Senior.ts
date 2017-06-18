import path = require('path');
import os = require('os');
import cofounder = require('cofounder');
import EventEmitter = require('es6-eventemitter');
import immunity = require('immunity');

export class Senior {
    name: string;
    modulePrefix: string;

    events: EventEmitter;

    homePath: string;
    packageJsonFile: string;

    constructor(name, modulePrefix = '') {
        this.name = name;
        this.modulePrefix = modulePrefix;

        this.events = new EventEmitter();

        this.homePath = path.join(os.homedir(), `.${this.name}`);
        this.packageJsonFile = path.join(this.homePath, 'package.json');
    }

    async ensureRequirements() {
        await cofounder.fs.mkdirP(this.homePath);

        try {
            /* const stat = */await cofounder.fs.lstat(this.packageJsonFile);
        }
        catch (ex) {
            if (ex.code === 'ENOENT') {
                await cofounder.json.saveFile(this.packageJsonFile, {});
            }
        }
    }

    list() {
        let dependencies = {};

        try {
            const packageJson = require(this.packageJsonFile);

            if (packageJson.dependencies !== undefined) {
                dependencies = immunity.mergeObjects(dependencies, packageJson.dependencies);
            }
        }
        catch (ex) {
            if (ex.code !== 'MODULE_NOT_FOUND') {
                throw ex;
            }
        }

        return dependencies;
    }

    async install(moduleName) {
        await this.ensureRequirements();

        const moduleName_ = `${this.modulePrefix}${moduleName}`;

        const proc = cofounder.os.shell(`npm install ${moduleName_} --prefix ${this.homePath}`);

        if (proc.status === 0) {
            this.events.emit('install', moduleName_);

            return true;
        }

        return false;
    }

    async uninstall(moduleName) {
        await this.ensureRequirements();

        const moduleName_ = `${this.modulePrefix}${moduleName}`;

        const proc = cofounder.os.shell(`npm uninstall ${moduleName_} --prefix ${this.homePath}`);

        if (proc.status === 0) {
            this.events.emit('uninstall', moduleName_);

            return true;
        }

        return false;
    }

    getModulePath(moduleName) {
        return path.join(this.homePath, 'node_modules', moduleName);
    }

    getModuleIndex(moduleName) {
        const pathstr = this.getModulePath(moduleName),
            modulePackage = path.join(pathstr, 'package.json');

        try {
            const contents = require(modulePackage),
                entryPoint = contents[`main:${this.name}`];

            if (entryPoint !== undefined) {
                return path.join(pathstr, entryPoint);
            }
        }
        catch (ex) {
            if (ex.code !== 'MODULE_NOT_FOUND') {
                throw ex;
            }
        }

        return pathstr;
    }

    getModules() {
        const list = this.list();

        let result = {};

        for (const dependencyKey of Object.keys(list)) {
            result = immunity.appendToObject(result, { [dependencyKey]: this.getModuleIndex(dependencyKey) });
        }

        return result;
    }

    load(moduleName, globals) {
        const moduleIndex = this.getModuleIndex(moduleName);

        let gBackups = {};

        for (const globalKey of Object.keys(globals)) {
            gBackups = immunity.appendToObject(gBackups, { [globalKey]: global[globalKey] });
            global[globalKey] = globals[globalKey];
        }

        try {
            const loadedModule = require(moduleIndex);

            return loadedModule;
        }
        catch (ex) {
            if (ex.code !== 'MODULE_NOT_FOUND') {
                throw ex;
            }
        }
        finally {
            for (const globalKey of Object.keys(globals)) {
                global[globalKey] = gBackups[globalKey];
            }
        }

        return null;
    }

    loadAll(globals) {
        const list = this.list();

        let result = {};

        for (const dependencyKey of Object.keys(list)) {
            result = immunity.appendToObject(result, { [dependencyKey]: this.load(dependencyKey, globals) });
        }

        return result;
    }
}

export default Senior;
