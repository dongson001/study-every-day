/*
给定一个 n 个元素有序的（升序）整型数组 nums 和一个目标值 target  ，写一个函数搜索 nums 中的 target，如果目标值存在返回下标，否则返回 -1。
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0
  let right = nums.length - 1
  while (left <= right) {
    let m = left + (right - left) / 2
    console.log(left,m,right);
    if (nums[m] > target) {
      right = m - 1 // target 在左区间，所以[left, m-1]
    } else if (nums[m] < target) {
      left = m + 1 // target 在右区间，所以[ m+1, right]
    } else {
      return m // 数组中找到目标值，直接返回下标
    }
  }
  return -1 //没有返回-1
}

let res = search([1, 2, 3, 4, 7, 9, 10], 3)
console.log(res)
// 1 2 3 4 7 9 10
// left     m      right     target
// 0        3       7-1        3
// nums[3] > 3
//                  3-1
// 0  0 + (2-0)/2              3
// nums[1] > 3
// nums[1] < 3
// 1+1
//    2 + (2-2)/2 
// 2      2         2         
// nums[2] > 3
// nums[2] < 3
// else // 既不大于也不等于走else
// 输入出 2