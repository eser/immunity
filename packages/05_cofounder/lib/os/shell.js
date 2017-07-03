"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const childProcess = require("child_process");
const appendToObject_1 = require("immunity/lib/appendToObject");
const emptyArray = [];
function shell(command, args = emptyArray, env) {
    const env_ = (env === undefined) ?
        process.env :
        appendToObject_1.appendToObject(process.env, env);
    const proc = childProcess.spawnSync(command, args, {
        stdio: 'inherit',
        shell: true,
        env: env_,
        encoding: 'utf8'
    });
    process.on('SIGTERM', () => proc.kill('SIGTERM'));
    return proc;
}
exports.shell = shell;
;
exports.default = shell;
//# sourceMappingURL=shell.js.map