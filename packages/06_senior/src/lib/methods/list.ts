import Options from '../options';
import getPackageJsonPath from './getPackageJsonPath';

import mergeObjects from 'immunity/lib/mergeObjects';

function list(options: Options): { [key: string]: string } {
    let dependencies = {};

    try {
        const packageJsonFile = getPackageJsonPath(options.homePath);
        const packageJson = require(packageJsonFile);

        if (packageJson.dependencies !== undefined) {
            dependencies = mergeObjects(dependencies, packageJson.dependencies);
        }
    }
    catch (ex) {
        if (ex.code !== 'MODULE_NOT_FOUND') {
            throw ex;
        }
    }

    return dependencies;
}

export {
    list as default,
};
