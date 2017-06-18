import EventEmitter = require('es6-eventemitter');
export declare class Senior {
    name: string;
    modulePrefix: string;
    events: EventEmitter;
    homePath: string;
    packageJsonFile: string;
    constructor(name: any, modulePrefix?: string);
    ensureRequirements(): Promise<void>;
    list(): {};
    install(moduleName: any): Promise<boolean>;
    uninstall(moduleName: any): Promise<boolean>;
    getModulePath(moduleName: any): string;
    getModuleIndex(moduleName: any): string;
    getModules(): {};
    load(moduleName: any, globals: any): any;
    loadAll(globals: any): {};
}
export default Senior;
