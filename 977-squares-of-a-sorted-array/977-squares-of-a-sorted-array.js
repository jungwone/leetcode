/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const answer = Array.from({length: nums.length}, () => 0);
    let left = 0;
    let right = nums.length - 1;
    
    for(let i = right; i > -1; i --) {
        if(Math.abs(nums[left]) < Math.abs(nums[right])) {
            answer[i] = nums[right] * nums[right];
            right -= 1;
        } else {
            answer[i] = nums[left] * nums[left];
            left += 1;
        }
    }
    
    return answer;
};