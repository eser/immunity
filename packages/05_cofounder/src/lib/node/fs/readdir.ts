import * as fs from 'fs';
import appendToObject from 'immunity/lib/appendToObject';

function readdir(pathstr, options?): Promise<any> {
    return new Promise((resolve, reject) => {
        const defaultOptions = { encoding: 'utf8' };

        const options_ = (options === undefined) ?
            defaultOptions :
            appendToObject(options, defaultOptions);

        fs.readdir(
            pathstr,
            options_,
            (err, contents) => {
                if (err) {
                    reject(err);

                    return;
                }

                resolve(contents);
            },
        );
    });
}

export {
    readdir as default,
};
