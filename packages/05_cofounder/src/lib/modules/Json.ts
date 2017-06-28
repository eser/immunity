import Fs from './Fs';

export class Json {
    fs: Fs;

    constructor(fs: Fs) {
        this.fs = fs;
    }

    async loadFile(pathstr: string) {
        const plainContent = await this.fs.readFile(pathstr);

        return JSON.parse(plainContent);
    }

    async saveFile(pathstr: string, objectContent: any) {
        const plainContent = JSON.stringify(objectContent, null, '  ');

        await this.fs.writeFile(pathstr, plainContent);
    }
}

export default Json;
