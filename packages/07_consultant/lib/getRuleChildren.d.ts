import Rule, { RuleCollection } from './rule';
declare function getRuleChildren(rule: Rule): Promise<RuleCollection | undefined>;
export { getRuleChildren as default };
