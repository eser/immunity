interface CofounderFsMethods {
    cp(pathstr: string, dest: string): void;
    cpP(str: any, dest: any): Promise<void>;
    glob(str: any, options?: any): Promise<any>;
    lstat(pathstr: any): Promise<any>;
    mkdir(pathstr: string, mode?: any): Promise<void>;
    mkdirP(pathstr: string, mode?: any): Promise<void>;
    mv(pathstr: any, dest: any): Promise<void>;
    mvP(str: any, dest: any): Promise<void>;
    readdir(pathstr: any, options?: any): Promise<any>;
    readFile(pathstr: any, options?: any): Promise<any>;
    rm(pathstr: any): Promise<void>;
    rmdir(pathstr: any): Promise<void>;
    rmdirP(pathstr: any): Promise<void>;
    rmP(str: any, recursiveForDirectories: any): Promise<void>;
    writeFile(pathstr: any, content: any, options?: any): Promise<void>;
    writeFileP(pathstr: any, content: any, options?: any): Promise<void>;
}
interface CofounderJsonMethods {
    loadFile(pathstr: string): Promise<any>;
    saveFile(pathstr: string, objectContent: any): Promise<void>;
}
interface CofounderOsMethods {
    shell(command: string, args: Array<any>, env?: {
        [key: string]: string;
    }): any;
}
interface CofounderMethods {
    fs: CofounderFsMethods;
    json: CofounderJsonMethods;
    os: CofounderOsMethods;
}
export { CofounderMethods as default, CofounderFsMethods, CofounderJsonMethods, CofounderOsMethods, };
