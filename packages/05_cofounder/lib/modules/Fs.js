"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const path = require("path");
const immunity = require("immunity");
const globParentLib = require("glob-parent");
const globAll = require("glob-all");
class Fs {
    globParent(str) {
        return globParentLib(str);
    }
    globParentOf(str, pathstr) {
        const str_ = Array.isArray(str) ? str : [str];
        for (const strItem of str_) {
            if (strItem[0] === '!') {
                continue;
            }
            const strItemParent = globParentLib(strItem);
            if ((pathstr.length > strItemParent.length) &&
                (pathstr.substring(0, strItemParent.length) === strItemParent)) {
                return strItemParent;
            }
        }
        return null;
    }
    readdir(pathstr, options) {
        return new Promise((resolve, reject) => {
            const defaultOptions = { encoding: 'utf8' };
            const options_ = (options === undefined) ?
                defaultOptions :
                immunity.appendToObject(options, defaultOptions);
            fs.readdir(pathstr, options_, (err, contents) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(contents);
            });
        });
    }
    glob(str, options) {
        return new Promise((resolve, reject) => {
            const defaultOptions = {
                nosort: true,
                nonull: false,
                nodir: true
            };
            const options_ = (options === undefined) ?
                defaultOptions :
                immunity.appendToObject(options, defaultOptions);
            globAll(str, options_, (err, contents) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(contents);
            });
        });
    }
    mkdir(pathstr, mode) {
        return new Promise((resolve, reject) => {
            const callback = (err) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve();
            };
            if (mode === undefined) {
                fs.mkdir(pathstr, callback);
            }
            else {
                fs.mkdir(pathstr, mode, callback);
            }
        });
    }
    async mkdirP(pathstr, mode) {
        let directories = [
            pathstr
        ];
        while (directories.length > 0) {
            const splitted = immunity.splitArray(directories, -1), directory = splitted.items[0];
            directories = splitted.remainder;
            try {
                await this.mkdir(directory, mode);
            }
            catch (ex) {
                if (ex.code === 'ENOENT') {
                    directories = immunity.appendToArray(directories, directory, path.dirname(directory));
                    continue;
                }
                if (ex.code === 'EEXIST') {
                    return;
                }
                throw ex;
            }
        }
    }
    rmdir(pathstr) {
        return new Promise((resolve, reject) => {
            fs.rmdir(pathstr, (err) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve();
            });
        });
    }
    async rmdirP(pathstr) {
        let directories = [
            [pathstr, false]
        ];
        while (directories.length > 0) {
            const splitted = immunity.splitArray(directories, -1), directory = splitted.items[0];
            directories = splitted.remainder;
            try {
                if (directory[1]) {
                    await this.rmdir(directory[0]);
                    continue;
                }
                const list = await this.readdir(directory[0]);
                let pushedBack = false;
                for (const item of list) {
                    if (item === '.' || item === '..') {
                        continue;
                    }
                    const itemPath = path.join(directory[0], item);
                    try {
                        const itemStat = await this.lstat(itemPath);
                        if (itemStat.isDirectory()) {
                            if (!pushedBack) {
                                directories = immunity.appendToArray(directories, [directory[0], true]);
                                pushedBack = true;
                            }
                            directories = immunity.appendToArray(directories, [itemPath, false]);
                            continue;
                        }
                        await this.rm(itemPath);
                    }
                    catch (ex2) {
                        if (ex2.code === 'ENOENT') {
                            return;
                        }
                        throw ex2;
                    }
                }
                if (!pushedBack) {
                    await this.rmdir(directory[0]);
                }
            }
            catch (ex) {
                if (ex.code === 'ENOENT') {
                    return;
                }
                throw ex;
            }
        }
    }
    lstat(pathstr) {
        return new Promise((resolve, reject) => {
            fs.lstat(pathstr, (err, stats) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(stats);
            });
        });
    }
    readFile(pathstr, options) {
        return new Promise((resolve, reject) => {
            const defaultOptions = { encoding: 'utf8' };
            const options_ = (options === undefined) ?
                defaultOptions :
                immunity.appendToObject(options, defaultOptions);
            fs.readFile(pathstr, options_, (err, content) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(content);
            });
        });
    }
    writeFile(pathstr, content, options) {
        return new Promise((resolve, reject) => {
            const defaultOptions = { encoding: 'utf8' };
            const options_ = (options === undefined) ?
                defaultOptions :
                immunity.appendToObject(options, defaultOptions);
            fs.writeFile(pathstr, content, options_, (err) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve();
            });
        });
    }
    async writeFileP(pathstr, content, options) {
        const parentDirectory = path.dirname(pathstr);
        await this.mkdirP(parentDirectory);
        await this.writeFile(pathstr, content, options);
    }
    cp(pathstr, dest) {
        fs.createReadStream(pathstr)
            .pipe(fs.createWriteStream(dest));
    }
    async cpP(str, dest) {
        const list = await this.glob(str);
        let createdDirectories = [];
        for (const item of list) {
            const globParent = this.globParentOf(str, item), relativePath = (globParent !== null) ? item.substring(globParent.length) : item, relativeBasePath = path.dirname(relativePath);
            if (createdDirectories.indexOf(relativeBasePath) === -1) {
                await this.mkdirP(path.join(dest, relativeBasePath));
                createdDirectories = immunity.appendToArray(createdDirectories, relativeBasePath);
            }
            const destFile = path.join(dest, relativePath);
            this.cp(item, destFile);
        }
    }
    mv(pathstr, dest) {
        return new Promise((resolve, reject) => {
            fs.rename(pathstr, dest, (err) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve();
            });
        });
    }
    async mvP(str, dest) {
        const list = await this.glob(str, { nodir: false });
        let createdDirectories = [];
        for (const item of list) {
            const globParent = this.globParentOf(str, item), relativePath = (globParent !== null) ? item.substring(globParent.length) : item, relativeBasePath = path.dirname(relativePath);
            if (createdDirectories.indexOf(relativeBasePath) === -1) {
                await this.mkdirP(path.join(dest, relativeBasePath));
                createdDirectories = immunity.appendToArray(createdDirectories, relativeBasePath);
            }
            const destFile = path.join(dest, relativePath);
            this.mv(item, destFile);
        }
    }
    rm(pathstr) {
        return new Promise((resolve, reject) => {
            fs.unlink(pathstr, (err) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve();
            });
        });
    }
    async rmP(str, recursiveForDirectories) {
        const list = await this.glob(str, false);
        let directories = [];
        for (const item of list) {
            const itemStat = await this.lstat(item);
            if (itemStat.isDirectory()) {
                directories = immunity.prependToArray(directories, item);
                continue;
            }
            await this.rm(item);
        }
        for (const directory of directories) {
            if (recursiveForDirectories) {
                await this.rmdirP(directory);
            }
            else {
                await this.rmdir(directory);
            }
        }
    }
}
exports.Fs = Fs;
exports.default = Fs;
//# sourceMappingURL=Fs.js.map