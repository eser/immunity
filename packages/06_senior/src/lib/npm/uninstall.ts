import { Options, UninstallResult } from '../methods';

import ensureRequirements from './ensureRequirements';

import shell from 'cofounder/lib/node/os/shell';

async function uninstall(moduleName: string, options: Options): Promise<UninstallResult> {
    await ensureRequirements(options);

    const moduleName_ = `${options.modulePrefix}${moduleName}`;

    const proc = shell(`npm uninstall ${moduleName_} --prefix ${options.homePath}`);

    return {
        moduleName: moduleName_,
        success: (proc.status === 0),
    };
}

export {
    uninstall as default,
};
