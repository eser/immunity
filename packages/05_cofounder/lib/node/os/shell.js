"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var childProcess = tslib_1.__importStar(require("child_process"));
var appendToObject_1 = tslib_1.__importDefault(require("immunity/lib/appendToObject"));
var emptyArray = [];
function shell(command, args, env) {
    if (args === void 0) { args = emptyArray; }
    var env_ = (env === undefined) ?
        process.env :
        appendToObject_1.default(process.env, env);
    var proc = childProcess.spawnSync(command, args, {
        stdio: 'inherit',
        shell: true,
        env: env_,
        encoding: 'utf8',
    });
    process.on('SIGTERM', function () { return proc.kill('SIGTERM'); });
    return proc;
}
exports.default = shell;
//# sourceMappingURL=shell.js.map