"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Fs_1 = require("./modules/Fs");
var Os_1 = require("./modules/Os");
var Json_1 = require("./modules/Json");
var CoFounder = (function () {
    function CoFounder() {
        this.fs = new Fs_1.Fs();
        this.os = new Os_1.Os();
        this.json = new Json_1.Json(this.fs);
    }
    return CoFounder;
}());
exports.CoFounder = CoFounder;
exports.default = CoFounder;
//# sourceMappingURL=CoFounder.js.map