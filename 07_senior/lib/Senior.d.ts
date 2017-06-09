export declare class Senior {
    constructor(name: any, modulePrefix?: string);
    ensureRequirements(): Promise<void>;
    list(): {};
    install(moduleName: any): Promise<boolean>;
    uninstall(moduleName: any): Promise<boolean>;
    getModulePath(moduleName: any): any;
    getModuleIndex(moduleName: any): any;
    getModules(): {};
    load(moduleName: any, globals: any): any;
    loadAll(globals: any): {};
}
export default Senior;
