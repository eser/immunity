import { Options } from '../methods';

import getModuleFunction from './getModuleFunction';
import executeModuleFunction from '../executeModuleFunction';

async function load(moduleName: string, globals: { [key: string]: any }, options: Options): Promise<any> {
    const moduleFunction = await getModuleFunction(moduleName, options);

    return await executeModuleFunction(moduleFunction, globals);
}

export {
    load as default,
};
