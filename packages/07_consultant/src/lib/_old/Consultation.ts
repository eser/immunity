import Inquirer from './Inquirer';
import Rule from './Rule';
import Validator from './Validator';

interface ConsultationError {
    error: string;
}

interface ConsultationResult {
    commandId?: string,
    // tags: string[],
    values: object;
    isValid: boolean;
    isCancelled: boolean;
    errors: { [key: string]: ConsultationError[] };
}

class Consultation {
    rules: Rule;
    source?: object;

    constructor(rules: Rule, argv?: object) {
        this.rules = rules;
        this.source = argv;
    }

    async validate(): Promise<ConsultationResult> {
        const validator = new Validator();

        if (this.source === undefined) {
            throw new Error('source is empty.');
        }

        return await validator.validate(this.rules, this.source);
    }

    async inquire(): Promise<ConsultationResult> {
        const inquirer = new Inquirer();

        return await inquirer.inquire(this.rules);
    }
}

export {
    ConsultationError,
    ConsultationResult,
    Consultation as default,
};
