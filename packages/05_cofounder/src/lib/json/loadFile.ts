import readFile from '../fs/readFile';

async function loadFile(pathstr: string) {
    const plainContent = await readFile(pathstr);

    return JSON.parse(plainContent);
}

export {
    loadFile as default,
};
