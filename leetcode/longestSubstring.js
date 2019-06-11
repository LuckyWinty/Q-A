// Longest Substring Without Repeating Characters

// Given a string, find the length of the longest substring without repeating characters.

// Example 1:

// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// Example 2:

// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    let maxLen = 0;
    let substr = []
    if(s.length <2)return s.length
    for(let i = 0;i < s.length;i++){
        if(substr.includes(s[i])){
           maxLen = substr.length > maxLen?substr.length:maxLen
           const targetIndex = substr.findIndex((item)=>{return item == s[i]})
           substr.splice(0,targetIndex+1)
           i--;
        }else{
            substr.push(s[i])
        }
    }
    maxLen = substr.length > maxLen?substr.length:maxLen
    return maxLen
};