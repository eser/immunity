declare type Options = {
    [key: string]: string;
};
interface InstallResult {
    moduleName: string;
    success: boolean;
}
interface UninstallResult {
    moduleName: string;
    success: boolean;
}
interface SeniorMethods {
    searchRepository(options?: Options): Promise<{
        [key: string]: string;
    }>;
    install(moduleName: string, options?: Options): Promise<InstallResult>;
    uninstall(moduleName: string, options?: Options): Promise<UninstallResult>;
    list(options?: Options): {
        [key: string]: string;
    };
    listModuleIndexes(options?: Options): {
        [key: string]: string;
    };
    load(moduleName: string, globals: {
        [key: string]: any;
    }, options?: Options): any;
    loadAll(globals: {
        [key: string]: any;
    }, options?: Options): {
        [key: string]: any;
    };
}
export { SeniorMethods as default, Options, InstallResult, UninstallResult, };
