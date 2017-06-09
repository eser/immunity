"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yargsParser = require("yargs-parser");
var yargsConfiguration = {
    configuration: {
        'short-option-groups': false,
        'camel-case-expansion': true,
        'dot-notation': false,
        'parse-numbers': false,
        'boolean-negation': true
    }
};
var ArgsParser = (function () {
    function ArgsParser() {
    }
    ArgsParser.parse = function (args) {
        return yargsParser(args, yargsConfiguration);
    };
    return ArgsParser;
}());
exports.ArgsParser = ArgsParser;
exports.default = ArgsParser;
//# sourceMappingURL=ArgsParser.js.map