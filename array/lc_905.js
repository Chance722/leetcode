/**
 * 905.按奇偶排序数组
 * 给定一个非负整数数组 A，返回一个由 A 的所有偶数元素组成的数组，后面跟 A 的所有奇数元素。

  你可以返回满足此条件的任何数组作为答案。

  示例：

  输入：[3,1,2,4]
  输出：[2,4,3,1]
  输出 [4,2,3,1]，[2,4,1,3] 和 [4,2,1,3] 也会被接受。
 */ 

// 自己解法1
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  return A.filter(item => {
     return item % 2 === 0
  }).concat(
      A.filter(item => {
          return item % 2 !== 0
      })
  )
}
// 自己解法2
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
  let evenArray = []
  let oddArray = []
  for (let i = 0; i < A.length; i++) {
    if (A[i] %2 === 0) {
      evenArray.push(A[i])
    } else {
      oddArray.push(A[i])
    }
  }
  return evenArray.concat(oddArray)
}

// 他人优秀解法1
var sortArrayByParity = function(A) {
  let res = [];
  for (a of A) {
      if (a % 2 ===0) res.unshift(a)
          else res.push(a)
  }
  return res
};

// 他人优秀解法2
var sortArrayByParity = function(A) {
  return A.sort((a, b) => { return a % 2 - b % 2; })
}
