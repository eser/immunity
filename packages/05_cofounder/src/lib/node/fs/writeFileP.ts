import * as path from 'path';
import mkdirP from './mkdirP';
import writeFile from './writeFile';

async function writeFileP(pathstr, content, options?): Promise<void> {
    const parentDirectory = path.dirname(pathstr);

    await mkdirP(parentDirectory);

    await writeFile(pathstr, content, options);
}

export {
    writeFileP as default,
};
