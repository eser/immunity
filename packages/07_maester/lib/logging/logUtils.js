"use strict";
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
Object.defineProperty(exports, "__esModule", { value: true });
var LogUtils = (function () {
    function LogUtils() {
    }
    LogUtils.linkLogMethods = function (logManager, target) {
        var e_1, _a;
        target.log = logManager.log.bind(logManager);
        target.logAsync = logManager.logAsync.bind(logManager);
        target.write = logManager.write.bind(logManager);
        target.writeAsync = logManager.writeAsync.bind(logManager);
        var _loop_1 = function (severity) {
            target[severity] = function (message, extraData) { return logManager.log(severity, message, extraData); };
        };
        try {
            for (var _b = __values(Object.keys(logManager.severities)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var severity = _c.value;
                _loop_1(severity);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    LogUtils.unlinkLogMethods = function (logManager, target) {
        var e_2, _a;
        try {
            for (var _b = __values(Object.keys(logManager.severities)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var severity = _c.value;
                delete target[severity];
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        delete target.log;
        delete target.logAsync;
    };
    return LogUtils;
}());
exports.default = LogUtils;
//# sourceMappingURL=logUtils.js.map