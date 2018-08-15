import { Options } from '../methods';
import loadFile from 'cofounder/lib/node/json/loadFile';

import getPackageJsonPath from './getPackageJsonPath';

import mergeObjects from 'immunity/lib/mergeObjects';

async function list(options: Options): Promise<{ [key: string]: string }> {
    let dependencies = {};

    try {
        const packageJsonFile = getPackageJsonPath(options.homePath);
        const packageJson = await loadFile(packageJsonFile);

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
