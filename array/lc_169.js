/**
 * 169. 求众数 
 */

 // 自己解法1
 /**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let lengthMap = new Map()
  for (let i = 0; i < nums.length; i++) {
      if (lengthMap.has(nums[i])) {
          lengthMap.set(nums[i], 1 + lengthMap.get(nums[i]))
      } else {
          lengthMap.set(nums[i], 1)
      }
  }
  let currentKey = null
  let currentValue = null
  lengthMap.forEach((value, key) => {
    // 当前条件的众数是 出现次数 > n/2 如果是出现次数多的 则用下面注释的方法
      if (value >= Math.round(nums.length / 2)) {
          currentKey = key
      }
    //   if (value >= currentValue) {
    //     currentKey = key
    //     currentValue = value
    // }
  })
  
  return currentKey

};

// 他人优秀解法1
var majorityElement = function(nums) {

  var value = null,
      times = 0;
  
  for(let i = 0; i < nums.length ; ++i) {
      
      times ? (value === nums[i] ? times++ : times--) : (value = nums[i], times++);
  }
  return value;

};