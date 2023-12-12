function countRepetition(str) {
    const repetition = {};
    
    // Iterate over each character in the string
    for (let char of str) {
      if (repetition[char]) {
        repetition[char]++;
      } else {
        repetition[char] = 1;
      }
    }
    
    return repetition;
  }
  
  const string = "hello";
  const repetitionCount = countRepetition(string);
  console.log(repetitionCount);
  