import { Options } from '../methods';
declare function load(moduleName: string, globals: {
    [key: string]: any;
}, options: Options): Promise<any>;
export { load as default, };
