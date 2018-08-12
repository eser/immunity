import * as path from 'path';
import splitArray from 'immunity/lib/splitArray';
import mkdir from './mkdir';

async function mkdirP(pathstr, mode?): Promise<void> {
    let directories = [
        pathstr
    ];

    while (directories.length > 0) {
        const splitted = splitArray(directories, -1);
        const directory = splitted.items[0];

        directories = splitted.rest;

        try {
            await mkdir(directory, mode);
        }
        catch (ex) {
            if (ex.code === 'ENOENT') {
                directories = [ ...directories, directory, path.dirname(directory) ];
                continue;
            }

            if (ex.code === 'EEXIST') {
                return;
            }

            throw ex;
        }
    }
}

export {
    mkdirP as default,
};
