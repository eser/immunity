import glob from './glob';
import lstat from './lstat';
import rm from './rm';
import rmdir from './rmdir';
import rmdirP from './rmdirP';

async function rmP(str, recursiveForDirectories): Promise<void> {
    const list = await glob(str, false);

    let directories: Array<any> = [];

    for (const item of list) {
        const itemStat = await lstat(item);

        if (itemStat.isDirectory()) {
            directories = [ item, ...directories ];

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
