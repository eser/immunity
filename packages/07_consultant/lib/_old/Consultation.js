"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Inquirer_1 = require("./Inquirer");
const Validator_1 = require("./Validator");
class Consultation {
    constructor(rules, argv) {
        this.rules = rules;
        this.source = argv;
    }
    async validate() {
        const validator = new Validator_1.default();
        if (this.source === undefined) {
            throw new Error('source is empty.');
        }
        return await validator.validate(this.rules, this.source);
    }
    async inquire() {
        const inquirer = new Inquirer_1.default();
        return await inquirer.inquire(this.rules);
    }
}
exports.default = Consultation;
//# sourceMappingURL=Consultation.js.map