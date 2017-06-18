"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const yargsParser = require("yargs-parser");
const yargsConfiguration = {
    configuration: {
        'short-option-groups': false,
        'camel-case-expansion': true,
        'dot-notation': false,
        'parse-numbers': false,
        'boolean-negation': true
    }
};
class ArgsParser {
    static parse(args) {
        return yargsParser(args, yargsConfiguration);
    }
}
exports.ArgsParser = ArgsParser;
exports.default = ArgsParser;
//# sourceMappingURL=ArgsParser.js.map