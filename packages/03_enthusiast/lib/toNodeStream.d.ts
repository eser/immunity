/// <reference types="node" />
import { Writable } from 'stream';
declare function toNodeStream(target: Writable): (value: any) => Promise<any>;
export { toNodeStream as default, };
