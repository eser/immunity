export function alignedString(input: (number | string)[], initial: string = ''): string {
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

export default alignedString;
