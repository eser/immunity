"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Json {
    constructor(fs) {
        this.fs = fs;
    }
    async loadFile(pathstr) {
        const plainContent = await this.fs.readFile(pathstr);
        return JSON.parse(plainContent);
    }
    async saveFile(pathstr, objectContent) {
        const plainContent = JSON.stringify(objectContent, null, '  ');
        await this.fs.writeFile(pathstr, plainContent);
    }
}
exports.Json = Json;
exports.default = Json;
//# sourceMappingURL=Json.js.map