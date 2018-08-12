import * as fs from 'fs';

function lstat(pathstr): Promise<any> {
    return new Promise((resolve, reject) => {
        fs.lstat(
            pathstr,
            (err, stats) => {
                if (err) {
                    reject(err);

                    return;
                }

                resolve(stats);
            },
        );
    });
}

export {
    lstat as default,
};
