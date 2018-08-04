import { Writable } from 'stream';

function toNodeStream(target: Writable): (value: any) => Promise<any> {
    return (value: any): Promise<any> => {
        return new Promise((resolve, reject) => {
            const errorCallback = (err) => reject(err);

            target.on('error', errorCallback);
            target.write(value, () => resolve(value));
            target.removeListener('error', errorCallback);
        });
    };
}

export {
    toNodeStream as default,
};
