import path = require('path');
import os = require('os');
import * as cofounder from 'cofounder';
import mergeObjects from 'immunity/lib/mergeObjects';
import appendToObject from 'immunity/lib/appendToObject';

// TODO refactor it without eventemitter
class Senior {
    name: string;
    modulePrefix: string;

    events: EventEmitter;

    homePath: string;
    packageJsonFile: string;

    constructor(name: string, modulePrefix: string = '') {
        this.name = name;
        this.modulePrefix = modulePrefix;

        this.events = new EventEmitter();

        this.homePath = path.join(os.homedir(), `.${this.name}`);
        this.packageJsonFile = path.join(this.homePath, 'package.json');
    }

    async ensureRequirements(): Promise<void> {
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

    list(): { [key: string]: string } {
        let dependencies = {};

        try {
            const packageJson = require(this.packageJsonFile);

            if (packageJson.dependencies !== undefined) {
                dependencies = mergeObjects(dependencies, packageJson.dependencies);
            }
        }
        catch (ex) {
            if (ex.code !== 'MODULE_NOT_FOUND') {
                throw ex;
            }
        }

        return dependencies;
    }

    async install(moduleName: string): Promise<boolean> {
        await this.ensureRequirements();

        const moduleName_ = `${this.modulePrefix}${moduleName}`;

        const proc = cofounder.os.shell(`npm install ${moduleName_} --prefix ${this.homePath}`);

        if (proc.status === 0) {
            this.events.emit('install', moduleName_);

            return true;
        }

        return false;
    }

    async uninstall(moduleName: string): Promise<boolean> {
        await this.ensureRequirements();

        const moduleName_ = `${this.modulePrefix}${moduleName}`;

        const proc = cofounder.os.shell(`npm uninstall ${moduleName_} --prefix ${this.homePath}`);

        if (proc.status === 0) {
            this.events.emit('uninstall', moduleName_);

            return true;
        }

        return false;
    }

    getModulePath(moduleName: string): string {
        return path.join(this.homePath, 'node_modules', moduleName);
    }

    getModuleIndex(moduleName: string): string {
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

    getModules(): { [key: string]: string } {
        const list = this.list();

        let result = {};

        for (const dependencyKey of Object.keys(list)) {
            result = appendToObject(
                result,
                {
                    [dependencyKey]: this.getModuleIndex(dependencyKey),
                }
            );
        }

        return result;
    }

    loadFile(filepath: string, globals: { [key: string]: any }): any {
        let gBackups = {};

        for (const globalKey of Object.keys(globals)) {
            gBackups = appendToObject(gBackups, { [globalKey]: global[globalKey] });
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

    load(moduleName: string, globals: { [key: string]: any }, loader: (filepath: string, globals: { [key: string]: any }) => any = this.loadFile): any {
        const moduleIndex = this.getModuleIndex(moduleName);

        return loader(moduleIndex, globals);
    }

    loadAll(globals: { [key: string]: any }, loader: (filepath: string, globals: { [key: string]: any }) => any = this.loadFile): { [key: string]: any } {
        const list = this.list();

        let result = {};

        for (const dependencyKey of Object.keys(list)) {
            result = appendToObject(
                result,
                {
                    [dependencyKey]: this.load(dependencyKey, globals, loader),
                }
            );
        }

        return result;
    }
}

export {
    Senior as default,
};
