/// <reference types="node" />
import { Readable } from 'stream';
import CustomIterator from './types/customIterator';
declare function fromNodeStream(source: Readable, size?: number): Promise<CustomIterator<any>>;
export { CustomIterator, fromNodeStream as default, };
