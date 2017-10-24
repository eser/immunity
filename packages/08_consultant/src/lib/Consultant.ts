import ArgsParser from './ArgsParser';
import Types from './Types';
import Consultation, { ConsultationResult } from './Consultation';
import HelpDumper from './HelpDumper';
import Rule, { getRuleChildren } from './Rule';

class Consultant {
    static types = Types;

    rules: Rule;

    constructor(rules: Rule) {
        this.rules = rules;
    }

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

    static async getRuleInternal(predicate: (key: string, rule: Rule) => boolean, node: Rule): Promise<Rule | undefined> {
        const children = await getRuleChildren(node);

        if (children !== undefined) {
            for (const childKey in children) {
                const child = children[childKey];

                if (predicate(childKey, child)) {
                    return child;
                }

                if (child.children !== undefined || child.getChildren !== undefined) {
                    const result = await Consultant.getRuleInternal(predicate, child);

                    if (result !== undefined) {
                        return result;
                    }
                }
            }
        }

        return undefined;
    }

    async getRule(predicate: (key: string, rule: Rule) => boolean): Promise<Rule | undefined> {
        return Consultant.getRuleInternal(predicate, this.rules);
    }

    async getRuleById(id: string): Promise<Rule | undefined> {
        return await this.getRule((key, rule) => rule.id === id);
    }

    async help(): Promise<void> {
        const dumper = new HelpDumper();

        await dumper.dump(this.rules, process.stdout);
    }

    async helpForId(id: string): Promise<void> {
        const rule = await this.getRuleById(id),
            dumper = new HelpDumper();

        if (rule === undefined) {
            throw new Error(`rule id '${id}' is not found.`);
        }

        await dumper.dump(rule, process.stdout);
    }
}

export {
    Consultant as default,
};
