/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const result = binarySearch(nums, target, 0, nums.length - 1);
    return result !== undefined ? result : -1;
};

function binarySearch(array, target, start, end) {
    if(start > end) {
        return;
    }
    const mid = Math.floor((start + end) / 2);
    if(array[mid] === target) return mid;
    else if(array[mid] > target) {
        return binarySearch(array, target, start, mid - 1);
    } else {
        return binarySearch(array, target, mid + 1, end);
    }
}