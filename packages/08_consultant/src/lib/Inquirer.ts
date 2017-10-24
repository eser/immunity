import inquirer = require('inquirer');
import { ConsultationResult } from './Consultation';
import Rule from './Rule';

class Inquirer {
    async inquire(rules: Rule) : Promise<ConsultationResult> {
        // TODO need implementation

        throw new Error('Inquirer is not implemented yet.');

        // return Promise.resolve({
        //     tags: [],
        //     values: {},
        //     isValid: false,
        //     isCancelled: true,
        //     errors: {}
        // });
    }
}

export {
    Inquirer as default,
};
