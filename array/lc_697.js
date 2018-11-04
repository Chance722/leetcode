/**
 * 697. 数组的度
 * 注意！！！ 对比他人的解法 自己使用了indexOf 和 lastIndexOf， 内部其实使用了遍历 所以耗时更多 
 */

 // 自己解法1
 /**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
      if (map.has(nums[i])) {
          map.set(nums[i], map.get(nums[i]) + 1)
      } else {
          map.set(nums[i], 1)
      }
  }
  let maxValue = 0
  let maxKey = []
  map.forEach((value, key) => {
      if (value > maxValue) {
          maxValue = value
          maxKey = []
          maxKey.push(nums.lastIndexOf(key) - nums.indexOf(key) + 1)
      } else if (value === maxValue) {
          maxKey.push(nums.lastIndexOf(key) - nums.indexOf(key) + 1)
      }
  })
  return Math.min(...maxKey)
};

// 他人优秀解法1
const findShortestSubArray = (nums) => {
  const counts = {}
  const firstIndexes = {}
  const lastIndexes = {}
  let max = 0
  for (let i = 0; i < nums.length; i++) {
      const k = nums[i]
      counts[k] = (counts[k] || 0) + 1
      max = Math.max(max, counts[k])
      if (firstIndexes[k] === undefined) {
          firstIndexes[k] = i
      }
      lastIndexes[k] = i
  }
  let res = nums.length
  for (const k in counts) {
      if (counts[k] === max) {
          res = Math.min(res, lastIndexes[k] - firstIndexes[k] + 1)
      }
  }
  return res
};