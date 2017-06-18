import Fs from './Fs';
export declare class Json {
    fs: Fs;
    constructor(fs: Fs);
    loadFile(pathstr: any): Promise<any>;
    saveFile(pathstr: any, objectContent: any): Promise<void>;
}
export default Json;
