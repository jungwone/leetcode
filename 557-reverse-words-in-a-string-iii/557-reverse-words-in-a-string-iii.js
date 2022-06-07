/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let answer = '';
    let temp = "";
    for (let c of s) {
        if (c === ' ') {
            answer += temp + c;
            temp = '';
        } else {
            temp = c + temp;
        }
    }
    return answer + temp;
};