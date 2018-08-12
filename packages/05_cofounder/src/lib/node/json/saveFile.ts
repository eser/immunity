import writeFile from '../fs/writeFile';

async function saveFile(pathstr: string, objectContent: any): Promise<void> {
    const plainContent = JSON.stringify(objectContent, null, '  ');

    await writeFile(pathstr, plainContent);
}

export {
    saveFile as default,
};
