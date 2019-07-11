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
// Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(!s)return 0
    const str=[0,1]
    let len = 1;
    for(let i = 1;i < s.length;i++){
        const substr = s.substring(str[0],str[1])
        let targetIndex = substr.indexOf(s[i])
        str[1]=i+1;
        if(targetIndex>-1){
            str[0] = str[0]+targetIndex+1
        }else{
            count = str[1]-str[0];
            len = Math.max(len,count)
        }
    }
    return len
};