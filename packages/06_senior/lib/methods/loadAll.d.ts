import Options from '../options';
declare function loadAll(options: Options, globals: {
    [key: string]: any;
}, loader?: (filepath: string, globals: {
    [key: string]: any;
}) => any): {
    [key: string]: any;
};
export { loadAll as default, };
