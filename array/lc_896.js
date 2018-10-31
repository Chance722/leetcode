/**
 * 896. 单调数列
 */

 // 自己解法1
 /**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  let sum1 = 0, sum2 = 0
  for (let i = 0; i < A.length - 1; i++) {
      A[i] < A[i+1] ? sum1++ : A[i] > A[i+1] ? sum2++ : (sum1++,sum2++)
  }
  if (sum1 === A.length - 1 || sum2 === A.length -1) {
      return true
  } else {
      return false
  }
};

// 自己解法2
/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
  let array = A.slice().sort((a, b) => {
      return a - b
  })
  return A.toString() === array.toString() || A.toString() === array.reverse().toString()
};