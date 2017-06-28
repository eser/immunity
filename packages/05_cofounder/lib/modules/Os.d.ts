/// <reference types="node" />
import childProcess = require('child_process');
export declare class Os {
    shell(command: string, args?: never[], env?: {
        [key: string]: string;
    }): childProcess.SpawnSyncReturns<string>;
}
export default Os;
