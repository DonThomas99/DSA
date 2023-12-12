a =[1,2,3,4,6,5,7,9,8,10]
let n = a.length
let inversions=0

for(i=0;i<n;i++)
{
    for(j=0;j<n-i;j++)
    {
        if(a[j+1]<a[j])

        {
            let temp = a[j]
            a[j] = a[j+1]
            a[j+1] = temp 
            flag = true
            inversions++
        }
    }
    
}

console.log(a)
console.log("number of inversions:",inversions)