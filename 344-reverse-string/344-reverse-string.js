/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let left = 0;
    let right = s.length - 1;
    
    while(left < right && right >= 0 && left <= s.length - 1) {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left ++;
        right --;
    }
    
    return s;
};