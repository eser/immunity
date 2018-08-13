import { Options } from '../methods';
declare function searchRepository(options?: Options): Promise<{
    [key: string]: string;
}>;
export { searchRepository as default, };
