import { Types } from './Types';
export declare type RuleCollection = {
    [key: string]: Rule;
};
export declare type ValidateMethod = (value: any) => Promise<ValidationResult>;
export declare type ValidationResult = boolean | string;
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
    helpDetails?: any;
    boolean: any;
    min: number;
    max?: number;
    validate?: ValidateMethod;
    children?: RuleCollection;
    getChildren?: (id?: string) => Promise<RuleCollection>;
}
export declare function getRuleChildren(rule: Rule): Promise<RuleCollection | undefined>;
export default Rule;
