export declare class Json {
    constructor(fs: any);
    loadFile(pathstr: any): Promise<any>;
    saveFile(pathstr: any, objectContent: any): Promise<void>;
}
export default Json;
