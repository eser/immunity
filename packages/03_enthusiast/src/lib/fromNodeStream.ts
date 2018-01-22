import { Readable } from 'stream';

class DynamicIterator<T> implements IterableIterator<T | null> {
    source: Readable;
    size?: number;
    nextPointer: () => T | null;

    constructor(source: Readable, size?: number) {
        this.source = source;
        this.size = size;
    }

    next(): IteratorResult<T | null> {
        const result = this.nextPointer();

        if (result !== null) {
            return { done: false, value: result };
        }

        return { done: true, value: null };
    }

    [Symbol.iterator](): IterableIterator<T | null> {
        return this;
    }
}

function fromNodeStream(source: Readable, size?: number): Promise<DynamicIterator<any>> {
    return new Promise((resolve, reject) => {
        const dynamicIterator = new DynamicIterator<any>(source, size);

        source.on('readable', () => {
            dynamicIterator.nextPointer = () => {
                const buffer = source.read(size);

                if (buffer === null) {
                    return null;
                }

                return { type: 'chunk', data: buffer };
            };

            resolve(dynamicIterator);
        });
    });
}

export {
    DynamicIterator,
    fromNodeStream as default,
};
