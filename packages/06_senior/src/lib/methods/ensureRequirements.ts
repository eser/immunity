import Options from '../options';
import getPackageJsonPath from './getPackageJsonPath';

import mkdirP from 'cofounder/lib/fs/mkdirP';
import lstat from 'cofounder/lib/fs/lstat';
import saveFile from 'cofounder/lib/json/saveFile';

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
