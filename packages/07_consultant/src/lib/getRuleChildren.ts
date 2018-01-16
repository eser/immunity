import Rule, { RuleCollection } from './rule';

async function getRuleChildren(rule: Rule): Promise<RuleCollection | undefined> {
    if (rule.getChildren !== undefined) {
        return await rule.getChildren(rule.id);
    }

    return rule.children;
}

export {
    getRuleChildren as default,
};
