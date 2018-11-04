/**
 * 167. 两数之和2 - 输入有序数组
 */

 // 自己解法1
   /**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
  let res = []
  let map = new Map()
  for (let i = 0; i < numbers.length; i++) {
      map.set(numbers[i], i)
  }
  
  for (let i = 0; i < numbers.length; i++) {
     if (!(map.has(numbers[i]) && map.has(target - numbers[i]))) continue
      
     if (map.get(numbers[i]) < map.get(target - numbers[i])) {
         res.push(map.get(numbers[i]) + 1, map.get(target - numbers[i]) + 1)
         break
     } else if (map.get(numbers[i]) > map.get(target - numbers[i])) {
         res.push(map.get(target - numbers[i]) + 1, map.get(numbers[i]) + 1)
         break
     } else {
         res.push(numbers.indexOf(target - numbers[i]) + 1, map.get(numbers[i]) + 1)
         break
     }
  }
 
 return res

};

// 他人优秀解法1
var twoSum = function(numbers, target) {
  var l=numbers.length, i=0, j=l-1;
  while (numbers[i]+numbers[j] !== target) {
    numbers[i]+numbers[j] < target ? i++ : j--;
  }
  return [i+1, j+1];
};
