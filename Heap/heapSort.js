function heapify(arr,n,i){
  let largest = i
  let left = 2 * i + 1
  let right = 2 * i + 2

  if(left < n && arr[left] > arr[largest] ){
    largest = left
  }
  if(right < n && arr[right] > arr[largest]){
    largest = right 
  }
  
  if(largest != i ){
    [arr[i],arr[largest]] = [arr[largest],arr[i]]
    console.log(arr,i)
    heapify(arr,n,largest)
    
  }

}

function heapSort(arr){
  let n = arr.length
  for(let i=n- 1;i>=0;i--){
    heapify(arr,n,i)
    
  }
  
  for(let i = n-1;i>=0;i--){
    [arr[0],arr[i]] = [arr[i],arr[0]]
    heapify(arr,i,0)
  }

}

let a =[2, 8, 1, 3, 6, 7, 5, 4]
heapSort(a)
console.log(a)