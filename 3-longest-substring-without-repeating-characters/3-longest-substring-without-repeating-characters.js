/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let obj = {};
    let left = 0, right = 0;
    let answer = 0;
    
    while(right < s.length) {
        const a = s[right];
        if(obj[a]) { obj[a]++; }
        else { obj[a] = 1; }

        while(obj[a] > 1) {
            const b = s[left];
            obj[b]--;
            left++;
        }
        
        answer = Math.max(answer, right - left + 1);
        right++;
    }
    
    return answer;
};