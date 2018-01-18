/// <reference types="node" />
import childProcess = require('child_process');
declare function shell(command: string, args?: never[], env?: {
    [key: string]: string;
}): childProcess.SpawnSyncReturns<string>;
export { shell as default };
