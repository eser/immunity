import prependToArray from 'immunity/lib/prependToArray';
import glob from './glob';
import lstat from './lstat';
import rm from './rm';
import rmdir from './rmdir';
import rmdirP from './rmdirP';

async function rmP(str, recursiveForDirectories) {
    const list = await glob(str, false);

    let directories: Array<any> = [];

    for (const item of list) {
        const itemStat = await lstat(item);

        if (itemStat.isDirectory()) {
            directories = prependToArray(directories, item);

            continue;
        }

        await rm(item);
    }

    for (const directory of directories) {
        if (recursiveForDirectories) {
            await rmdirP(directory);
        }
        else {
            await rmdir(directory);
        }
    }
}

export {
    rmP as default,
};
