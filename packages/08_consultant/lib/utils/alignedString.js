"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function alignedString(input, initial) {
    if (initial === void 0) { initial = ''; }
    var output = initial;
    while (input.length >= 2) {
        var pos = input.shift();
        if (output.length < pos) {
            output += ' '.repeat(pos - output.length);
        }
        output += input.shift();
    }
    return output;
}
exports.alignedString = alignedString;
exports.default = alignedString;
//# sourceMappingURL=alignedString.js.map