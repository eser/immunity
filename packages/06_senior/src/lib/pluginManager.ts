import Options from './options';
import ensureRequirements from './methods/ensureRequirements';
import getModules from './methods/getModules';
import install from './methods/install';
import list from './methods/list';
import load from './methods/load';
import loadAll from './methods/loadAll';
import loadFile from './methods/loadFile';
import uninstall from './methods/uninstall';

import path = require('path');
import os = require('os');
import emitter from 'evangelist/lib/emitter';

// TODO refactor it without eventemitter
class PluginManager {
    options: Options;

    events: {
        install: Array<(moduleName: string) => void>,
        uninstall: Array<(moduleName: string) => void>,
    };

    constructor(name: string, modulePrefix: string = '') {
        const homePath = path.join(os.homedir(), `.${name}`);
        const packageJsonFile = path.join(homePath, 'package.json');

        this.options = {
            name: name,
            modulePrefix: modulePrefix,
            homePath: homePath,
            packageJsonFile: packageJsonFile,
        };

        this.events = {
            install: [],
            uninstall: [],
        };
    }

    async ensureRequirements(): Promise<void> {
        return ensureRequirements(this.options);
    }

    list(): { [key: string]: string } {
        return list(this.options);
    }

    async install(moduleName: string): Promise<boolean> {
        const result = await install(this.options, moduleName);

        if (result.success) {
            await emitter(this.events, 'install', [ result.moduleName ]);

            return true;
        }

        return false;
    }

    async uninstall(moduleName: string): Promise<boolean> {
        const result = await uninstall(this.options, moduleName);

        if (result.success) {
            await emitter(this.events, 'uninstall', [ result.moduleName ]);

            return true;
        }

        return false;
    }

    getModules(): { [key: string]: string } {
        return getModules(this.options);
    }

    load(moduleName: string, globals: { [key: string]: any }, loader: (filepath: string, globals: { [key: string]: any }) => any = loadFile): any {
        return load(this.options, moduleName, globals, loader);
    }

    loadAll(globals: { [key: string]: any }, loader: (filepath: string, globals: { [key: string]: any }) => any = loadFile): { [key: string]: any } {
        return loadAll(this.options, globals, loader);
    }
}

export {
    PluginManager as default,
};
