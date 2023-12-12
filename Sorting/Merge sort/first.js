function merge(arr1,arr2){
let result =[]
let i =0
let j=0
while(i < arr1.length && j < arr2.length){
    if(arr2[j]>arr1[i]){
        result.push(arr1[i])
        i++
    }
    else{
        result.push(arr2[j])
        j++
    }
}
while(i < arr1.length){
    result.push(arr1[i])
    i++
}
while(j < arr2.length){
    result.push(arr2[j])
    j++
}return result
}


function mergeSort(arr){
    if(arr.length<=1) return arr
    let mid=Math.floor(arr.length/2)
    let left=mergeSort(arr.slice(0,mid))
    let right=mergeSort(arr.slice(mid))
    return merge(left,right)
}
b = [4,2,4,8,12,9,3,6]
a = b.filter( c =>c%2 === 0 )
let A=mergeSort(a)
console.log(A);
