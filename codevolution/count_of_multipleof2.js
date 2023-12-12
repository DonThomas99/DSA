function countof2s(arr,n)
{ let pos=0 
 for(let i=0;i<n;i++)
 {
   if(arr[i]%2==0)
   {
     pos++
   }
   }
   return pos
}
console.log(countof2s([-5,4,2,6,10],5))