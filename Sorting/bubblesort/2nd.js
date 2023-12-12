function removeDuplicates(array) {
    const n = array.length;
   // let swapped;
    
    for(i = 0;i < n;i++)
    {  
      for (let i = 0; i < n - 1; i++) {
        if (array[i] === array[i + 1]) {
         
            for (let j = i + 1; j < n - 1; j++) {
            array[j] = array[j + 1];
          }
          n--; 
         //swapped = true;
        }
      }
    } 
    
    
    array.length = n;
    
    return array;
  }
  
  const array = [2, 5, 1, 6, 2, 3, 5, 1, 4]
  const uniqueArray = removeDuplicates(array)
  console.log("Array without duplicates:", uniqueArray)
  