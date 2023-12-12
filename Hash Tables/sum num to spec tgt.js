function findTwoSum(nums, target) {
  const numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numMap.has(complement)) {
      
      return [numMap.get(complement), i];
    }

    
    numMap.set(nums[i], i);
  }


  return null;
}


const numbers = [2, 7, 11, 15];
const targetSum = 9;
const result = findTwoSum(numbers, targetSum);

if (result) {
  const [index1, index2] = result;
  console.log(`Indices of the two numbers: ${index1}, ${index2}`);
  console.log(`Numbers: ${numbers[index1]}, ${numbers[index2]}`);
} else {
  console.log("No two numbers found that add up to the target sum.");
}
