/// <reference types="node" />
import childProcess = require('child_process');
export declare class Os {
    shell(command: any, args: never[] | undefined, env: any): childProcess.SpawnSyncReturns<string>;
}
export default Os;
