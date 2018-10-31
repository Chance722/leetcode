/**
 * 485. 最大连续1的个数
 */

 // 自己解法1
 /**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let array = nums.join('').split('0').map(item => {
      return item.length
  })
  return Math.max(...array)
};

// 他人优秀解法1
var findMaxConsecutiveOnes = function(nums) {
  let currentCount = 0
  let max = 0
  for (let i=0; i<nums.length; i++) {
    if (nums[i]) {
      currentCount++
      max = Math.max(currentCount, max)
    } else {
      currentCount = 0
    }
  }
  return max
};