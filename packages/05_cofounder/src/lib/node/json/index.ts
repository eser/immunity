import { CofounderJsonMethods } from '../../methods';

import loadFile from './loadFile';
import saveFile from './saveFile';

const jsonMethod: CofounderJsonMethods = {
    loadFile,
    saveFile,
};

export {
    jsonMethod as default,
    loadFile,
    saveFile,
};
