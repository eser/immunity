import * as fs from 'fs';

function rm(pathstr): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        fs.unlink(
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
    rm as default,
};
