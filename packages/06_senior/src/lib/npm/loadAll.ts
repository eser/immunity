import { Options } from '../methods';

import list from './list';
import load from './load';

import appendToObject from 'immunity/lib/appendToObject';

function loadAll(globals: { [key: string]: any }, options: Options): any {
    const listResult = list(options);

    let result = {};

    for (const dependencyKey of Object.keys(listResult)) {
        result = appendToObject(
            result,
            {
                [dependencyKey]: load(dependencyKey, globals, options),
            }
        );
    }

    return result;
}

export {
    loadAll as default,
};
