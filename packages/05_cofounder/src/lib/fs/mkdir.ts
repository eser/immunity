import fs = require('fs');

function mkdir(pathstr, mode) {
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
