type MutatorType = (state: any, next: MutatorType) => any;

function dispatcher(state: any, ...mutators: MutatorType[]): any {
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

export {
    MutatorType,
    dispatcher as default,
};
