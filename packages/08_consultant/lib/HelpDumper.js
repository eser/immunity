"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors = require("colors/safe");
const Rule_1 = require("./Rule");
const Types_1 = require("./Types");
const alignedString_1 = require("./utils/alignedString");
const tabstops = [0, 35];
class HelpDumper {
    async dumpCommands(children, stream, indentation) {
        let lines = 0;
        for (const childKey in children) {
            const child = children[childKey];
            if (child.helpHidden) {
                continue;
            }
            if (child.type !== Types_1.Types.command) {
                continue;
            }
            if (lines === 0) {
                stream.write(`${indentation}${colors.white('Commands:')}\n`);
            }
            lines += 1;
            let lineOutput = `${childKey}`;
            if (child.aliases !== undefined) {
                for (const alias of child.aliases) {
                    lineOutput += `, ${alias}`;
                }
            }
            if (child.parameter !== undefined) {
                lineOutput += ` ${child.parameter}`;
            }
            stream.write(`${indentation}${alignedString_1.alignedString([
                tabstops[0] - indentation.length, colors.gray(lineOutput),
                tabstops[1] - indentation.length, colors.gray(child.description)
            ])}\n`);
            if (child.helpDetails) {
                lines += await this.dumpSingle(child, stream, `${indentation}    `);
            }
        }
        return lines;
    }
    dumpParameters(children, stream, indentation) {
        let lines = 0;
        for (const childKey in children) {
            const child = children[childKey];
            if (child.helpHidden) {
                continue;
            }
            if (child.type === Types_1.Types.command) {
                continue;
            }
            if (lines === 0) {
                stream.write(`${indentation}${colors.white('Options:')}\n`);
            }
            lines += 1;
            let lineOutput = `${(childKey.length > 1) ? '--' : '-'}${childKey}`;
            if (child.aliases !== undefined) {
                for (const alias of child.aliases) {
                    lineOutput += `, ${(alias.length > 1) ? '--' : '-'}${alias}`;
                }
            }
            if (child.parameter !== undefined) {
                lineOutput += ` ${child.parameter}`;
            }
            stream.write(`${indentation}${alignedString_1.alignedString([
                tabstops[0] - indentation.length, colors.gray(lineOutput),
                tabstops[1] - indentation.length, colors.gray(child.description)
            ])}\n`);
        }
        return lines;
    }
    async dumpSingle(rule, stream, indentation) {
        let lines = 0;
        const children = await Rule_1.getRuleChildren(rule);
        if (children !== undefined) {
            const parameterLines = this.dumpParameters(children, stream, indentation);
            if (parameterLines > 0) {
                stream.write('\n');
                lines += parameterLines;
            }
            const commandLines = await this.dumpCommands(children, stream, indentation);
            if (commandLines > 0) {
                stream.write('\n');
                lines += commandLines;
            }
        }
        if (lines === 0) {
            stream.write(`${colors.gray('No options are available.')}\n\n`);
            lines += 2;
        }
        return lines;
    }
    async dump(rules, stream, indentation = '') {
        if (rules.label !== undefined) {
            stream.write(`${indentation}${rules.label}\n`);
            stream.write(`${indentation}${'='.repeat(rules.label.length)}\n`);
            stream.write('\n');
            if (rules.description !== undefined) {
                stream.write(`${indentation}${rules.description}\n`);
                stream.write('\n\n');
            }
        }
        await this.dumpSingle(rules, stream, indentation);
    }
}
exports.HelpDumper = HelpDumper;
exports.default = HelpDumper;
//# sourceMappingURL=HelpDumper.js.map