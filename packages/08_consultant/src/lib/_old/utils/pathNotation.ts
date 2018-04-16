function pathNotation(sourceObj: any, targetPath: string, defaultValue?: any, delimiter: string = '.'): any {
    const targetPath_ = targetPath.split(delimiter);

    let sourceObj_ = sourceObj;

    while (targetPath_.length > 0) {
        const property = targetPath_.shift();

        if (property === undefined || !(property in sourceObj_)) {
            return defaultValue;
        }

        sourceObj_ = sourceObj_[property];
    }

    return sourceObj_;
}

export {
    pathNotation as default,
};
