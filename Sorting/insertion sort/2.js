let nums = [8,1,2, 2,3];
let sortedArr = [...nums].sort((a, b) => a - b);
let result = [];

for (let i = 0; i < nums.length; i++) {
  let smallerCount = sortedArr.indexOf(nums[i]);
  result.push(smallerCount);
}

console.log(result);
