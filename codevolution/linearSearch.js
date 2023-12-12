function linearSearch(arr,num)
{ let pos=-1 
 for(let i=0;i<5;i++)
 {
   if(arr[i]==num)
   {
     pos =i
   }
   }
   return pos
}
console.log(linearSearch([-5,4,2,6,10],2))