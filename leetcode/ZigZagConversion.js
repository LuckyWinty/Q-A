// Example 2:

// Input: s = "PAYPALISHIRING", numRows = 4
// Output: "PINALSIGYAHRPI"
// Explanation:

// P     I    N
// A   L S  I G
// Y A   H R
// P     I

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1)return s;
    let isGoingDown=false;
    let result = new Array(numRows).fill('')
    let nowRow = 0;

    for(let i = 0;i < s.length;i++){
        result[nowRow] = result[nowRow] + s[i]
        if(nowRow === 0|| nowRow=== numRows -1)isGoingDown = !isGoingDown;
        nowRow += (isGoingDown?1:-1)
    }
    return result.reduce((pre,cur,arr)=>{
        return pre+cur
    },'')
};