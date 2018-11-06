/**
 * 121. 买股票的最佳时机1 只能买一次
 */

 // 自己解法1 在循环里使用Math.max这些 性能大大降低！！！
 /**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let res = [0]
  for (i = 0; i < prices.length - 1; i++) {
      let max = Math.max(...prices.slice(i+1, prices.length))
      res.push(max - prices[i])
  }
  return Math.max(...res)
};

// 下面两个解法都是通过保存当前最大与当前最小值 

// 他人优秀解法1 
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  var min = Infinity;
  var maxProfit = 0;
  for (var i = 0; i < prices.length; i++) {
    var cur = prices[i];
    if (cur < min) min = cur;
    if (cur - min > maxProfit) maxProfit = cur - min;
  }
  return maxProfit;
};

// 他人优秀解法2
var maxProfit = function(prices) {
  let minSoFar = prices[0];
  let maxProfitSoFar = 0;
  
  for(let i = 1; i < prices.length; i++){
      maxProfitSoFar = Math.max(maxProfitSoFar, prices[i] - minSoFar);
      minSoFar = Math.min(minSoFar, prices[i]);
  }
  
  return maxProfitSoFar;
};