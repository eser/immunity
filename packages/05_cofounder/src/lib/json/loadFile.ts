import { readFile } from '../fs/readFile';

export async function loadFile(pathstr: string) {
    const plainContent = await readFile(pathstr);

    return JSON.parse(plainContent);
};

export default loadFile;
