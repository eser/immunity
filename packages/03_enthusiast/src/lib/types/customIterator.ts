class CustomIterator<T> implements IterableIterator<T | null> {
    nextPointer: () => T | null;

    constructor(nextPointer: () => T | null) {
        this.nextPointer = nextPointer;
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

export {
    CustomIterator as default,
};
