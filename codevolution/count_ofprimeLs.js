function isprime(num)
{ 
    if(num < 2)
    {
        return false
    }
    for(let j=2;j<num/2;j++)
    {
        if((num % j) ==0 &&(num !=2))
        {
            return false 
        }
    }
    return true

}
function countofprimeLs(arr) 
{ 

    let count = 0
    for(let i=0;i<arr.length;i++)
    { 
        if(isprime(arr[i]))
        {
            count++
        }   
        
    }
   return count
}
console.log(countofprimeLs([1,2,3]))