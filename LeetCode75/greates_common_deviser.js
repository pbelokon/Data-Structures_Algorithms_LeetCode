"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function gcdOfStrings(str1, str2) {
    var min = Math.min(str1.length, str2.length);
    var common_deviser = "";
    for (var i = 0; i < min; ++i) {
        if (str1[i] === str2[i])
            common_deviser += str1[i];
        if (common_deviser[i] === str1[i + 1]) {
            return common_deviser;
        }
    }
    return "";
}
exports.default = gcdOfStrings;
;
