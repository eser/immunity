import Options from '../options';
import list from './list';
import load from './load';
import loadFile from './loadFile';

import appendToObject from 'immunity/lib/appendToObject';

function loadAll(options: Options, globals: { [key: string]: any }, loader: (filepath: string, globals: { [key: string]: any }) => any = loadFile): { [key: string]: any } {
    const listResult = list(options);

    let result = {};

    for (const dependencyKey of Object.keys(listResult)) {
        result = appendToObject(
            result,
            {
                [dependencyKey]: load(options, dependencyKey, globals, loader),
            }
        );
    }

    return result;
}

export {
    loadAll as default,
};
