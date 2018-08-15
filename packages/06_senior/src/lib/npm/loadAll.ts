import { Options } from '../methods';

import list from './list';
import load from './load';

import appendToObject from 'immunity/lib/appendToObject';

async function loadAll(globals: { [key: string]: any }, options: Options): Promise<{ [key: string]: any }> {
    const listResult = await list(options);

    let result = {};

    for (const dependencyKey of Object.keys(listResult)) {
        result = appendToObject(
            result,
            {
                [dependencyKey]: await load(dependencyKey, globals, options),
            }
        );
    }

    return result;
}

export {
    loadAll as default,
};
