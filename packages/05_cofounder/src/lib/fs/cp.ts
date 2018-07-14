import fs = require('fs');

function cp(pathstr, dest): void {
    fs.createReadStream(pathstr)
        .pipe(fs.createWriteStream(dest));
}

export {
    cp as default,
};
