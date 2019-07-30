// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321
// Example 3:

// Input: 120
// Output: 21

// Note:
// Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x > 2**31 - 1 || x < -(2**31 -1))return 0
    let isNative = x > 0?1:-1
    x= Math.abs(x)
    const res = x.toString().split('').reverse().join('');
    const resNum = Number(res)*isNative
    if(resNum > 2**31 - 1 || resNum < -(2**31 -1))return 0
    return resNum
};