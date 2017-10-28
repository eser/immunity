function alignedString(input: Array<number | string>, initial: string = ''): string {
    let output = initial;

    while (input.length >= 2) {
        const pos = input.shift() as number;

        if (output.length < pos) {
            output += ' '.repeat(pos - output.length);
        }

        output += input.shift();
    }

    return output;
}

export {
    alignedString as default,
};
