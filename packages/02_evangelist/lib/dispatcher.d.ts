declare type MutatorType = (state: any, next: MutatorType) => any;
declare function dispatcher(state: any, ...mutators: MutatorType[]): any;
export { MutatorType, dispatcher as default };
