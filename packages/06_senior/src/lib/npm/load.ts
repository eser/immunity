import { Options } from '../methods';

import getModuleIndex from './getModuleIndex';
import loadFile from './loadFile';

async function load(moduleName: string, globals: { [key: string]: any }, options: Options): Promise<any> {
    const moduleIndex = await getModuleIndex(moduleName, options);

    return await loadFile(moduleIndex, globals);
}

export {
    load as default,
};
