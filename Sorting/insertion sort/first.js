let a =[]
let b =[55,9,15,31,8,5,3,2,1]
//a = b.filter( c =>c%2 !== 0 )
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
            //else
            //{ break
            //}
        }
    }
console.log(a)