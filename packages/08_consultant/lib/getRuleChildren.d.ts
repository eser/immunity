import Rule, { RuleCollection } from './Rule';
declare function getRuleChildren(rule: Rule): Promise<RuleCollection | undefined>;
export { getRuleChildren as default };
