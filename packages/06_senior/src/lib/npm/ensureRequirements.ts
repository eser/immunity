import { Options } from '../methods';
import getPackageJsonPath from './getPackageJsonPath';

import mkdirP from 'cofounder/lib/node/fs/mkdirP';
import lstat from 'cofounder/lib/node/fs/lstat';
import saveFile from 'cofounder/lib/node/json/saveFile';

async function ensureRequirements(options: Options): Promise<void> {
    await mkdirP(options.homePath);

    const packageJsonFile = getPackageJsonPath(options.homePath);

    try {
        /* const stat = */await lstat(packageJsonFile);
    }
    catch (ex) {
        if (ex.code === 'ENOENT') {
            await saveFile(packageJsonFile, {});
        }
    }
}

export {
    ensureRequirements as default,
};
