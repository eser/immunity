import Types from './Types';
declare type ValidateMethod = (value: any) => Promise<ValidationResult>;
declare type ValidationResult = boolean | string;
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
    helpDetails?: any;
    boolean: any;
    min: number;
    max?: number;
    validate?: ValidateMethod;
    children?: {
        [key: string]: Rule;
    };
    getChildren?: (id?: string) => Promise<{
        [key: string]: Rule;
    }>;
}
declare type RuleCollection = {
    [key: string]: Rule;
};
export { ValidationResult, ValidateMethod, Rule as default, RuleCollection };
