import * as path from 'path';
import cp from './cp';
import glob from './glob';
import globParentOf from './globParentOf';
import mkdirP from './mkdirP';

async function cpP(str, dest): Promise<void> {
    const list = await glob(str);

    let createdDirectories: Array<any> = [];

    for (const item of list) {
        const globParent = globParentOf(str, item),
            relativePath = (globParent !== null) ? item.substring(globParent.length) : item,
            relativeBasePath = path.dirname(relativePath);

        if (createdDirectories.indexOf(relativeBasePath) === -1) {
            await mkdirP(path.join(dest, relativeBasePath));
            createdDirectories = [ ...createdDirectories, relativeBasePath ];
        }

        const destFile = path.join(dest, relativePath);

        cp(item, destFile);
    }
}

export {
    cpP as default,
};
