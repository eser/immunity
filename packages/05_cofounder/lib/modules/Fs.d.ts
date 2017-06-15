export declare class Fs {
    globParent(str: any): any;
    globParentOf(str: any, pathstr: any): any;
    readdir(pathstr: any, options: any): Promise<{}>;
    glob(str: any, options: any): Promise<{}>;
    mkdir(pathstr: any, mode: any): Promise<{}>;
    mkdirP(pathstr: any, mode: any): Promise<void>;
    rmdir(pathstr: any): Promise<{}>;
    rmdirP(pathstr: any): Promise<void>;
    lstat(pathstr: any): Promise<{}>;
    readFile(pathstr: any, options: any): Promise<{}>;
    writeFile(pathstr: any, content: any, options: any): Promise<{}>;
    writeFileP(pathstr: any, content: any, options: any): Promise<void>;
    cp(pathstr: any, dest: any): void;
    cpP(str: any, dest: any): Promise<void>;
    mv(pathstr: any, dest: any): Promise<{}>;
    mvP(str: any, dest: any): Promise<void>;
    rm(pathstr: any): Promise<{}>;
    rmP(str: any, recursiveForDirectories: any): Promise<void>;
}
export default Fs;
