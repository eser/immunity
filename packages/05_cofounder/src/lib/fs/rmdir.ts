import fs = require('fs');

export function rmdir(pathstr): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        fs.rmdir(
            pathstr,
            (err) => {
                if (err) {
                    reject(err);

                    return;
                }

                resolve();
            }
        );
    });
};

export default rmdir;
