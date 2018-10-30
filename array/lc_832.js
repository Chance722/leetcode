/**
 * 832. 翻转矩阵
  Given a binary matrix A, we want to flip the image horizontally, then invert it, and return the resulting image.

  To flip an image horizontally means that each row of the image is reversed.  For example, flipping [1, 1, 0] horizontally results in [0, 1, 1].

  To invert an image means that each 0 is replaced by 1, and each 1 is replaced by 0. For example, inverting [0, 1, 1] results in [1, 0, 0].
 */

 // 自己解法1
 /**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    
  for (let i = 0; i < A.length; i++) {
      A[i].reverse().forEach((item, index) => {
          A[i][index] = Math.abs(item - 1)
      })
  }
  
  return A
  
};

// 他人优秀解法1

/**
 *   离散数学的异或运算
 * 
     1.交换律：a ^ b ^ c  <=> a ^ c ^ b

     2.任何数于0异或为任何数 0 ^ n => n

     3.相同的数异或为0: n ^ n => 0
 */
var flipAndInvertImage = function(A) {
  return A.map((row) => row.reverse().map((pixel) => pixel ^ 1));
};