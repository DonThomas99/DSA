nums = [1,2,3,4,5,6,7,8]
let n =4
const arr1 = nums.slice(0, n).reverse();
const arr2 = nums.slice(n).reverse();

for( let i=0; i< nums.length; i++ ) {
    if( i%2 === 0 ) {
        nums[i] = arr1.pop()
    } else {
        nums[i] = arr2.pop()
    }
}

console.log(nums)