"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function dispatcher(state, ...mutators) {
    let index = 0;
    const next = (newState) => {
        const layer = mutators[index];
        if (layer === undefined) {
            return newState;
        }
        index += 1;
        return layer(newState, (currentState) => next(currentState));
    };
    return next(state);
}
exports.default = dispatcher;
//# sourceMappingURL=dispatcher.js.map