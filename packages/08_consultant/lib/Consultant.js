"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ArgsParser_1 = require("./ArgsParser");
const Types_1 = require("./Types");
const Consultation_1 = require("./Consultation");
const HelpDumper_1 = require("./HelpDumper");
const Rule_1 = require("./Rule");
class Consultant {
    constructor(rules) {
        this.rules = rules;
    }
    async fromObject(argv) {
        const consultation = new Consultation_1.Consultation(this.rules, argv);
        return await consultation.validate();
    }
    async fromString(args) {
        const argv = ArgsParser_1.ArgsParser.parse(args);
        return await this.fromObject(argv);
    }
    async fromCommandLine() {
        const args = process.argv.slice(2).join(' ');
        return await this.fromString(args);
    }
    async fromInquiry() {
        const consultation = new Consultation_1.Consultation(this.rules);
        return await consultation.inquire();
    }
    async getRule(predicate, node = this.rules) {
        const children = await Rule_1.getRuleChildren(node);
        if (children !== undefined) {
            for (const childKey in children) {
                const child = children[childKey];
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
    async getRuleById(id) {
        return await this.getRule((key, rule) => rule.id === id);
    }
    async help() {
        const dumper = new HelpDumper_1.HelpDumper();
        await dumper.dump(this.rules, process.stdout);
    }
    async helpForId(id) {
        const rule = await this.getRuleById(id), dumper = new HelpDumper_1.HelpDumper();
        await dumper.dump(rule, process.stdout);
    }
}
Consultant.types = Types_1.Types;
exports.Consultant = Consultant;
exports.default = Consultant;
//# sourceMappingURL=Consultant.js.map