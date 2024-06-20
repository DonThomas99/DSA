let arr = [1,1,3,3,-4,2,1,5];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j + 1] < arr[j]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }


// let uniqueArr = [arr[0]];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] !== arr[i - 1]) {
//     uniqueArr.push(arr[i]);
//   }
// }

// console.log(uniqueArr);

for(let i =0;i<arr.length;i++){
  for(let j =0;j<(arr.length-i-1);j++){
  if(arr[j] > arr[j+1]){
    let temp = arr[j]
    arr[j] = arr[j+1]
    arr[j+1] = temp
    }
  }
}

console.log(arr);