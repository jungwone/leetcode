/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const len1 = s1.length;
    const len2 = s2.length;
    
    const arr1 = Array.from({length:  26}, () => 0);
    const arr2 = Array.from({length:  26}, () => 0);
    
    if(len1 > len2) return false;
    
    let left = 0, right = 0;
    
    while(right < len1) {
        arr1[s1.charCodeAt(right) - 'a'.charCodeAt(0)]++;
        arr2[s2.charCodeAt(right) - 'a'.charCodeAt(0)]++;
        right++;
    }
    
    right -= 1;
    while(right < len2) {
        if(isSame(arr1, arr2)) return true;
        
        right++;
        
        if(right !== len2) {
            arr2[s2.charCodeAt(right) - 'a'.charCodeAt(0)]++;
        }
        arr2[s2.charCodeAt(left) - 'a'.charCodeAt(0)]--;
        left++;
    }
    return false;
};

function isSame(arr1, arr2) {
    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]) return false;
    }
    return true;
}