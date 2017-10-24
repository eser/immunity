import Types from './Types';

type ValidateMethod = (value: any) => Promise<ValidationResult>;
type ValidationResult = boolean | string;

interface Rule {
    type?: Types;
    strict?: boolean;
    aliases: string[];

    id?: string;
    label: string;
    description: string;

    parameter: string;
    values?: (string | any)[];
    cancelValue?: any;
    'default': string[];
    uiHidden?: boolean;
    helpHidden?: boolean;
    helpDetails?; boolean;
    min: number;
    max?: number;
    validate?: ValidateMethod;

    children?: { [key: string]: Rule };
    getChildren?: (id?: string) => Promise<{ [key: string]: Rule }>;
}

type RuleCollection = { [key: string]: Rule };

async function getRuleChildren(rule: Rule): Promise<RuleCollection | undefined> {
    if (rule.getChildren !== undefined) {
        return await rule.getChildren(rule.id);
    }

    return rule.children;
}

export {
    ValidationResult,
    ValidateMethod,
    Rule as default,
    RuleCollection,
    getRuleChildren,
};
