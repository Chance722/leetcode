/**
 * 888.公平的糖果交换
 */

 // 自己解法1
 /**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
  let aNums = A.reduce((a, b) => a + b)
  let bNums = B.reduce((a, b) => a + b)
  
  for(let i = 0; i < A.length; i++) {
      for (let j = 0; j < B.length; j++) {
          if (A[i] + bNums - B[j] === (aNums + bNums) / 2 ) {
              return new Array(A[i], B[j])
          }
      }
  }
  
};

// 他人优秀解法1
var fairCandySwap = function(A, B) {
    
  let totalA=0, totalB=0;
  let num=[];
  for(let i=0; i < A.length; ++i)
      totalA +=A[i];

   let sB= new Map();
  for(let i=0; i < B.length; ++i){
      totalB +=B[i];
      sB.set(B[i],B[i]); 
  }
      
  const diff=(totalB - totalA)/2;

 for(let i=0; i < A.length; ++i){      
   
      if(sB.has((A[i] + diff)) ){
          num.push(A[i]);
          num.push( sB.get(A[i] + diff));        
          return num;
      }
          
  } 
  
};