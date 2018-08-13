import { Options, UninstallResult } from '../methods';
declare function uninstall(moduleName: string, options: Options): Promise<UninstallResult>;
export { uninstall as default, };
