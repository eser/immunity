import * as fs from 'fs';

function mv(pathstr, dest): Promise<void> {
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
            },
        );
    });
}

export {
    mv as default,
};
