declare function shell(command: string, args?: Array<any>, env?: {
    [key: string]: string;
}): any;
export { shell as default, };
