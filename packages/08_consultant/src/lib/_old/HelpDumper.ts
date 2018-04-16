import colors = require('colors/safe');
import Rule, { RuleCollection, getRuleChildren } from './Rule';
import Types from './Types';
import alignedString from './utils/alignedString';

const tabstops = [ 0, 35 ];

class HelpDumper {
    async dumpCommands(children: RuleCollection, stream: any, indentation: string): Promise<number> {
        let lines = 0;

        for (const childKey in children) {
            const child = children[childKey];

            if (child.helpHidden) {
                continue;
            }

            if (child.type !== Types.command) {
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

            stream.write(`${indentation}${alignedString([
                tabstops[0] - indentation.length, colors.gray(lineOutput),
                tabstops[1] - indentation.length, colors.gray(child.description)
            ])}\n`);

            if (child.helpDetails) {
                lines += await this.dumpSingle(child, stream, `${indentation}    `);
            }
        }

        return lines;
    }

    dumpParameters(children: RuleCollection, stream: any, indentation: string): number {
        let lines = 0;

        for (const childKey in children) {
            const child = children[childKey];

            if (child.helpHidden) {
                continue;
            }

            if (child.type === Types.command) {
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

            stream.write(`${indentation}${alignedString([
                tabstops[0] - indentation.length, colors.gray(lineOutput),
                tabstops[1] - indentation.length, colors.gray(child.description)
            ])}\n`);
        }

        return lines;
    }

    async dumpSingle(rule: Rule, stream: any, indentation: string): Promise<number> {
        let lines = 0;

        const children = await getRuleChildren(rule);

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

    async dump(rules: Rule, stream: any, indentation: string = ''): Promise<void> {
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

export {
    HelpDumper as default,
};
