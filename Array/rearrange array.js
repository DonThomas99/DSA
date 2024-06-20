function rearrangeArray(arr){
    const zeroIndex = arr.indexOf(0)
    if(zeroIndex === -1){
        console.log("no zero")
    }
    const leftPart = arr.slice(0,zeroIndex)
    const rightPart = arr.slice(zeroIndex +1)
    
    const leftOdds = leftPart.filter(num => num % 2 !==0)
    const leftEvens = leftPart.filter(num => num %2 ===0 )
    
    
    const rightOdds = rightPart.filter(num => num % 2 !== 0)
    const rightEvens = rightPart.filter(num => num % 2 === 0)

    const newLeftPart = leftOdds.concat(rightOdds)
    const newRightPart = rightEvens.concat(leftEvens)
    
    
    const newArray = newLeftPart.concat(0,newRightPart)
    return newArray
}

const arr = [7,4,5,6,0,3,2,8,10,12,11,13]
const output = rearrangeArray(arr)
console.log(output)