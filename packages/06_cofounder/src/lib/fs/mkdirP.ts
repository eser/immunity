import path = require('path');
import splitArray from 'immunity/lib/splitArray';
import mkdir from './mkdir';

async function mkdirP(pathstr, mode?) {
    let directories = [
        pathstr
    ];

    while (directories.length > 0) {
        const splitted = splitArray(directories, -1);
        const directory = splitted.items[0];

        directories = splitted.remainder;

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
