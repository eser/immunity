declare function loadFile(filepath: string, globals: {
    [key: string]: any;
}): Promise<any>;
export { loadFile as default, };
