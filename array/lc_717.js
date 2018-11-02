/**
 * 717. 1比特与2比特字符
 * 
 * 有两种特殊字符。第一种字符可以用一比特0来表示。第二种字符可以用两比特(10 或 11)来表示。

现给一个由若干比特组成的字符串。问最后一个字符是否必定为一个一比特字符。给定的字符串总是由0结束。
 */


 // 自己解法1
 /**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
  if (bits.length === 1) return true
  bits.splice(bits.length - 1, 1)
  let str = bits.join('').replace(/11/g,'').replace(/0+/g, '0')
  if (str.split('')[str.length-1] === '0' || str === '') {
      return true
  }
  return false
};

// 他人优秀解法1
// Simple idea: if you were in the middle of a character at position n - 1 then the last element
// is not a standalone char.
var isOneBitCharacter = function(bits) {
  var isMidCharacter = false
  for(let i = 0; i < bits.length - 1; i++){
      isMidCharacter = (bits[i] === 1 && !isMidCharacter)
  }
  return !isMidCharacter
};