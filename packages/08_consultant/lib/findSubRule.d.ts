import Rule from './Rule';
declare function findSubRule(node: Rule, predicate: (key: string, rule: Rule) => boolean): Promise<Rule | undefined>;
export { findSubRule as default };
