import Rule from './rule';
declare function findSubRule(node: Rule, predicate: (key: string, rule: Rule) => boolean): Promise<Rule | undefined>;
export { findSubRule as default, };
