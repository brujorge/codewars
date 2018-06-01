function positiveSum(arr) {
  return arr.reduce((acc,val) => {
    if(val>0){
      return acc+val
    } else {
      return acc
    }
  },0)
}

console.log(positiveSum([-1,-2,-3,-4,-5]));
// 15