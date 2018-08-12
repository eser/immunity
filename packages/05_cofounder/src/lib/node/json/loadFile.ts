import readFile from '../fs/readFile';

async function loadFile(pathstr: string): Promise<any> {
    const plainContent = await readFile(pathstr);

    return JSON.parse(plainContent);
}

export {
    loadFile as default,
};
