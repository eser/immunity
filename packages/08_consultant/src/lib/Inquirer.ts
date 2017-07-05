import inquirer = require('inquirer');
import { ConsultationResult, ConsultationError } from './Consultation';
import { Rule } from './Rule';

export class Inquirer {
    async inquire(rules: Rule) : Promise<ConsultationResult> {
        return Promise.resolve({
            tags: [],
            values: {},
            isValid: false,
            isCancelled: true,
            errors: {}
        });
    }
};

export default Inquirer;
