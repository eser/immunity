import { Options } from '../methods';
import loadFile from 'cofounder/lib/node/json/loadFile';

import getModulePath from './getModulePath';
import getPackageJsonPath from './getPackageJsonPath';

import * as path from 'path';

async function getModuleFunction(moduleName: string, options: Options): Promise<() => any> {
    const pathstr = getModulePath(options.homePath, moduleName),
        modulePackage = getPackageJsonPath(pathstr);

    const contents = await loadFile(modulePackage),
        entryPoint = contents[options.packageMainProperty] || '',
        modulePath = path.join(pathstr, entryPoint);

    return () => {
        try {
            const loadedModule = require(modulePath);

            return loadedModule[options.defaultExport];
        }
        catch (ex) {
            if (ex.code !== 'MODULE_NOT_FOUND') {
                throw ex;
            }
        }
    };
}

export {
    getModuleFunction as default,
};
