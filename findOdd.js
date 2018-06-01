function findOdd(a) {
  let r
  new Set([...a]).forEach(num => {
    if(a.filter(element => element == num).length%2!=0){
      r = num
    }
  }) 
  return r
}

// GODLIKE SOLUTION 
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]))