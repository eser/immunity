import Options from '../options';
import getModuleIndex from './getModuleIndex';
import loadFile from './loadFile';

function load(options: Options, moduleName: string, globals: { [key: string]: any }, loader: (filepath: string, globals: { [key: string]: any }) => any = loadFile): any {
    const moduleIndex = getModuleIndex(options, moduleName);

    return loader(moduleIndex, globals);
}

export {
    load as default,
};
