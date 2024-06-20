// function merge(arr1,arr2){
// let result =[]
// while(arr1.length && arr2.length){
//     if(arr2[0]<=arr1[0]){
//         result.push(arr2.shift())
//     }
//     else{
//         result.push(arr1.shift())
//     }
// }
// console.log([...result,...arr1,...arr2]);
// return [...result,...arr1,...arr2]
// }


// function mergeSort(arr){
//     if(arr.length<=1) return arr
//     let mid=Math.floor(arr.length/2)
//     let left=mergeSort(arr.slice(0,mid))
//     let right=mergeSort(arr.slice(mid))
//     return merge(mergeSort(left),mergeSort(right))
// }


function merge(arr1,arr2){
    let result =[]
    
    while(arr1.length && arr2.length){
        if(arr2[0] <= arr1[0]){
            result.push(arr2.shift())
        } else{
            result.push(arr1.shift())
        }
    }
    return [...result,...arr1,...arr2]
}

function mergeSort(arr){
    if(arr.length <=1){
        return arr
    }
    let mid = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0,mid))
    let right = mergeSort(arr.slice(mid))
    return merge(mergeSort(left),mergeSort(right))
}
    let sortedArray=mergeSort([2,8,5,3,9,4,1,7])
    console.log(sortedArray);