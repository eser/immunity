declare class PluginManager {
    name: string;
    modulePrefix: string;
    events: {
        install: Array<(moduleName: string) => void>;
        uninstall: Array<(moduleName: string) => void>;
    };
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
export { PluginManager as default, };
