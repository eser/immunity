"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const childProcess = require("child_process");
const immunity = require("immunity");
class Os {
    shell(command, args = [], env) {
        const env_ = (env === undefined) ?
            process.env :
            immunity.appendToObject(process.env, env);
        const proc = childProcess.spawnSync(command, args, {
            stdio: 'inherit',
            shell: true,
            env: env_,
            encoding: 'utf8'
        });
        process.on('SIGTERM', () => proc.kill('SIGTERM'));
        return proc;
    }
}
exports.Os = Os;
exports.default = Os;
//# sourceMappingURL=Os.js.map