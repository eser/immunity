import { Types } from './Types';

export type RuleCollection = { [key: string]: Rule };

export type ValidateMethod = (value: any) => Promise<ValidationResult>;
export type ValidationResult = boolean | string;

export interface Rule {
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

    children?: RuleCollection;
    getChildren?: (id?: string) => Promise<RuleCollection>;
}

export async function getRuleChildren(rule: Rule): Promise<RuleCollection | undefined> {
    if (rule.getChildren !== undefined) {
        return await rule.getChildren(rule.id);
    }

    return rule.children;
}

export default Rule;
