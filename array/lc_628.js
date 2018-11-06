/**
 * 628. 三个数的最大乘积
 */

 // 自己解法1
 /**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  let sortArray = nums.sort((a, b) => a - b)
  let length = sortArray.length
  
  let total1 = sortArray[length - 1] * sortArray[length - 2] * sortArray[length - 3]
  let total2 = sortArray[length - 1] * sortArray[0] * sortArray[1]
  
  return Math.max(total1, total2)
};

// 别人优秀解法1 因为其实只需要特定的几个值 排序全部会慢很多
var maximumProduct = function(nums) {
  let max1 = max2 = max3 = Number.NEGATIVE_INFINITY;
  let min1 = min2 = Number.POSITIVE_INFINITY;
  for (var i = 0; i < nums.length; i++) {
      var n = nums[i];
      if(n >= max1) {
          max3 = max2;
          max2 = max1;
          max1 = n;
      } else if (n >= max2) {
          max3 = max2;
          max2 = n;
      } else if (n >= max3) {
          max3 = n;
      }
      if(n <= min1) {
          min2 = min1;
          min1 = n;
      } else if (n <= min2) {
          min2 = n;
      }
  };
  const product1 = max1 * max2 * max3;
  const product2 = max1 * min2 * min1;
  return product1 > product2 ? product1 : product2;
}