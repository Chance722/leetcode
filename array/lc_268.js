/**
 * 268. 找出缺失的数字
 */

 // 自己解法1
 /**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
      map.set(nums[i], nums[i])
  }
  for (let i = 1; i < nums.length + 1; i++) {
      if (!map.has(i)) return i
  }
  return 0
};

// 他人优秀解法1
var missingNumber = function(nums) {
  let sum = 0;
   for (let i = 0; i <= nums.length; i++) {
       sum += i;
       if (i < nums.length) {
           sum -= nums[i];
       }
   }
   return sum;
};