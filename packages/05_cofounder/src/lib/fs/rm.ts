import fs = require('fs');

export function rm(pathstr): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        fs.unlink(
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

export default rm;
