declare const _default: {
    assign: {
        <T, U>(target: T, source: U): T & U;
        <T, U, V>(target: T, source1: U, source2: V): T & U & V;
        <T, U, V, W>(target: T, source1: U, source2: V, source3: W): T & U & V & W;
        (target: object, ...sources: any[]): any;
    };
    assignPolyfill: (target: Object, ...sources: Object[]) => Object;
};
export = _default;
