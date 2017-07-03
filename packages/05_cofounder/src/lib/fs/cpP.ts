import path = require('path');
import { appendToArray } from 'immunity/lib/appendToArray';
import { cp } from './cp';
import { glob } from './glob';
import { globParentOf } from './globParentOf';
import { mkdirP } from './mkdirP';

export async function cpP(str, dest) {
    const list = await glob(str);

    let createdDirectories: Array<any> = [];

    for (const item of list) {
        const globParent = globParentOf(str, item),
            relativePath = (globParent !== null) ? item.substring(globParent.length) : item,
            relativeBasePath = path.dirname(relativePath);

        if (createdDirectories.indexOf(relativeBasePath) === -1) {
            await mkdirP(path.join(dest, relativeBasePath));
            createdDirectories = appendToArray(createdDirectories, relativeBasePath);
        }

        const destFile = path.join(dest, relativePath);

        cp(item, destFile);
    }
};

export default cpP;
