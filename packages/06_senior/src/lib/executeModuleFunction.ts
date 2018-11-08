import appendToObject from 'immunity/lib/appendToObject';

async function executeModuleFunction(moduleFunction: () => any, globals: { [key: string]: any }): Promise<any> {
    let gBackups = {};

    for (const globalKey of Object.keys(globals)) {
        gBackups = appendToObject(gBackups, { [globalKey]: global[globalKey] });
        global[globalKey] = globals[globalKey];
    }

    try {
        // TODO reconsider
        return await moduleFunction()();
    }
    finally {
        for (const globalKey of Object.keys(globals)) {
            global[globalKey] = gBackups[globalKey];
        }
    }
}

export {
    executeModuleFunction as default,
};
