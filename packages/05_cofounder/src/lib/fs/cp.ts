import fs = require('fs');

export function cp(pathstr, dest): void {
    fs.createReadStream(pathstr)
        .pipe(fs.createWriteStream(dest));
};

export default cp;
