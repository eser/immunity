import path = require('path');
import { appendToArray } from 'immunity/lib/appendToArray';
import { splitArray } from 'immunity/lib/splitArray';
import { mkdir } from './mkdir';

export async function mkdirP(pathstr, mode?) {
    let directories = [
        pathstr
    ];

    while (directories.length > 0) {
        const splitted = splitArray(directories, -1),
            directory = splitted.items[0];

        directories = splitted.remainder;

        try {
            await mkdir(directory, mode);
        }
        catch (ex) {
            if (ex.code === 'ENOENT') {
                directories = appendToArray(directories, directory, path.dirname(directory));
                continue;
            }

            if (ex.code === 'EEXIST') {
                return;
            }

            throw ex;
        }
    }
};

export default mkdirP;
