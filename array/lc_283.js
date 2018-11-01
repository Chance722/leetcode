/**
 * 283. Move Zeroes
 */

 // 自己解法1
 /**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let total = 0
  for (let i = 0; i < nums.length; i++) {
   if(nums[i - total] === 0) {
      nums.splice(i - total, 1)
      total++
      nums.push(0)
   }
  }
}

// 他人优秀解法1
var moveZeroes = function(nums) {
  let length = nums.length
  //nums = nums.filter( i=> i !== 0)  // no use filter, it news a new array
  let j = 0
  for (let i = 0; i < length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i]
      j++
    }
  }
  let index = j 
  length = length - index
  for (let i = 0; i < length; i++) {
    nums[index + i] = 0
  }
};

// 他人优秀解法2
var moveZeroes = function(nums) {
  for(let i = nums.length - 1; i >= 0; i--){
    const currentNum = nums[i];
    if(currentNum == 0){
        nums.splice(i,1);
        nums.push(0)
    }
  }
}