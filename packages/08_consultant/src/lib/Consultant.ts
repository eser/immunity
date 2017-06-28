import immunity = require('immunity');
import { ArgsParser } from './ArgsParser';
import { Types } from './Types';
import { Consultation, ConsultationResult } from './Consultation';
import { HelpDumper } from './HelpDumper';
import { Rule, getRuleChildren } from './Rule';
import { pathNotation } from './utils/pathNotation';

export class Consultant {
    static types = Types;

    rules: Rule;

    constructor(rules: Rule) {
        this.rules = rules;
    }

    // static pickRulesOf(source: Rule, path: string, keys?: string[]): Rule | undefined {
    //     // TODO: .getChildren() ?
    //     const target = pathNotation(
    //         source.children,
    //         path.replace(/\./g, '.children.')
    //     );

    //     if (keys === undefined) {
    //         return target;
    //     }

    //     return assign(
    //         {},
    //         target,
    //         {
    //             children: immunity.pickFromObject(target.children, keys).items
    //         }
    //     );
    // }

    // pickRules(path: string, keys?: string[]): Rule | undefined {
    //     return Consultant.pickRulesOf(this.rules, path, keys);
    // }

    async fromObject(argv: object): Promise<ConsultationResult> {
        const consultation = new Consultation(this.rules, argv);

        return await consultation.validate();
    }

    async fromString(args: string): Promise<ConsultationResult> {
        const argv = ArgsParser.parse(args);

        return await this.fromObject(argv);
    }

    async fromCommandLine(): Promise<ConsultationResult> {
        const args = process.argv.slice(2).join(' ');

        return await this.fromString(args);
    }

    async fromInquiry(): Promise<ConsultationResult> {
        const consultation = new Consultation(this.rules);

        return await consultation.inquire();
    }

    async getRule(predicate: (key: string, rule: Rule) => boolean, node: Rule = this.rules) {
        const children = await getRuleChildren(node);

        if (children !== undefined) {
            for (const childKey in children) {
                const child: Rule = children[childKey];

                if (predicate(childKey, child)) {
                    return child;
                }

                if (child.children !== undefined || child.getChildren !== undefined) {
                    const result = this.getRule(predicate, child);

                    if (result !== undefined) {
                        return result;
                    }
                }
            }
        }

        return undefined;
    }

    async getRuleById(id: string) {
        return await this.getRule((key, rule) => rule.id === id);
    }

    async help() {
        const dumper = new HelpDumper();

        await dumper.dump(this.rules, process.stdout);
    }

    async helpForId(id: string) {
        const rule = await this.getRuleById(id),
            dumper = new HelpDumper();

        await dumper.dump(rule, process.stdout);
    }
}

export default Consultant;
