// interface Options {
//     name: string;
//     modulePrefix: string;
//     homePath: string;
// }

type Options = { [key: string]: string };

interface InstallResult {
    moduleName: string;
    success: boolean;
}

interface UninstallResult {
    moduleName: string;
    success: boolean;
}

interface SeniorMethods {
    searchRepository(options?: Options): Promise<{ [key: string]: string }>;
    install(moduleName: string, options?: Options): Promise<InstallResult>;
    uninstall(moduleName: string, options?: Options): Promise<UninstallResult>;
    list(options?: Options): Promise<{ [key: string]: string }>;
    listModuleFunctions(options?: Options): Promise<{ [key: string]: string }>;
    load(moduleName: string, globals: { [key: string]: any }, options?: Options): Promise<any>;
    loadAll(globals: { [key: string]: any }, options?: Options): Promise<{ [key: string]: any }>;
}

export {
    SeniorMethods as default,
    Options,
    InstallResult,
    UninstallResult,
};
