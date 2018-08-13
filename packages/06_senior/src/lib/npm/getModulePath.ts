import * as path from 'path';

function getModulePath(homePath: string): string {
    return path.join(homePath, 'node_modules');
}

export {
    getModulePath as default,
};
