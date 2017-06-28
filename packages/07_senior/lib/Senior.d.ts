import EventEmitter = require('es6-eventemitter');
export declare class Senior {
    name: string;
    modulePrefix: string;
    events: EventEmitter;
    homePath: string;
    packageJsonFile: string;
    constructor(name: string, modulePrefix?: string);
    ensureRequirements(): Promise<void>;
    list(): {
        [key: string]: string;
    };
    install(moduleName: string): Promise<boolean>;
    uninstall(moduleName: string): Promise<boolean>;
    getModulePath(moduleName: string): string;
    getModuleIndex(moduleName: string): string;
    getModules(): {
        [key: string]: string;
    };
    loadFile(filepath: string, globals: {
        [key: string]: any;
    }): any;
    load(moduleName: string, globals: {
        [key: string]: any;
    }, loader?: (filepath: string, globals: {
        [key: string]: any;
    }) => any): any;
    loadAll(globals: {
        [key: string]: any;
    }, loader?: (filepath: string, globals: {
        [key: string]: any;
    }) => any): {
        [key: string]: any;
    };
}
export default Senior;
