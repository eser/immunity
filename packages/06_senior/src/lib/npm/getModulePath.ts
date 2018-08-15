import * as path from 'path';

function getModulePath(homePath: string, moduleName: string): string {
    const modulePath = path.join(homePath, 'node_modules', moduleName);

    return modulePath;
}

export {
    getModulePath as default,
};
