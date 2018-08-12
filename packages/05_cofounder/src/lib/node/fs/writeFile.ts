import * as fs from 'fs';
import appendToObject from 'immunity/lib/appendToObject';

function writeFile(pathstr, content, options?): Promise<void> {
    return new Promise((resolve, reject) => {
        const defaultOptions = { encoding: 'utf8' };

        const options_ = (options === undefined) ?
            defaultOptions :
            appendToObject(options, defaultOptions);

        fs.writeFile(
            pathstr,
            content,
            options_,
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
    writeFile as default,
};
