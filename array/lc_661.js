/**
 * 661. Image Smoother
 */

 // 自己解法1
 /**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
  let res = []
  if (M.length >= 1 && M[0].length >= 1) {
      for (let i = 0; i < M.length; i++) {
          let innerRes = []
          let isFirstRow = (i === 0)
          let isLastRow = (i === M.length - 1)
          let sum = 0
          let times = 0
          for (let j = 0; j < M[i].length; j++) {
              sum += M[i][j]
              times++
              let isFirstNum = (j === 0)
              let isLastNum = (j === M[i].length - 1)
              if (!isFirstRow) sum += M[i - 1][j], times++          
              if (!isLastRow) sum += M[i + 1][j], times++
              if (!isFirstNum) sum += M[i][j - 1], times++       
              if (!isLastNum) sum += M[i][j + 1], times++
              if (!isFirstRow && !isFirstNum) sum += M[i - 1][j-1], times++
              if (!isFirstRow && !isLastNum) sum += M[i -1][j + 1], times++
              if (!isLastRow && !isFirstNum) sum += M[i + 1][j - 1], times++
              if (!isLastRow && !isLastNum) sum += M[i + 1][j + 1], times++
              innerRes.push(Math.floor(sum / times))
              sum = 0
              times = 0
          }
          res.push(innerRes)
      }
  } 
  
  return res
  
};