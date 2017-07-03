import path = require('path');
import { appendToArray } from 'immunity/lib/appendToArray';
import { glob } from './glob';
import { globParentOf } from './globParentOf';
import { mkdirP } from './mkdirP';
import { mv } from './mv';

export async function mvP(str, dest) {
    const list = await glob(str, { nodir: false });

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

        mv(item, destFile);
    }
};

export default mvP;
