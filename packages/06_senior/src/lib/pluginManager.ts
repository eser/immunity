import path = require('path');
import os = require('os');
import emitter from 'evangelist/lib/emitter';
import mkdirP from 'cofounder/lib/fs/mkdirP';
import lstat from 'cofounder/lib/fs/lstat';
import saveFile from 'cofounder/lib/json/saveFile';
import shell from 'cofounder/lib/os/shell';
import mergeObjects from 'immunity/lib/mergeObjects';
import appendToObject from 'immunity/lib/appendToObject';

// TODO refactor it without eventemitter
class PluginManager {
    name: string;
    modulePrefix: string;

    events: {
        install: Array<(moduleName: string) => void>,
        uninstall: Array<(moduleName: string) => void>,
    };

    homePath: string;
    packageJsonFile: string;

    constructor(name: string, modulePrefix: string = '') {
        this.name = name;
        this.modulePrefix = modulePrefix;

        this.events = {
            install: [],
            uninstall: [],
        };

        this.homePath = path.join(os.homedir(), `.${this.name}`);
        this.packageJsonFile = path.join(this.homePath, 'package.json');
    }

    async ensureRequirements(): Promise<void> {
        await mkdirP(this.homePath);

        try {
            /* const stat = */await lstat(this.packageJsonFile);
        }
        catch (ex) {
            if (ex.code === 'ENOENT') {
                await saveFile(this.packageJsonFile, {});
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

        const proc = shell(`npm install ${moduleName_} --prefix ${this.homePath}`);

        if (proc.status === 0) {
            await emitter(this.events, 'install', [ moduleName_ ]);

            return true;
        }

        return false;
    }

    async uninstall(moduleName: string): Promise<boolean> {
        await this.ensureRequirements();

        const moduleName_ = `${this.modulePrefix}${moduleName}`;

        const proc = shell(`npm uninstall ${moduleName_} --prefix ${this.homePath}`);

        if (proc.status === 0) {
            await emitter(this.events, 'uninstall', [ moduleName_ ]);

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
    PluginManager as default,
};
