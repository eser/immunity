"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function dispatcher(state, mutators, subscribers) {
    const hasSubscribers = (subscribers !== undefined);
    let index = 0;
    const next = async (newState) => {
        const layer = mutators[index];
        if (layer === undefined) {
            return newState;
        }
        index += 1;
        return await layer(newState, async (currentState) => {
            if (hasSubscribers) {
                subscribers.forEach(subscriber => {
                    subscriber({ action: layer.name, previousState: newState, newState: currentState });
                });
            }
            return await next(currentState);
        });
    };
    return await next(state);
}
exports.default = dispatcher;
//# sourceMappingURL=dispatcher.js.map