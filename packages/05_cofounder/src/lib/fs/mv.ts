import fs = require('fs');

export function mv(pathstr, dest): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        fs.rename(
            pathstr,
            dest,
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

export default mv;
