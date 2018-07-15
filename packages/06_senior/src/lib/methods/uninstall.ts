import Options from '../options';
import ensureRequirements from './ensureRequirements';

import shell from 'cofounder/lib/os/shell';

interface UninstallResult {
    moduleName: string;
    success: boolean;
}

async function uninstall(options: Options, moduleName: string): Promise<UninstallResult> {
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
    UninstallResult,
};
