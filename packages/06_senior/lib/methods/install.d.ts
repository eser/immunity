import Options from '../options';
interface InstallResult {
    moduleName: string;
    success: boolean;
}
declare function install(options: Options, moduleName: string): Promise<InstallResult>;
export { install as default, InstallResult, };
