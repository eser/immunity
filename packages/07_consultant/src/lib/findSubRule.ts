import Rule from './rule';
import getRuleChildren from './getRuleChildren';

async function findSubRule(node: Rule, predicate: (key: string, rule: Rule) => boolean): Promise<Rule | undefined> {
    const children = await getRuleChildren(node);

    if (children !== undefined) {
        for (const childKey in children) {
            const child = children[childKey];

            if (predicate(childKey, child)) {
                return child;
            }

            if (child.children !== undefined || child.getChildren !== undefined) {
                const result = await findSubRule(child, predicate);

                if (result !== undefined) {
                    return result;
                }
            }
        }
    }

    return undefined;
}

export {
    findSubRule as default,
};
