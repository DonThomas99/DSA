function recursiveBinarySearch(arr,num){
  let left = 0
  let right = arr.length - 1
  return search(arr,num,left,right)
}
function search(arr,num,left,right){
  if(left > right || right < left) return false
let mid = Math.floor((left + right)/2)
if(arr[mid] === num){
  return true
}else if(arr[mid] < num){
  left = mid + 1
  return search(arr,num,left,right)
}else if(arr[mid] > num){
  right = mid -1 
  return search(arr,num,left,right)
}else{
  
  return false
}
}

 
 console.log(recursiveBinarySearch([-5,2,4,6,10],7))