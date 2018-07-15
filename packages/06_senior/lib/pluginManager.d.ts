import Options from './options';
declare class PluginManager {
    options: Options;
    events: {
        install: Array<(moduleName: string) => void>;
        uninstall: Array<(moduleName: string) => void>;
    };
    constructor(name: string, modulePrefix?: string);
    ensureRequirements(): Promise<void>;
    list(): {
        [key: string]: string;
    };
    install(moduleName: string): Promise<boolean>;
    uninstall(moduleName: string): Promise<boolean>;
    getModules(): {
        [key: string]: string;
    };
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
