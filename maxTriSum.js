function maxTriSum(numbers){
  return [...new Set(numbers)].sort((a,b) => b-a).slice(0,3).reduce((acc, val) => acc+val)
}
console.log(maxTriSum([-2315, -13, -6686, 12, 2407, -277, 1413, 4915, 43696, 3920, -44803]));