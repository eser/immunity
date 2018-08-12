import * as path from 'path';
import glob from './glob';
import globParentOf from './globParentOf';
import mkdirP from './mkdirP';
import mv from './mv';

async function mvP(str, dest): Promise<void> {
    const list = await glob(str, { nodir: false });

    let createdDirectories: Array<string> = [];

    for (const item of list) {
        const globParent = globParentOf(str, item);
        const relativePath = (globParent !== null) ? item.substring(globParent.length) : item;
        const relativeBasePath = path.dirname(relativePath);

        if (createdDirectories.indexOf(relativeBasePath) === -1) {
            await mkdirP(path.join(dest, relativeBasePath));
            createdDirectories = [ ...createdDirectories, relativeBasePath ];
        }

        const destFile = path.join(dest, relativePath);

        await mv(item, destFile);
    }
}

export {
    mvP as default,
};
