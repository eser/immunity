import LogManager from './logManager';

class LogUtils {
    static linkLogMethods(logManager: LogManager, target: any): void {
        target.log = logManager.log.bind(logManager);
        target.logAsync = logManager.logAsync.bind(logManager);

        target.write = logManager.write.bind(logManager);
        target.writeAsync = logManager.writeAsync.bind(logManager);

        for (const severity of Object.keys(logManager.severities)) {
            target[severity] = (message: string, extraData?: any) => logManager.log(severity, message, extraData);
        }
    }

    static unlinkLogMethods(logManager: LogManager, target: any): void {
        for (const severity of Object.keys(logManager.severities)) {
            // target[severity] = undefined;
            delete target[severity];
        }

        // target.log = undefined;
        delete target.log;

        // target.logAsync = undefined;
        delete target.logAsync;
    }
}

export {
    LogUtils as default,
};
