function recursiveBinarySearch(arr,num)
{
return search(arr,num,0,arr.length - 1)
}


function search(arr,num,l_i,r_i)
{
  if(l_i > r_i)
  {
    return -1
  }
  let m_i = Math.floor((l_i + r_i)/2)
  if(num === arr[m_i])
  {
    return m_i
  }
if(num < arr[m_i])
  {
   return search (arr,num,l_i,m_i-1)
}
else
{
   return search (arr,num,m_i+1,r_i)
}
}


 
 console.log(recursiveBinarySearch([-5,2,4,6,10],6))