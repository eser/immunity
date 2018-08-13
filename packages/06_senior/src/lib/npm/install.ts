import { Options, InstallResult } from '../methods';

import ensureRequirements from './ensureRequirements';

import shell from 'cofounder/lib/node/os/shell';

async function install(moduleName: string, options: Options): Promise<InstallResult> {
    await ensureRequirements(options);

    const moduleName_ = `${options.modulePrefix}${moduleName}`;

    const proc = shell(`npm install ${moduleName_} --prefix ${options.homePath}`);

    return {
        moduleName: moduleName_,
        success: (proc.status === 0),
    };
}

export {
    install as default,
};
