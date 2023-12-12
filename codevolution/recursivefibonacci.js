function recursivefibon (n)
{
    if(n<2)
    { 
        return n
    }
    console.log(n);
    return recursivefibon(n-1) + recursivefibon(n-2)

}
console.log(recursivefibon(6))