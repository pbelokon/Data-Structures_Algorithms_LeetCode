"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./style.css");
var merge_string_js_1 = require("../LeetCode75/merge_string.js");
var greates_common_deviser_js_1 = require("../LeetCode75/greates_common_deviser.js");
// Merge Strings Alternately
var word1 = "abc";
var word2 = "pqr";
console.log((0, merge_string_js_1.default)(word1, word2));
// Greatest Common Deviser 
var str1 = "ABCABC";
var str2 = "ANC";
console.log((0, greates_common_deviser_js_1.default)(str1, str2));
