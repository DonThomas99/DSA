function quickSort(arr)
{
    if(arr.length<2) 
    return arr
    const pivot=arr[arr.length-1]
    const left=[]
    const right=[]
    for(let i=0;i<arr.length-1;i++)
    {
        if(arr[i]<pivot)
        {
            left.push(arr[i])
        }
        else{
            right.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}
arr = [27,21,5,9,8,2,12,15]
a = arr.filter( c =>c%3 == 0 )
let sortedArray=quickSort(a)
console.log(sortedArray);