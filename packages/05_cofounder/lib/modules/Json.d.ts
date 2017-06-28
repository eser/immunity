import Fs from './Fs';
export declare class Json {
    fs: Fs;
    constructor(fs: Fs);
    loadFile(pathstr: string): Promise<any>;
    saveFile(pathstr: string, objectContent: any): Promise<void>;
}
export default Json;
