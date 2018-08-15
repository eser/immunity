import * as fs from 'fs';

function mkdir(pathstr: string, mode?): Promise<void> {
    return new Promise((resolve, reject) => {
        const callback = (err) => {
            if (err) {
                reject(err);

                return;
            }

            resolve();
        };

        if (mode === undefined) {
            fs.mkdir(pathstr, callback);
        }
        else {
            fs.mkdir(pathstr, mode, callback);
        }
    });
}

export {
    mkdir as default,
};
