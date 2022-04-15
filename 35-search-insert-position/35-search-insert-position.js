/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    
    return binarySearch(nums, target, left, right)
};


function binarySearch(array, target, left, right) {
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(array[mid] === target) {
            return mid;
        } else if(array[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return left;
}