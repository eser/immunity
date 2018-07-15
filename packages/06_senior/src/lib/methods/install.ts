import Options from '../options';
import ensureRequirements from './ensureRequirements';

import shell from 'cofounder/lib/os/shell';

interface InstallResult {
    moduleName: string;
    success: boolean;
}

async function install(options: Options, moduleName: string): Promise<InstallResult> {
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
    InstallResult,
};
