/**
 * 122. 买股票的最佳时机2
 */

// 自己解法1
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let array = []
  for (let i = 0; i < prices.length - 1; i++) {
      let value = prices[i + 1] - prices[i]
      array.push(value)
  }
  if (array.every(item => item <= 0)) return 0 
  
  let sum = 0
  
  for (let i = 0; i < array.length - times; i++) {
      if (array[i] > 0) {
          sum += array[i]
      }
  }
  return sum
  
};

// 他人优秀解法1
var maxProfit = function(prices) {
  var sum=0;
  let len=prices.length;
for (let i = 0; i <= len; i++ ) {
      if(prices[i]<prices[i+1]){
        sum+=prices[i+1]-prices[i];
      }
  }
return sum;
};
