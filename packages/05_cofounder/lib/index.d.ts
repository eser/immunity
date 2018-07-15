import * as fs from './fs/';
import * as json from './json/';
import * as os from './os/';
declare const cofounder: {
    fs: typeof fs;
    json: typeof json;
    os: typeof os;
};
export { cofounder as default, fs, json, os, };
