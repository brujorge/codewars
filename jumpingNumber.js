function jumpingNumber(n){
  const arr = n.toString().split("")
  if(arr.length==1) return 'Jumping!!'
  for(let i = 0;i<arr.length-1; i++){
    if(Math.abs(arr[i]-arr[i+1])!=1) return 'Not!!'
  }
  return 'Jumping!!'
}
console.log(jumpingNumber(98));