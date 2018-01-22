import { Readable } from 'stream';

import CustomIterator from './types/customIterator';

function fromNodeStream(source: Readable, size?: number): Promise<CustomIterator<any>> {
    return new Promise((resolve, reject) => {
        source.on('readable', () => {
            const nextPointer = () => {
                const buffer = source.read(size);

                if (buffer === null) {
                    return null;
                }

                return { type: 'chunk', data: buffer };
            };

            resolve(new CustomIterator<any>(nextPointer));
        });
    });
}

export {
    CustomIterator,
    fromNodeStream as default,
};
