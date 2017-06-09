export function pathNotation(sourceObj, targetPath, defaultValue = undefined, delimiter = '.'): any {
    const targetPath_ = targetPath.split(delimiter);

    let sourceObj_ = sourceObj;

    while (targetPath_.length > 0) {
        const property = targetPath_.shift();

        if (!(property in sourceObj_)) {
            return defaultValue;
        }

        sourceObj_ = sourceObj_[property];
    }

    return sourceObj_;
}

export default pathNotation;
