/**
 * 566. Reshape the Matrix
  Input: 
  nums = 
  [[1,2],
  [3,4]]
  r = 1, c = 4
  Output: 
  [[1,2,3,4]]
  Explanation:
  The row-traversing of nums is [1,2,3,4]. The new reshaped matrix is a 1 * 4 matrix, fill it row by row by using the previous list.
 */

// 自己解法1 
/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
  let array = []
  let res = []
  nums.forEach(item => {
      array = array.concat(item)
  })
  if (array.length !== r * c) {
      return nums
  }
  for (let i = 0; i < r; i++) {
      let rowArray = []
      for (let j = 0; j < c; j++) {
          rowArray.push(array.shift())
      }
      res.push(rowArray)
  }
  return res
};