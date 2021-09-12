/*
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let arr = []
  for (let i = 0; i < nums.length; i++) {
    const e1 = nums[i];
    for (let j = 0; j < nums.length; j++) {
      const e2 = nums[j];
      if(target - e1 === e2) {
        arr = [i,j]
        break
      }
    }
  }
  return arr
}


let arr = twoSum([3,3],6)
console.log(arr);

