/**
 * 448. Find All Numbers Disappeared in an Array
 */

 // 自己解法1 
 /**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  let length = nums.length 
  let res = []
  let map = new Map()
  for (let i = 0; i < length; i++) {
      map.set(nums[i], nums[i])
  }
  for (let i = 0; i < length; i++) {
      if (!map.has(i + 1)) {
          res.push(i + 1)
      }
  }
  
  return res
};

// 他人优秀解法1 beat 95%
var findDisappearedNumbers = function (nums) {
  let length = nums.length
  let arr = []
  for (let i = 0; i < length; i++) {
    arr[i] = i+1
  }
  for (v of nums) {
    arr[v-1] = -1
  }
  return arr.filter( i => (i > 0) )
}