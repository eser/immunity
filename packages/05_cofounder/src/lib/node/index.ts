import CofounderMethods from '../methods';

import fs from './fs/index';
import json from './json/index';
import os from './os/index';

const node: CofounderMethods = {
    fs,
    json,
    os,
};

export {
    node as default,
    fs,
    json,
    os,
};
