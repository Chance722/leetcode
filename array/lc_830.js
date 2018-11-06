/**
 * 830. Positions of Large Groups
 */

 // 自己解法1
 /**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
    
  let res = []
  let Sarray = S.split('')
  let lastObj = null
  let repeatObj = []
  let temp = 0
  let repeatRes = []
  
  for (let i = 0; i < Sarray.length; i++) {
      if (Sarray[i] === lastObj || i === 0) {
          temp++
          repeatObj = [i, temp]
          if (i === Sarray.length -1 && repeatObj[1] >= 3) {
              repeatRes.push(repeatObj)
          }
      } else {
          if (repeatObj[1] >= 3) {
              repeatRes.push(repeatObj)
          }
          temp = 1
          repeatObj = [i, temp]
      }
      lastObj = Sarray[i]
  }
  
  repeatRes.forEach(item => {
      res.push(new Array(item[0] - item[1] + 1, item[0]))
  })

  return res
};

// 他人优秀解法1 反向思维 在不连续的位置那里记录索引！！！
var largeGroupPositions = function(S) {
  var index = [0, 0];
  var res = [];
  for (var i=0; i<S.length; i++) {
      if (i===S.length-1 || S[i] !== S[i+1]) {
          index[1] = i;
          if (index[1] - index[0] >= 2) {
              res.push(index);
          }
          index = [i+1, i+1];
      }
  }
  return res;
};

// 他人优秀解法2 有时正则的检索还要更快 下面的算法 beats 100%
const largeGroupPositions = (S) => {
  const res = [], re = /(\w)\1{2,}/g;
  let m;
  while ((m = re.exec(S)) !== null) {
      res.push([m.index, m.index + m[0].length - 1]);
  }
  return res;
};