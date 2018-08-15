import appendToObject from 'immunity/lib/appendToObject';

function loadFile(filepath: string, globals: { [key: string]: any }): Promise<any> {
    let gBackups = {};

    for (const globalKey of Object.keys(globals)) {
        gBackups = appendToObject(gBackups, { [globalKey]: global[globalKey] });
        global[globalKey] = globals[globalKey];
    }

    try {
        const loadedModule = require(filepath);

        return Promise.resolve(loadedModule);
    }
    catch (ex) {
        if (ex.code !== 'MODULE_NOT_FOUND') {
            throw ex;
        }
    }
    finally {
        for (const globalKey of Object.keys(globals)) {
            global[globalKey] = gBackups[globalKey];
        }
    }

    return Promise.resolve(null);
}

export {
    loadFile as default,
};
