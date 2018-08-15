import { Options } from '../methods';
import loadFile from 'cofounder/lib/node/json/loadFile';

import getModulePath from './getModulePath';
import getPackageJsonPath from './getPackageJsonPath';

import * as path from 'path';

async function getModuleIndex(moduleName: string, options: Options): Promise<string> {
    const pathstr = getModulePath(options.homePath, moduleName),
        modulePackage = getPackageJsonPath(pathstr);

    const packageProperty: string = ((options.name || '').length > 0) ?
        `main:${options.name}` :
        'main';

    try {
        const contents = await loadFile(modulePackage),
            entryPoint = contents[packageProperty];

        if (entryPoint !== undefined) {
            return path.join(pathstr, entryPoint);
        }
    }
    catch (ex) {
        if (ex.code !== 'MODULE_NOT_FOUND') {
            throw ex;
        }
    }

    return pathstr;
}

export {
    getModuleIndex as default,
};
