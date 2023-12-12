function findMostFrequentElement(hashTable) {
    let maxFrequency = 0;
    let mostFrequentElement = null;
  
    for (let [key, value] of Object.entries(hashTable)) {
      if (value > maxFrequency) {
        maxFrequency = value;
        mostFrequentElement = key;
      }
    }
  
    return mostFrequentElement;
  }
  
  
  const hashTable = {
    'apple': 3,
    'banana': 1,
    'orange': 5,
    'grape': 2,
    'kiwi': 6
  };
  
  const mostFrequent = findMostFrequentElement(hashTable);
  console.log(`The most frequent element is: ${mostFrequent}`);
  