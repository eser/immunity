declare class CustomIterator<T> implements IterableIterator<T | null> {
    nextPointer: () => T | null;
    constructor(nextPointer: () => T | null);
    next(): IteratorResult<T | null>;
    [Symbol.iterator](): IterableIterator<T | null>;
}
export { CustomIterator as default, };
