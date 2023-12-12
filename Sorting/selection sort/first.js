let a =[]
let b =[56,98,12,31,8,5,3,2,1]
a = b.filter( c =>c%2 === 0 )

for(let i= 0;i < a.length;i++)
{
let lowest = i
for(let j = i+1;j<a.length;j++)
{
    if(a[j]<a[lowest])
    {
        lowest = j
    }
}
if(i !== lowest)
{
    let temp = a[i]
    a[i] = a[lowest]
    a[lowest] =temp 
}
}
console.log(a)