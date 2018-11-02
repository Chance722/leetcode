/**
 * 217. 判断数组是否存在重复元素
 */

 // 我的解法1
 /**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
      if (map.has(nums[i])) {
          return true
      } else {
          map.set(nums[i], nums[i])
      }
  }
  return false
  
};

// 他人优秀解法1
var containsDuplicate = function(nums) {
  return (new Set(nums).size !== nums.length);    
};