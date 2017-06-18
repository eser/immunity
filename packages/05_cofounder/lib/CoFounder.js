"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Fs_1 = require("./modules/Fs");
const Os_1 = require("./modules/Os");
const Json_1 = require("./modules/Json");
class CoFounder {
    constructor() {
        this.fs = new Fs_1.Fs();
        this.os = new Os_1.Os();
        this.json = new Json_1.Json(this.fs);
    }
}
exports.CoFounder = CoFounder;
exports.default = CoFounder;
//# sourceMappingURL=CoFounder.js.map