function isAnagram(num1, num2) {
    const str1 = num1.toString();
    const str2 = num2.toString();
  
    if (str1.length !== str2.length) {
      return false;
    }
  
    const frequency1 = {};
    const frequency2 = {}
  
    for (let i = 0; i < str1.length; i++) {
      const digit = str1[i]
      frequency1[digit] = (frequency1[digit] || 0) + 1
    }
  
    for (let i = 0; i < str2.length; i++) {
      const digit = str2[i]
      frequency2[digit] = (frequency2[digit] || 0) + 1
    }
  
    for (let digit in frequency1) {
      if (frequency1[digit] !== frequency2[digit]) {
        return false
      }
    }
  
    return true
  }
  
  
  const number1 = 1234
  const number2 = 4320
  
  if (isAnagram(number1, number2)) {
    console.log(`${number1} and ${number2} are anagrams.`)
  } else {
    console.log(`${number1} and ${number2} are not anagrams.`)
  }
  