import { writeFile } from '../fs/writeFile';

export async function saveFile(pathstr: string, objectContent: any) {
    const plainContent = JSON.stringify(objectContent, null, '  ');

    await writeFile(pathstr, plainContent);
};

export default saveFile;
