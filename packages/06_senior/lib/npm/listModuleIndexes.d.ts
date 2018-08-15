import { Options } from '../methods';
declare function listModuleIndexes(options: Options): Promise<{
    [key: string]: string;
}>;
export { listModuleIndexes as default, };
