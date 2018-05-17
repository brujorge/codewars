function iqTest(numbers){
  let arr = numbers.split(" ").map(num => num%2)
  let type = arr.reduce((acc,val) => {return acc +val},0)
  if(type == 1) return arr.indexOf(1)+1
  return arr.indexOf(0)+1
}
console.log(iqTest("2 4 6 7")); 