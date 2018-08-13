import { Options } from '../methods';

import getModuleIndex from './getModuleIndex';
import list from './list';

import appendToObject from 'immunity/lib/appendToObject';

function listModuleIndexes(options: Options): { [key: string]: string } {
    const listResult = list(options);

    let result = {};

    for (const dependencyKey of Object.keys(listResult)) {
        result = appendToObject(
            result,
            {
                [dependencyKey]: getModuleIndex(dependencyKey, options),
            }
        );
    }

    return result;
}

export {
    listModuleIndexes as default,
};
