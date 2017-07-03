import path = require('path');
import { mkdirP } from './mkdirP';
import { writeFile } from './writeFile';

export async function writeFileP(pathstr, content, options?) {
    const parentDirectory = path.dirname(pathstr);

    await mkdirP(parentDirectory);

    await writeFile(pathstr, content, options);
};

export default writeFileP;
