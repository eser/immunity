import { Options } from '../methods';

import getModuleIndex from './getModuleIndex';
import list from './list';

import appendToObject from 'immunity/lib/appendToObject';

async function listModuleIndexes(options: Options): Promise<{ [key: string]: string }> {
    const listResult = await list(options);

    let result = {};

    for (const dependencyKey of Object.keys(listResult)) {
        result = appendToObject(
            result,
            {
                [dependencyKey]: await getModuleIndex(dependencyKey, options),
            }
        );
    }

    return result;
}

export {
    listModuleIndexes as default,
};
