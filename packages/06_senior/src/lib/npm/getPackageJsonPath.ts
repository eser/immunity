import * as path from 'path';

function getPackageJsonPath(homePath: string): string {
    return path.join(homePath, 'package.json');
}

export {
    getPackageJsonPath as default,
};
