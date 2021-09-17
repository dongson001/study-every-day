/*给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
请必须使用时间复杂度为 O(log n) 的算法。*/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0 ;
  let right = nums.length - 1;
  while(left <= right) {
    let m = left + Math.floor((right -left) / 2) 
    if(nums[m] < target) {
      left = m + 1
    }else if(nums[m] > target) {
      right = m - 1
    }else {
      return m
    }
  }
  return right + 1 
}

let res = searchInsert([1,2,5,7,8,10], 5);
console.log(res);

let res1 = searchInsert([1,2,5,7,8,10], 6);
console.log(res1);

let res2 = searchInsert([1,2,5,7,8,10], 0);
console.log(res2);