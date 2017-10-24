import globParent from './globParent';

function globParentOf(str, pathstr) {
    const str_ = Array.isArray(str) ? str : [ str ];

    for (const strItem of str_) {
        if (strItem[0] === '!') {
            continue;
        }

        const strItemParent = globParent(strItem);

        if ((pathstr.length > strItemParent.length) &&
            (pathstr.substring(0, strItemParent.length) === strItemParent)
        ) {
            return strItemParent;
        }
    }

    return null;
}

export {
    globParentOf as default,
};
