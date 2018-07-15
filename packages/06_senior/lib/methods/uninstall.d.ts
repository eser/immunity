import Options from '../options';
interface UninstallResult {
    moduleName: string;
    success: boolean;
}
declare function uninstall(options: Options, moduleName: string): Promise<UninstallResult>;
export { uninstall as default, UninstallResult, };
