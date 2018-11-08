import { Options } from '../methods';

import getModuleFunction from './getModuleFunction';
import list from './list';

import appendToObject from 'immunity/lib/appendToObject';

async function listModuleFunctions(options: Options): Promise<{ [key: string]: string }> {
    const listResult = await list(options);

    let result = {};

    for (const dependencyKey of Object.keys(listResult)) {
        result = appendToObject(
            result,
            {
                [dependencyKey]: await getModuleFunction(dependencyKey, options),
            }
        );
    }

    return result;
}

export {
    listModuleFunctions as default,
};
