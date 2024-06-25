/*
You are given two strings word1 and word2. 
Merge the strings by adding letters in alternating order, starting with word1. 
If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.


Example 1:

  Input: word1 = "abc", word2 = "pqr"
  Output: "apbqcr"
  Explanation: The merged string will be merged as so:
  word1:  a   b   c
  word2:    p   q   r
  merged: a p b q c r
*/



export default function mergeAlternately(word1: string, word2: string): string { 
  
  let merged = ""; 

  for (let i = 0; i < Math.max(word1.length, word2.length); ++i) { 
    if (i < word1.length) { 
       merged += word1[i]
    }

    if ( i < word2.length) { 
        merged += word2[i]
    }
  }

  return merged; 
};


/* O(N) 56ms
export default function mergeAlternately(word1: string, word2: string): string { 
  
  let result : string = "";

  let smaller : number  = word1.length <= word2.length ? word1.length : word2.length; 
  let bigger : number  = word1.length >= word2.length ? word1.length : word2.length; 
  let biggerString : string = word1.length >= word2.length ? word1 : word2; 

  for (let i = 0; i < smaller; ++i) { 
      result += word1[i]; 
      result += word2[i];   
  }

  if (word1.length != word2.length) { 
    for (let j = smaller; j < bigger; ++j) { 
      result += biggerString[j];
    }
  }

  return result;
};

*/
