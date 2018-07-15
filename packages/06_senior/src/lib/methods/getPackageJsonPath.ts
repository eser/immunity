import path = require('path');

function getPackageJsonPath(homePath: string): string {
    return path.join(homePath, 'package.json');
}

export {
    getPackageJsonPath as default,
};
