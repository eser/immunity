import { Options, InstallResult } from '../methods';
declare function install(moduleName: string, options: Options): Promise<InstallResult>;
export { install as default, };
