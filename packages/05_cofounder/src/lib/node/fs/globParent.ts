import globParentLib = require('glob-parent');

function globParent(str) {
    return globParentLib(str);
}

export {
    globParent as default,
};
