"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LogUtils {
    static linkLogMethods(logManager, target) {
        target.log = logManager.log.bind(logManager);
        target.logAsync = logManager.logAsync.bind(logManager);
        target.write = logManager.write.bind(logManager);
        target.writeAsync = logManager.writeAsync.bind(logManager);
        for (const severity of Object.keys(logManager.severities)) {
            target[severity] = (message, extraData) => logManager.log(severity, message, extraData);
        }
    }
    static unlinkLogMethods(logManager, target) {
        for (const severity of Object.keys(logManager.severities)) {
            delete target[severity];
        }
        delete target.log;
        delete target.logAsync;
    }
}
exports.default = LogUtils;
//# sourceMappingURL=logUtils.js.map