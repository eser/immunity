/// <reference types="node" />
import { Readable } from 'stream';
declare class DynamicIterator<T> implements IterableIterator<T | null> {
    source: Readable;
    size?: number;
    nextPointer: () => T | null;
    constructor(source: Readable, size?: number);
    next(): IteratorResult<T | null>;
    [Symbol.iterator](): IterableIterator<T | null>;
}
declare function fromNodeStream(source: Readable, size?: number): Promise<DynamicIterator<any>>;
export { DynamicIterator, fromNodeStream as default };
