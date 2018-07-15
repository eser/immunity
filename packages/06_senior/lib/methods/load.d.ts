import Options from '../options';
declare function load(options: Options, moduleName: string, globals: {
    [key: string]: any;
}, loader?: (filepath: string, globals: {
    [key: string]: any;
}) => any): any;
export { load as default, };
