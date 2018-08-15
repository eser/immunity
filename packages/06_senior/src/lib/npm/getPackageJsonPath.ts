import * as path from 'path';

function getPackageJsonPath(homePath: string): string {
    const packageJsonFile = path.join(homePath, 'package.json');

    return packageJsonFile;
}

export {
    getPackageJsonPath as default,
};
