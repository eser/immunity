import { Options } from '../methods';
declare function loadAll(globals: {
    [key: string]: any;
}, options: Options): Promise<{
    [key: string]: any;
}>;
export { loadAll as default, };
