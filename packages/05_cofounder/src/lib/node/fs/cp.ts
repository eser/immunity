import * as fs from 'fs';

function cp(pathstr: fs.PathLike, dest: fs.PathLike): void {
    fs.createReadStream(pathstr)
        .pipe(fs.createWriteStream(dest));
}

export {
    cp as default,
};
