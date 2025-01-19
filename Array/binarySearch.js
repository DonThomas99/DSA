function binarySearch(element,arr,left,right){
    let mid = Math.floor((left + right)/2)
    if(left > right){
        console.log('element not found')
        return
    }
    if(arr[mid] == element){
        console.log('element found')
    }else if(arr[mid] < element ){
        left = mid+1
        binarySearch(element,arr,left,right)
    }else if(arr[mid]>element){
        right = mid-1
        binarySearch(element,arr,left,right)
    }

}
let arr = [1,3,5,7,9,11,13,15,17]
let left = 0 
let right = arr.length -1 
let element = 3
binarySearch(element,arr,left,right)


