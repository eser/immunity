import inquirer = require('inquirer');
// import immunity = require('immunity');
import { ConsultationResult, ConsultationError } from './Consultation';
import { Rule } from './Rule';

// export interface InquiryResult {
//     cancelled: boolean;
//     argv: object;
// }

// export interface QuestionInfo {
//     key: string;
//     rule: Rule;
//     inquirerInput: object;
// }

export class Inquirer {
//     cancelValue: any;
//     questionInfo: QuestionInfo[];

//     constructor(cancelValue: any, questionInfo: QuestionInfo[] = []) {
//         this.cancelValue = cancelValue;
//         this.questionInfo = questionInfo;
//     }

//     importRuleForStringWithMultipleChoices(key: string, rule: Rule): Inquiry {
//         let choices = rule.values;

//         if (rule.cancelValue !== undefined) {
//             choices = immunity.appendToArray(choices, new inquirer.Separator());

//             if (rule.cancelValue.constructor === String) {
//                 choices = immunity.appendToArray(
//                     choices,
//                     {
//                         name: rule.cancelValue,
//                         value: this.cancelValue,
//                         'short': rule.cancelValue
//                     }
//                 );
//             }
//             else {
//                 choices = immunity.appendToArray(
//                     choices,
//                     {
//                         name: rule.cancelValue.name,
//                         value: this.cancelValue,
//                         'short': rule.cancelValue.short
//                     }
//                 );
//             }
//         }

//         return new Inquiry(
//             this.cancelValue,
//             immunity.appendToArray(
//                 this.questionInfo,
//                 {
//                     key: key,
//                     rule: rule,
//                     inquirerInput: {
//                         type: 'list',
//                         name: 'value',
//                         message: rule.label,
//                         choices: choices // ,
//                         // 'default': rule.default
//                     }
//                 }
//             )
//         );
//     }

//     importRuleForString(key: string, rule: Rule): Inquiry {
//         if (rule.values !== undefined) {
//             return this.importRuleForStringWithMultipleChoices(key, rule);
//         }

//         return new Inquiry(
//             this.cancelValue,
//             immunity.appendToArray(
//                 this.questionInfo,
//                 {
//                     key: key,
//                     rule: rule,
//                     inquirerInput: {
//                         type: 'input',
//                         name: 'value',
//                         message: rule.label,
//                         // 'default': rule.default,
//                         validate: rule.validate
//                         // TODO wrap validate to accept empty input
//                     }
//                 }
//             )
//         );
//     }

//     importRuleForBoolean(key: string, rule: Rule): Inquiry {
//         return new Inquiry(
//             this.cancelValue,
//             immunity.appendToArray(
//                 this.questionInfo,
//                 {
//                     key: key,
//                     rule: rule,
//                     inquirerInput: {
//                         type: 'confirm',
//                         name: 'value',
//                         message: rule.label,
//                         'default': rule.default
//                     }
//                 }
//             )
//         );
//     }

//     importRule(key: string, rule: Rule): Inquiry {
//         if (rule.uiHidden) {
//             return this;
//         }

//         if (rule.type === String) {
//             return this.importRuleForString(key, rule);
//         }

//         if (rule.type === Boolean) {
//             return this.importRuleForBoolean(key, rule);
//         }

//         return this;
//     }

//     importRules(rules: RuleCollection): Inquiry {
//         let instance: Inquiry = this;

//         for (const ruleKey of Object.keys(rules)) {
//             const rule = rules[ruleKey];

//             instance = instance.importRule(ruleKey, rule);
//         }

//         return instance;
//     }

//     async prompt(): Promise<InquiryResult> {
//         const argv = {};

//         for (const questionInfo of this.questionInfo) {
//             const result = await inquirer.prompt(questionInfo.inquirerInput);

//             if ((questionInfo.rule.cancelValue !== undefined) && (result.value === this.cancelValue)) {
//                 return {
//                     cancelled: true,
//                     argv: argv
//                 };
//             }

//             if (result.value.length === 0) {
//                 immunity.appendToObject(argv, {
//                     [questionInfo.key]: questionInfo.rule.default
//                 });
//             }
//             else if (questionInfo.rule.max === undefined || questionInfo.rule.max > 1) {
//                 immunity.appendToObject(argv, {
//                     [questionInfo.key]: [ result.value ]
//                 });
//             }
//             else {
//                 immunity.appendToObject(argv, {
//                     [questionInfo.key]: result.value
//                 });
//             }
//         }

//         return {
//             cancelled: false,
//             argv: argv
//         };
//     }

    async inquire(rules: Rule) : Promise<ConsultationResult> {
        // if (options.title !== undefined) {
        //     console.log(`${colors.green('>>')} ${colors.bold(options.title)}`);
        // }

        // const inquiry = new Inquiry(options.cancelValue);

        // inquiry.importRules(rules);

        // // TODO enter terminated input array, then default value if no input
        // const result = await inquiry.prompt();

        // if (result.cancelled) {
        //     return null;
        // }

        // return this.fromObject(result.argv);

        // TODO
        return Promise.resolve({
            values: {},
            isValid: false,
            isCancelled: true,
            errors: {}
        });
    }
}

export default Inquirer;
