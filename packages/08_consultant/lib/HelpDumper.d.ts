import { Rule, RuleCollection } from './Rule';
export declare class HelpDumper {
    dumpCommands(children: RuleCollection, stream: any, indentation: string): Promise<number>;
    dumpParameters(children: RuleCollection, stream: any, indentation: string): number;
    dumpSingle(rule: Rule, stream: any, indentation: string): Promise<number>;
    dump(rules: Rule, stream: any, indentation?: string): Promise<void>;
}
export default HelpDumper;
