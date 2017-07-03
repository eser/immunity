import path = require('path');
import { appendToArray } from 'immunity/lib/appendToArray';
import { splitArray } from 'immunity/lib/splitArray';
import { lstat } from './lstat';
import { readdir } from './readdir';
import { rm } from './rm';
import { rmdir } from './rmdir';

export async function rmdirP(pathstr) {
    let directories = [
        [ pathstr, false ]
    ];

    while (directories.length > 0) {
        const splitted = splitArray(directories, -1),
            directory = splitted.items[0];

        directories = splitted.remainder;

        try {
            if (directory[1]) {
                await rmdir(directory[0]);

                continue;
            }

            const list = await readdir(directory[0]);

            let pushedBack = false;

            for (const item of list) {
                if (item === '.' || item === '..') {
                    continue;
                }

                const itemPath = path.join(directory[0], item);

                try {
                    const itemStat = await lstat(itemPath);

                    if (itemStat.isDirectory()) {
                        if (!pushedBack) {
                            directories = appendToArray(directories, [ directory[0], true ]);
                            pushedBack = true;
                        }

                        directories = appendToArray(directories, [ itemPath, false ]);

                        continue;
                    }

                    await rm(itemPath);
                }
                catch (ex2) {
                    if (ex2.code === 'ENOENT') {
                        return;
                    }

                    throw ex2;
                }
            }

            if (!pushedBack) {
                await rmdir(directory[0]);
            }
        }
        catch (ex) {
            if (ex.code === 'ENOENT') {
                return;
            }

            throw ex;
        }
    }
};

export default rmdirP;
