interface CofounderFsMethods {
    cp(pathstr: string, dest: string): void;
    cpP(str, dest): Promise<void>;
    glob(str, options?): Promise<any>;
    lstat(pathstr): Promise<any>;
    mkdir(pathstr: string, mode?): Promise<void>;
    mkdirP(pathstr: string, mode?): Promise<void>;
    mv(pathstr, dest): Promise<void>;
    mvP(str, dest): Promise<void>;
    readdir(pathstr, options?): Promise<any>;
    readFile(pathstr, options?): Promise<any>;
    rm(pathstr): Promise<void>;
    rmdir(pathstr): Promise<void>;
    rmdirP(pathstr): Promise<void>;
    rmP(str, recursiveForDirectories): Promise<void>;
    writeFile(pathstr, content, options?): Promise<void>;
    writeFileP(pathstr, content, options?): Promise<void>;
}

interface CofounderJsonMethods {
    loadFile(pathstr: string): Promise<any>;
    saveFile(pathstr: string, objectContent: any): Promise<void>;
}

interface CofounderOsMethods {
    shell(command: string, args: Array<any>, env?: { [key: string]: string }): any;
}

interface CofounderMethods {
    fs: CofounderFsMethods;
    json: CofounderJsonMethods;
    os: CofounderOsMethods;
}

export {
    CofounderMethods as default,
    CofounderFsMethods,
    CofounderJsonMethods,
    CofounderOsMethods,
};
