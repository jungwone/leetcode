/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let lastNonZeroIndex = 0;
    
    nums.forEach((num, index) => {
        if(num !== 0) {
            nums[lastNonZeroIndex++] = nums[index]
        }
    });
    
    for(let i=lastNonZeroIndex; i< nums.length; i++) {
        nums[i] = 0;
    }
    
    return nums;
};