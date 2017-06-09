"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var childProcess = require("child_process");
var immunity = require("immunity");
var Os = (function () {
    function Os() {
    }
    Os.prototype.shell = function (command, args, env) {
        if (args === void 0) { args = []; }
        var env_ = (env === undefined) ?
            process.env :
            immunity.appendToObject(process.env, env);
        var proc = childProcess.spawnSync(command, args, {
            stdio: 'inherit',
            shell: true,
            env: env_,
            encoding: 'utf8'
        });
        process.on('SIGTERM', function () { return proc.kill('SIGTERM'); });
        return proc;
    };
    return Os;
}());
exports.Os = Os;
exports.default = Os;
//# sourceMappingURL=Os.js.map