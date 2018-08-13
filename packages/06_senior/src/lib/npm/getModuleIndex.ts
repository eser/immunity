import { Options } from '../methods';
import getModulePath from './getModulePath';

import * as path from 'path';

function getModuleIndex(options: Options, moduleName: string): string {
    const pathstr = getModulePath(moduleName),
        modulePackage = path.join(pathstr, 'package.json');

    try {
        const contents = require(modulePackage),
            entryPoint = contents[`main:${options.name}`];

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
