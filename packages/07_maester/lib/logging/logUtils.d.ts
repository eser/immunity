import LogManager from './logManager';
declare class LogUtils {
    static linkLogMethods(logManager: LogManager, target: any): void;
    static unlinkLogMethods(logManager: LogManager, target: any): void;
}
export { LogUtils as default, };
