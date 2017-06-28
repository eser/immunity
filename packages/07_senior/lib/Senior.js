"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const os = require("os");
const cofounder = require("cofounder");
const EventEmitter = require("es6-eventemitter");
const immunity = require("immunity");
class Senior {
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
            await cofounder.fs.lstat(this.packageJsonFile);
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
        const pathstr = this.getModulePath(moduleName), modulePackage = path.join(pathstr, 'package.json');
        try {
            const contents = require(modulePackage), entryPoint = contents[`main:${this.name}`];
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
            result = immunity.appendToObject(result, {
                [dependencyKey]: this.getModuleIndex(dependencyKey)
            });
        }
        return result;
    }
    loadFile(filepath, globals) {
        let gBackups = {};
        for (const globalKey of Object.keys(globals)) {
            gBackups = immunity.appendToObject(gBackups, { [globalKey]: global[globalKey] });
            global[globalKey] = globals[globalKey];
        }
        try {
            const loadedModule = require(filepath);
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
    load(moduleName, globals, loader = this.loadFile) {
        const moduleIndex = this.getModuleIndex(moduleName);
        return loader(moduleIndex, globals);
    }
    loadAll(globals, loader = this.loadFile) {
        const list = this.list();
        let result = {};
        for (const dependencyKey of Object.keys(list)) {
            result = immunity.appendToObject(result, {
                [dependencyKey]: this.load(dependencyKey, globals, loader)
            });
        }
        return result;
    }
}
exports.Senior = Senior;
exports.default = Senior;
//# sourceMappingURL=Senior.js.map