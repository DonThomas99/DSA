a =[8,5,2,1,3]
for(i=1;i<a.length;i++)
{
    for(j=i;j>0;j--)
    {
        if(a[j]<a[j-1])
        {
            let temp = a[j]
            a[j] = a[j-1]
            a[j-1] = temp
        }
    }
}
console.log(a)