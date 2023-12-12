function BinarySearch(arr,num)
{
  let l_i = 0 //left index
  let r_i = arr.length-1 //right index
while(l_i <= r_i)
{
  let m_i = Math.floor((r_i + l_i)/2)
  if(arr[m_i] === num)
  {
    return m_i //middle index
  }
  if(arr[m_i]<num)
{
  l_i = m_i+1
}
else
{
  c_num = arr[m_i]
  r_i = m_i - 1
}
}
return c_num

 }
 console.log(BinarySearch([-5,2,4,6,10],8))