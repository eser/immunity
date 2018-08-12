import * as fs from 'fs';

function rmdir(pathstr): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        fs.rmdir(
            pathstr,
            (err) => {
                if (err) {
                    reject(err);

                    return;
                }

                resolve();
            },
        );
    });
}

export {
    rmdir as default,
};
