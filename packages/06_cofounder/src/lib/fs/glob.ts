import globAll = require('glob-all');
import appendToObject from 'immunity/lib/appendToObject';

function glob(str, options?): Promise<any> {
    return new Promise((resolve, reject) => {
        const defaultOptions = {
            nosort: true,
            nonull: false,
            nodir: true,
        };

        const options_ = (options === undefined) ?
            defaultOptions :
            appendToObject(options, defaultOptions);

        globAll(
            str,
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
    glob as default,
};
