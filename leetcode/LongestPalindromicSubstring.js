// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"


/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const len = s.length
    if(len <= 1)return s;  //长度为1
    let start = 0;
    let max = 1;
    const dp = new Array(len);
    for(let i = 0;i < len;i++){
        dp[i] =new Array(len);
        dp[i][i] = 1;
        if(i < len - 1 && s[i] === s[i+1]){
            dp[i][i+1] = 1;
            start = i;
            max = 2; //长度为2
        }
    }
    for(let l = 3;l <= len;l++){ //长度为3以上
        for(let i = 0;i+l-1 < len;i++){
            let j = i+l-1;
            if(s[i] === s[j] && dp[i+1][j-1]==1){ //动态规划，复用前一次的结论
                dp[i][j] = 1;
                start = i;
                max = l;
            }
        }
    }
    return s.substr(start,max)
};