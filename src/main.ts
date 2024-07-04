import './style.css'
import mergeAlternately from "../LeetCode75/merge_string.js"
import gcdOfStrings from "../LeetCode75/greates_common_deviser.js"


// Merge Strings Alternately
let word1 : string = "abc"; 
let word2 : string = "pqr"; 

console.log(mergeAlternately(word1, word2));

// Greatest Common Deviser 
let str1 = "ABCABC"; 
let str2 = "ANC"; 

console.log(gcdOfStrings(str1, str2)); 
