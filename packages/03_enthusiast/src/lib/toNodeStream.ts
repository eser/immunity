import { Writable } from 'stream';

function toNodeStream(target: Writable): (value: any) => Promise<any> {
    return (value: any): Promise<any> => {
        return new Promise((resolve, reject) => {
            const callback = () => resolve(value);

            const result = target.write(value);

            if (result) {
                target.once('drain', callback);
            }
            else {
                process.nextTick(callback);
            }
        });
    };
}

export {
    toNodeStream as default,
};
