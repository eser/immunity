import * as path from 'path';
import splitLastArray from 'immunity/lib/splitLastArray';
import mkdir from './mkdir';

async function mkdirP(pathstr: string, mode?): Promise<void> {
    let directories: Array<string> = [
        path.normalize(pathstr),
    ];

    while (directories.length > 0) {
        const splitted = splitLastArray(directories, 1);
        const directory = splitted.items[0];

        directories = splitted.rest;

        if (directory[0] === '.') {
            continue;
        }

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
